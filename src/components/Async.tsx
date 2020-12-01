import { useObserver } from "mobx-react";
import React, { useEffect } from "react";
import { useStore } from "../stores";
import "./Async.scss";

export default function Async() {
  const { cat: catStore } = useStore();
  console.log(catStore.toJSON());
  useEffect(() => {
    const interval = setInterval(() => {
      catStore.changeChatImg();
    }, 3000);

    return () => clearInterval(interval);
  }, [catStore]);

  return useObserver(() => (
    <div className="async-bg">
      <div className="async-container">
        <h1 className="async-title">고양이</h1>
        <img className="cat-img" src={catStore.catImg} alt="cat" />
        <div className="cat-list-container">
          {catStore.catList.map((url, index) => (
            <img className="cat-list" key={index} src={url} alt="cat-list" />
          ))}
        </div>
      </div>
    </div>
  ));
}

import { useObserver } from "mobx-react";
import React, { useEffect } from "react";
import { useStore } from "../stores";
import axios from "axios";
import "./Async.scss";

export default function Async() {
  const { cat: catStore } = useStore();

  useEffect(() => {
    const requestCatImg = async () => {
      const { data } = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
      );
      const url: string = data[0].url;

      catStore.changeChatImg(url);
    };

    const interval = setInterval(() => {
      requestCatImg();
    }, 3000);

    return () => clearInterval(interval);
  }, [catStore]);

  return useObserver(() => (
    <div className="async-bg">
      <div className="async-container">
        <h1 className="async-title">고양이</h1>
        <img className="cat-img" src={catStore.catImg} alt="cat" />
      </div>
    </div>
  ));
}

import React from "react";
import { useObserver } from "mobx-react";
import { useStore } from "../stores";
import "./Count.scss";

export default function Count() {
  const { counter } = useStore();

  return useObserver(() => (
    <div className="count-bg">
      <div className="count-container">
        <h1>{counter.count}</h1>
        <button className="plus-button" onClick={() => counter.increase()}>
          +
        </button>
        <button className="minus-button" onClick={() => counter.decrease()}>
          -
        </button>
      </div>
    </div>
  ));
}

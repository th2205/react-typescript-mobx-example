import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home-bg">
      <div className="home-container">
        <Link to="/counter">Counter</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/async">Async</Link>
      </div>
    </div>
  );
}

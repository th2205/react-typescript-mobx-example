import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todo from "./components/Todo";
import Count from "./components/Count";
import Home from "./components/Home";
import Async from "./components/Async";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/todo" component={Todo} exact />
        <Route path="/counter" component={Count} exact />
        <Route path="/async" component={Async} exact />
      </Switch>
    </Router>
  );
}

export default App;

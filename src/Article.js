import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Club from "./Club";

function Article() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/articles/chomutov-ve-vesmiru" exact component={Club} />
          <Route />
        </Switch>
      </Router>
    </div>
  );
}

export default Article;

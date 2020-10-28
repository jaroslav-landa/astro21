import React from "react";
import "./styles/style.css";
import { Switch, Route } from "react-router-dom";
import ArticlesNav from "./ArticlesNav";
import Club from "./Club";
import ChomutovVeVesmiru from "./articles_content/ChomutovVeVesmiru";

function Articles() {
  return (
    <div className="content">
      <h1>Články</h1>
      <Switch>
        <Route exact path="/articles" component={ArticlesNav} />
        <Route
          path="/articles/chomutov-ve-vesmiru"
          component={ChomutovVeVesmiru}
        />
        <Route
          path="/articles/projekt-hvezdarna-f-j-gerstnera"
          component={Club}
        />
      </Switch>
    </div>
  );
}

export default Articles;

import React from "react";
import "../styles/style.css";
import { Switch, Route } from "react-router-dom";
import ArticlesNav from "./ArticlesNav";
import ChomutovVeVesmiru from "../articles_content/ChomutovVeVesmiru";
import ProjektHvezdarnaFJGerstnera from "../articles_content/ProjektHvezdarnaFJGerstnera";

function Articles() {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/articles" component={ArticlesNav} />
        <Route
          path="/articles/chomutov-ve-vesmiru"
          component={ChomutovVeVesmiru}
        />
        <Route
          path="/articles/projekt-hvezdarna-f-j-gerstnera"
          component={ProjektHvezdarnaFJGerstnera}
        />
      </Switch>
    </div>
  );
}

export default Articles;

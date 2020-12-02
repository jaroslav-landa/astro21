import React from "react";
import "../styles/style.css";
import { Switch, Route } from "react-router-dom";
import ArticlesNav from "./ArticlesNav";
import ChomutovVeVesmiru from "../articles_content/ChomutovVeVesmiru";
import ProjektHvezdarnaFJGerstnera from "../articles_content/ProjektHvezdarnaFJGerstnera";
import ZatmeniSlunce20brezna2015 from "../articles_content/ZatmeniSlunce20brezna2015";

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
        <Route
          path="/articles/zatmeni-slunce-20-brezna-2015"
          component={ZatmeniSlunce20brezna2015}
        />
      </Switch>
    </div>
  );
}

export default Articles;

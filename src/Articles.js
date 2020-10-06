import React from "react";
import "./styles/style.css";
import articlesData from "./data/articlesData.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Club from "./Club";
import ChomutovVeVesmiru from "./articles_content/ChomutovVeVesmiru";

function Articles() {
  const articleLinks = articlesData;

  return (
    <div className="content">
      <h1>Články</h1>
      <nav>
        <Router>
          <ul className="articles-bar">
            {articleLinks.map((link) => (
              <Link to={link.path} key={link.id}>
                <li className="article-link">
                  <div className="article-preview">
                    <img
                      className="picture"
                      alt="náhled článku"
                      src={link.picture}
                    />
                    <div className="info">
                      <div className="title">{link.title}</div>
                      <div className="preview-text">{link.previewText}</div>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
          <Switch>
            <Route
              exact path="/articles/chomutov-ve-vesmiru"
              exact component={ChomutovVeVesmiru}
            />
            <Route
              path="/articles/projekt-hvezdarna-f-j-gerstnera"
              component={Club}
            />
          </Switch>
        </Router>
      </nav>
    </div>
  );
}

export default Articles;

import React from "react";
import "./styles/style.css";
import articlesData from "./data/articlesData.json";
import { Link } from "react-router-dom";

function ArticlesNav() {
  const articleLinks = articlesData;

  return (
    <nav>
      <ul className="articles-bar">
        {articleLinks.map((link) => (
          <Link to={link.path} key={link.id}>
            <li className="article-link">
              <div className="preview">
                <img
                  className="picture"
                  alt="náhled článku"
                  src={link.picture}
                />
                <div className="info">
                  <div className="title">{link.title}</div>
                  <div className="text">{link.previewText}</div>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default ArticlesNav;
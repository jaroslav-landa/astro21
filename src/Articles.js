import React from 'react';
import './styles/style.css';
import { Link, withRouter } from 'react-router-dom';
import articlesData from './data/articlesData.json';

function Articles() {
  const articleLinks = articlesData;

  return (
    <div className="content">
      <h1>Články</h1>
      <nav>
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
      </nav>
    </div>
  );
}

export default Articles;
import React from "react";
import { Link, withRouter } from "react-router-dom";

function NavigationBar() {
  return (
    <nav>
      <ul className="navigation-bar">
        <Link to="/news">
          <li>Novinky</li>
        </Link>
        <Link to="/gallery">
          <li>Galerie</li>
        </Link>
        <Link to="/articles">
          <li>Články</li>
        </Link>
        <Link to="/club">
          <li>Kroužek astronomie</li>
        </Link>
        <Link to="/observatory">
          <li>Hvězdárna Chomutov</li>
        </Link>
        <Link to="/chronicle">
          <li>Kronika astro21</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavigationBar;

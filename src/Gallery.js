import React from "react";
import SetOfPhotos from "./SetOfPhotos";
import "./styles/style.css";

function Gallery() {
  return (
    <div className="content">
      <SetOfPhotos event="Pozorování měsíce" date="27.7.2018" />
      <SetOfPhotos event="Druhý pokus" date="27.7.2018" />
    </div>
  );
}

export default Gallery;

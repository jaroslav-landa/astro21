import React from "react";
import SetOfPhotos from "./SetOfPhotos";
import "../styles/style.css";
import photos2018_07_27 from "../data/gallery/2018-07-27.json";
import photos2015_03_20 from "../data/gallery/2015-03-20.json";
import photos2015_05_21 from "../data/gallery/2015-05-21.json";

function Gallery() {
  return (
    <div className="content">
      <SetOfPhotos event="Pozorování Měsíce" date="27.7.2018" photos={photos2018_07_27} />
      <SetOfPhotos event="Letiště Praha Ruzyně" date="21.5.2015" photos={photos2015_05_21} />
      <SetOfPhotos event="Pozorování Jupiteru" date="20.3.2015" photos={photos2015_03_20} />
    </div>
  );
}

export default Gallery;

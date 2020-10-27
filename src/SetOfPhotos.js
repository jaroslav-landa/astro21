import React from "react";
import "./styles/style.css";
import galleryData from "./data/gallery/2018-7-27-data.json";

function openPicture(url) {
  window.open(url, "_blank");
}

function SetOfPhotos({ event, date }) {
  const photos = galleryData;

  return (
    <div>
      <h1>{event}</h1>
      <h3>{date}</h3>
      <div className="set-of-photos">
        {photos.map((photo) => (
          <img
            className="picture"
            key={photo.id}
            alt={photo.alt}
            src={photo.url}
            onClick={() => openPicture(photo.url)}
          />
        ))}
      </div>
    </div>
  );
}

export default SetOfPhotos;

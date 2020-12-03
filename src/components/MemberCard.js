import React from "react";
import "../styles/style.css";

function MemberCard({ name, photo, position, description }) {
  return (
    <div className="member-card">
      <img className="photo" alt="člen" src={photo} />
      <div className="name">{name}</div>
      <div className="position">{position}</div>
      <p>{description}</p>
    </div>
  );
}

export default MemberCard;

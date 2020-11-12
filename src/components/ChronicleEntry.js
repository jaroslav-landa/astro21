import React from "react";
import "../styles/style.css";

function ChronicleEntry({ date, activity, description }) {
  return (
    <div className="chronicle-entry">
      <div className="date">
        {date}
        <div className="activity"> {activity}</div>
      </div>
      <div className="description">{description}</div>
    </div>
  );
}

export default ChronicleEntry;

import React from "react";
import "./styles/style.css";

function ChronicleEntry({ date, activity, description }) {
  return (
    <div className="chronicle-entry">
      <div className="chronicle-entry-date">
        {date}
        <div className="chronicle-entry-activity"> {activity}</div>
      </div>
      <div className="chronicle-entry-description">{description}</div>
    </div>
  );
}

export default ChronicleEntry;

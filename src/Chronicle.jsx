import React, { useState } from "react";
import "./styles/style.css";
import ChronicleEntry from "./ChronicleEntry";
import chronicleData from "./data/chronicleData.json";

function Chronicle() {
  const entries = chronicleData;
  return (
    <div className="chronicle content">
      <h1>Kronika astro21</h1>
      {entries.map((entry) => (
        <div key={entry.id}>
          <ChronicleEntry
            date={entry.date}
            activity={entry.activity}
            description={entry.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Chronicle;

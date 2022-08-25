import React from "react";
import "../App.css";
import { analytics } from "../db";

function Movie() {
  console.log(analytics);
  return (
    <div className="wrapper">
      {analytics.map((e) => (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,400px)",
            gridTemplateRows: "auto",
          }}
        >
          <div>
            <p>{e.episodeId}</p>
            <p>{e.publishTime}</p>
            <p>{e.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movie;

import { valueToPercent } from "@mui/base";
import React from "react";
import "./gener.css";

function Gener({ movies, title }) {
  console.log(movies, title, "ddfu");

  if (movies.length == 0) {
    return null;
  }

  return (
    <div className="generContainer">
      <p className="generTitle">{title}</p>
      <div className="moveiesContainer">
        {movies.map((val) => {
          return (
            <div
              className="movie"
              style={{
                backgroundImage: `url(${val.backdrop})`,
              }}
            >
              <p className="movieTitle">{val.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gener;

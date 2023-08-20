import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

function Row(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  return (
    <div className="row">
      <h1 className="row__title">{props.title}</h1>
      <div className="row__items">
        {movies.map((movie) => (
          <img
            className="row__img"
            src={`https:image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.name}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;

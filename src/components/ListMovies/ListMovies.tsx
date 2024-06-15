import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../Movie/Movie";
import style from './ListMovies.module.css';

interface Movi {
  id: number;
  title: string;
  background_image_original: string;
  genres: string[];
  rating: number;
  runtime: number;
  summary: string;
  year: string;
}

function ListMovies() {
  const [listMovie, setListMovie] = useState<Movi[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json/limit=50");
    setListMovie(movies);
    console.log(movies);
  }

  return (
    <div className={style.container}>
      {listMovie.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          background_image_original={movie.background_image_original}
          genres={movie.genres}
          rating={movie.rating}
          runtime={movie.runtime}
          summary={movie.summary}
          year={movie.year}
        />
      ))}
    </div>
  );
}

export default ListMovies;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../Movie/Movie";
import style from './ListMovies.module.css';

interface Movie {
  id: number;
  title: string;
  background_image_original: string;
  genres: string[];
  rating: number;
  runtime: number;
  summary: string;
  year: string;
}

function ListMovies({ sortOption }: { sortOption: string }) {
  const [listMovie, setListMovie] = useState<Movie[]>([]);
  const [sortedMovies, setSortedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies();
  }, [sortOption]);

  async function getMovies() {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?limit=50");
    setListMovie(movies);
  }

  useEffect(() => {
    let sortedList = [...listMovie];
    switch (sortOption) {
      case 'genre':
        sortedList.sort((a, b) => a.genres[0].localeCompare(b.genres[0]));
        break;
      case 'rating':
        sortedList.sort((a, b) => b.rating - a.rating);
        break;
      case 'year':
        sortedList.sort((a, b) => parseInt(b.year) - parseInt(a.year));
        break;
      default:
        break;
    }
    setSortedMovies(sortedList);
  }, [sortOption, listMovie]);

  return (
    <div className={style.container}>
      {sortedMovies.map((movie) => (
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

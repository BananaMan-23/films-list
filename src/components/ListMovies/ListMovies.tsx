import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../Movie/Movie";
import Modal from "../Modal/Modal";
import styles from "./ListMovies.module.css";

interface MovieDetails {
  id: number;
  title: string;
  background_image_original: string;
  genres: string[];
  rating: number;
  year: string;
}

interface ListMoviesProps {
  sortOption: string;
  searchQuery: string;
}

const ListMovies: React.FC<ListMoviesProps> = ({ sortOption, searchQuery }) => {
  const [movies, setMovies] = useState<MovieDetails[]>([]);
  const [sortedMovies, setSortedMovies] = useState<MovieDetails[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    fetchMovies();
  }, [sortOption]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?limit=50"
      );
      const fetchedMovies = response.data.data.movies;
      setMovies(fetchedMovies);
      setSortedMovies([...fetchedMovies]);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    let sortedList = [...movies];
    switch (sortOption) {
      case "genre":
        sortedList.sort((a, b) => a.genres[0].localeCompare(b.genres[0]));
        break;
      case "rating":
        sortedList.sort((a, b) => b.rating - a.rating);
        break;
      case "year":
        sortedList.sort((a, b) => parseInt(b.year) - parseInt(a.year));
        break;
      default:
        break;
    }
    setSortedMovies(sortedList);
  }, [sortOption, movies]);

  const handleMovieClick = (movie: MovieDetails) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.container}>
      {sortedMovies
        .filter((movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((movie) => (
          <div key={movie.id} onClick={() => handleMovieClick(movie)}>
            <Movie
              id={movie.id}
              title={movie.title}
              background_image_original={movie.background_image_original}
              genres={movie.genres}
              rating={movie.rating}
              year={movie.year}
            />
          </div>
        ))}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        movie={selectedMovie}
      />
    </div>
  );
};

export default ListMovies;

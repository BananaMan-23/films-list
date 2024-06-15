import style from "./Movie.module.css";
import React from "react";

interface MovieProps {
  id: number;
  title: string;
  background_image_original: string;
  genres: string[];
  rating: number;
  runtime: number;
  summary: string;
  year: string
}

const Movie: React.FC<MovieProps> = ({
  id,
  title,
  background_image_original,
  genres,
  rating,
  runtime,
  summary,
  year
}) => {
  return (
    <div className={style.container} key={id}>
      <h2 className={style.title}>{title}</h2>
      <img className={style.image} src={background_image_original} alt={title} />
      <div className={style.genre}>
        {genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
      <span className={style.rating}>Rating: {rating}</span>
      <span className={style.runtime}>Time: {runtime}</span>
      <span className={style.age}>year: {year}</span>
      <p className={style.about}>{summary}</p>
    </div>
  );
};

export default Movie;

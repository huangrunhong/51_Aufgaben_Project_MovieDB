import "./MovieItem.css";
import { Link } from "react-router-dom";
const MovieItem = ({ id, title, year, director, duration, rate, genre }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="movieItem" key={id}>
        <h2>{title}</h2>

        <h3>{year}</h3>
        <h4>{director}</h4>
        <h4>{duration}</h4>
        <h4>{rate}</h4>
        <div>{genre}</div>
      </div>
    </Link>
  );
};

export default MovieItem;

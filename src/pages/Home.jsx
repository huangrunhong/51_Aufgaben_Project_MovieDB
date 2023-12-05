import { useState } from "react";
import Button from "../components/Button";
import data from "../data/data";
import MovieItem from "../components/MovieItem";

const Home = () => {
  const [movies, setMovies] = useState(data);
  const [movieSearchIn, setMovieSearchIn] = useState("");

  //   Sort database in ascending order by year of publication
  const sortByAscending = () => {
    data.sort((movie1, movie2) => movie1.year - movie2.year);
    setMovies([...data]);
  };

  // Sort database in descending order by year of publication
  const sortByDescending = () => {
    data.sort((movie1, movie2) => movie2.year - movie1.year);
    setMovies([...data]);
  };

  // Sort database in descending order by rate of movie
  const sortByRate = () => {
    data.sort((movie1, movie2) => movie2.rate - movie1.rate);
    setMovies([...data]);
  };

  // Arrange alphabetically from A to Z
  const AToZ = () => {
    data.sort(
      (movie1, movie2) =>
        movie1.title.charCodeAt(0) - movie2.title.charCodeAt(0)
    );
    setMovies([...data]);
  };

  // Arrange alphabetically from Z to A
  const ZToA = () => {
    data.sort(
      (movie1, movie2) =>
        movie2.title.charCodeAt(0) - movie1.title.charCodeAt(0)
    );
    setMovies([...data]);
  };
  const movieSearch = () => {
    const movieFilter = data.filter((singelData) =>
      singelData.title.toLowerCase().includes(movieSearchIn.toLowerCase())
    );
    setMovies(movieFilter);
    console.log(movies);
  };

  return (
    <section>
      {/* search area */}
      <h1>Welcome to MovieDB</h1>
      <div className="searchArea">
        <input
          type="text"
          placeholder="please enter a movie name"
          onChange={(event) => setMovieSearchIn(event.target.value)}
        />
        <Button onClick={movieSearch} name={"Search"} />
      </div>

      {/* button category */}
      <div className="buttons">
        <Button onClick={sortByAscending} name={"Sort by Date Ascending"} />
        <Button onClick={sortByDescending} name={"Sort by Date Descending"} />
        <Button onClick={sortByRate} name={"Best Rate"} />
        <Button onClick={AToZ} name={"A-Z"} />
        <Button onClick={ZToA} name={"Z-A"} />
      </div>

      {/* Movie Gallery */}
      <article className="movieList">
        {movies ? (
          movies.map((singleMovie, index) => (
            <MovieItem
              key={index}
              id={index}
              title={singleMovie.title}
              year={singleMovie.year}
              director={singleMovie.director}
              duration={singleMovie.duration}
              rate={singleMovie.rate}
              genre={singleMovie.genre.map((singleGerne) => (
                <p key={singleGerne.index}>{singleGerne}</p>
              ))}
            />
          ))
        ) : (
          <p>no movies</p>
        )}
      </article>
    </section>
  );
};

export default Home;

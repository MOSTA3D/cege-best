import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import { PopularMovie } from "../utils/types";
import MovieCard from "./Movie";
import Loading from "./Loading";
import { fetchMoviesByPage } from "../services/MovieGrid.service";

function MovieGrid() {
  const [popularMoviesList, setPopularMoviesList] = useState<PopularMovie[]>(
    []
  );
  const [page, setPage] = useState<number>(3);
  const navElementHeight = useRef(0);

  const handleWindowScroll = () => {
    // @todo : apply debouncing
    if (
      Math.ceil(window.scrollY + window.innerHeight) ===
      document.body.scrollHeight + navElementHeight.current
    ) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    navElementHeight.current =
      document.getElementsByClassName("nav")[0]?.clientHeight;
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  useEffect(() => {
    (async function () {
      // @todo : apply error handling
      const data = (await fetchMoviesByPage(page)) as PopularMovie[];
      setPopularMoviesList([...popularMoviesList, ...data]);
    })();
  }, [page]);

  return popularMoviesList.length ? (
    <div className="movie-grid">
      {popularMoviesList.map((movie) => {
        return (
          <div key={movie.title} className={"something"}>
            <span>
              <Link to={`/movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </span>
          </div>
        );
      })}
    </div>
  ) : (
    <Loading />
  );
}

export default MovieGrid;

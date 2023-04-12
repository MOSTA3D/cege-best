import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";

import { PopularMovie } from "../utils/types";
import MovieCard from "./Movie";
import Loading from "./Loading";
import { fetchMoviesByPage } from "../services/MovieGrid.service";

function MovieGrid() {
  const [popularMoviesList, setPopularMoviesList] = useState<PopularMovie[]>(
    []
  );
  const [page, setPage] = useState<number>(1);
  const navElementHeight = useRef(0);

  const handleWindowScroll = useCallback((() => {
    let timeoutKey: NodeJS.Timeout;

    return function () {
      if (timeoutKey) clearTimeout(timeoutKey);

      timeoutKey = setTimeout(() => {
        const scrollY = window.scrollY;
        const innerHeight = window.innerHeight;
        const scrollHeight = document.body.scrollHeight;

        if ((scrollHeight + navElementHeight.current) - (scrollY + innerHeight) < 50) {
          setPage(page => page + 1);
        }
      }, 300)
    }

  })(), []);

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
      const data = await fetchMoviesByPage(page);
      setPopularMoviesList([...popularMoviesList, ...data]);
    })();
  }, [page]);

  return popularMoviesList.length ? (
    <div className="movie-grid">
      {popularMoviesList.map((movie) => {
        return (
          <div key={movie.id} className={"something"}>
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

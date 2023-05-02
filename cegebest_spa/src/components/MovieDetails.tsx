import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BACKEND_URL, POSTER_API } from "../utils/config";
import { FetchFacad, getData } from "../utils/helper";
import { ApiMessage, MovieDetails } from "../utils/types";

function MovieDetailsComponent() {
  const [movieDetails, setMovieDetails] = useState({} as MovieDetails);

  const { id } = useParams();

  const tableRows = (({
    original_language,
    release_date,
    runtime,
    vote_average,
  }) => ({
    original_language,
    release_date,
    runtime,
    vote_average,
  }))(movieDetails);

  movieDetails.runtime &&
    (movieDetails.runtime = movieDetails.runtime.toString() + " minures");

  useEffect(() => {
    (async function () {
      try {
        const data = await getData<MovieDetails>(
          `${BACKEND_URL}/${id}`
        );

        setMovieDetails(data);
      } catch (e) {
        console.log(e);
        return;
      }
    })();
  }, [id]);
  return movieDetails ? (
    <div
      className="movie-details"
      style={{
        backgroundImage: `${POSTER_API}/w500/${movieDetails.backdrop_path}`,
      }}
    >
      <aside>
        <img
          src={`${POSTER_API}/w400/${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
      </aside>
      <main>
        <h1 className="title">{movieDetails.title}</h1>
        <br />
        <h1 className="overview"> Overview</h1>
        <p>{movieDetails.overview}</p>
        <br />
        <table>
          <tbody>
            {Object.entries(tableRows).map((el, i) => {
              let withoutUnderScore = el[0].split("_").join(" ");
              const replacer = withoutUnderScore.replace(
                withoutUnderScore.charAt(0),
                withoutUnderScore.charAt(0).toLocaleUpperCase()
              );
              el[0] = replacer;
              return (
                <tr key={i}>
                  <td>{el[0]}</td>
                  <td>{el[1]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  ) : (
    <div>loading</div>
  );
}

export default MovieDetailsComponent;

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BACKEND_URL, POSTER_API } from "../utils/config";
import { FetchFacad, movieTestDetails } from "../utils/helper";
import { Err, MovieDetailsType } from "../utils/types";

function MovieDetails(){
    const [movieDetails, setMovieDetails] = useState({} as MovieDetailsType);

    const {id} = useParams();

    const tableRows = ((
        {
            original_language,
            release_date,
            runtime,
            vote_average
    })=>({
            original_language,
            release_date,
            runtime,
            vote_average
    }))(movieDetails);

    movieDetails.runtime&&((movieDetails.runtime as unknown as String) = movieDetails.runtime.toString() + " minures");

    useEffect(()=>{
        (async function(){
            // const fetchFacad = FetchFacad.getFetchFacad();
            // const data = await fetchFacad.getData<MovieDetailsType>(`${BACKEND_URL}/${id}`);
            // // if(!data || data.message as Err){
            // //     return;
            // // }

            // if((data as Err).message){
            //     console.log((data as Err).message);
            //     return;
            // }

            // setMovieDetails(data as MovieDetailsType);
            setMovieDetails(movieTestDetails);
        })()


    }, []);
    return (
        movieDetails ? (
        <div className="movie-details" style = {{backgroundImage: `${POSTER_API}/w500/${movieDetails.backdrop_path}`}}>
            
            <aside>
                <img src={`${POSTER_API}/w400/${movieDetails.poster_path}`} alt={movieDetails.title}/>
            </aside>
            <main>
                <h1 className="title">{movieDetails.title}</h1>
                <br/>
                <h1 className="overview"> Overview</h1>
                <p>
                    {movieDetails.overview}
                </p>
                <br/>
                <table>
                    <tbody>
                        {
                            Object.entries(tableRows).map((el, i)=>{
                                let withoutUnderScore = el[0].split('_').join(" ");
                                const replacer = withoutUnderScore.replace(withoutUnderScore.charAt(0), withoutUnderScore.charAt(0).toLocaleUpperCase());
                                el[0] = replacer;
                                return (
                                    <tr key={i}>
                                        <td>{el[0]}</td>
                                        <td>{el[1]}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </main>
        </div>):(
            <div>
                loading
            </div>
        )
    )
}

export default MovieDetails;
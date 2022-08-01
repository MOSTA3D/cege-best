import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BACKEND_URL } from "../utils/config";
import { FetchFacad } from "../utils/helper";
import { Err, MovieDetailsType } from "../utils/types";

function MovieDetails(){
    const [movieDetails, setMovieDetails] = useState(null as unknown as MovieDetailsType);

    const {id} = useParams();
    useEffect(()=>{
        (async function(){
            const fetchFacad = FetchFacad.getFetchFacad();
            const data = await fetchFacad.getData<MovieDetailsType>(`${BACKEND_URL}/${id}`);
            // if(!data || data.message as Err){
            //     return;
            // }

            if((data as Err).message){
                console.log((data as Err).message);
                return;
            }

            setMovieDetails(data as MovieDetailsType);
        })()


    }, []);
    return (
        <div className="movie-details">
            
        </div>
    )
}

export default MovieDetails;
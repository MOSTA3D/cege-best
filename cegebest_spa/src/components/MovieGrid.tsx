import { Link } from "react-router-dom";
import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";

import { IMovieGridProps, MovieType } from "../utils/types";
import Movie from "./Movie";
import { FetchFacad, testData } from "../utils/helper";

function MovieGrid(){
    const [popularMoviesList, setPopularMoviesList]:[MovieType[]|never,Dispatch<SetStateAction<MovieType[]|never[]>>] = useState(testData.results);

    useEffect(()=>{
        const fetchFacad = FetchFacad.getFetchFacad();
    
        // (async function(){
        //   const data = await fetchFacad.getData<MovieType[]>(`${BACKEND_URL}/popular`);
        //   if(!(data as Err).message){
        //     return;
        //   }
        //   setMoviesList(testData.results);
        // })()
    
        window.onscroll = ()=>{
        //   if(!navRef.current) return;
    
        //   if((window.scrollY + window.innerHeight) === (document.body.scrollHeight + (navRef.current as HTMLElement).offsetHeight)){
        //     console.log("you reached the end");
        //     // fetchFacad.getData(`${BACKEND_URL}/movie/`);
        //   }
        }
    
        setPopularMoviesList(testData.results);
        console.log(popularMoviesList.length);
    
      }, [])
    return (
        <div className="movie-grid">
            {popularMoviesList.length ? (popularMoviesList.map((movie:MovieType) =>{
                 return (
                    <div key={movie.id} className={'something'}>
                        <span>
                            <Link to={`/movies/${movie.id}`}>
                                <Movie movie={movie}/>
                            </Link>
                        </span>
                    </div>
                 )
            })):(
                <div>loading</div>
            )}
        </div>
    )
}

export default MovieGrid;
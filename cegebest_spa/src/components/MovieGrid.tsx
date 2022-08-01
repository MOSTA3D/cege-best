import { Link } from "react-router-dom";
import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";

import { Err, IMovieGridProps, MovieType } from "../utils/types";
import Movie from "./Movie";
import { FetchFacad, testData } from "../utils/helper";
import { BACKEND_URL } from "../utils/config";

function MovieGrid(){
    const [popularMoviesList, setPopularMoviesList]:[MovieType[]|never,Dispatch<SetStateAction<MovieType[]|never[]>>] = useState([] as MovieType[]);
    const navElementHeight = useRef(0);
    const pageRef = useRef(2);


    console.log(navElementHeight.current);

    useEffect(()=>{
        navElementHeight.current = document.getElementsByClassName("nav")[0]?.clientHeight;
        const fetchFacad = FetchFacad.getFetchFacad();
    
        (async function(){
          const data = await fetchFacad.getData<MovieType[]>(`${BACKEND_URL}/popular?page=1`);
          if((data as Err).message){
            console.log("error");
            return;
          }
          setPopularMoviesList(data as MovieType[]);
        })()
    
        window.onscroll = ()=>{
          if(!navElementHeight) return;
    
          if((window.scrollY + window.innerHeight) === (document.body.scrollHeight + navElementHeight.current)){
            (async function(){
                const data = await fetchFacad.getData(`${BACKEND_URL}/popular?page=${pageRef.current}`);
                if((data as Err).message){
                    console.log((data as Err).message);
                }else{
                    pageRef.current++;
                    setPopularMoviesList((state)=>{
                        const newState = [...state, ...(data as MovieType[])]
                        return newState;
                    })
                }
            })()

          }
        }
    
      }, [])
    return (
        <div className="movie-grid">
            {popularMoviesList.length ? (popularMoviesList.map((movie:MovieType) =>{
                 return (
                    <div key={movie.title} className={'something'}>
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
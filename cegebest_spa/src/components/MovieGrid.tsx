import { Link } from "react-router-dom";
import { useState, useRef } from "react";

import { IMovieGridProps, MovieType } from "../utils/types";
import Movie from "./Movie";

function MovieGrid(props:IMovieGridProps){
    const {moviesList} = props;
    return (
        <div className="movie-grid">
            {moviesList.map((movie:MovieType) =>{
                 return (
                    <div key={movie.id} className={'something'}>
                        <span>
                            <Link to={`/movies/${movie.id}`}>
                                <Movie movie={movie}/>
                            </Link>
                        </span>
                    </div>
                 )
            })}
        </div>
    )
}

export default MovieGrid;
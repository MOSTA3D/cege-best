import { MutableRefObject } from "react";
import { ResponseStatus } from "./config";

export interface INavProps{
    setMoviesList:React.Dispatch<React.SetStateAction<PopularMovie[]>>,
    navRef:MutableRefObject<null>
}

export interface ISearchBoxProps{
    setMoviesList:React.Dispatch<React.SetStateAction<PopularMovie[]>>
}

export interface IPopularProps{
    moviesList:PopularMovie[]
}

export interface IMovieGridProps{
    moviesList:PopularMovie[]
}


export type PopularMovie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    posterPath: string;
    releaseDate: string;
    title: string;
    video: boolean;
    voteAverage: number;
    vote_count: number;
};

export interface ApiMessage{
    status: ResponseStatus
    message: string
}

export interface MovieDetails {
    id:number;
    adult:boolean;
    backdrop_path:string;
    title:string;
    vote_average:number;
    runtime:number|string;
    release_date:string;
    original_language:string
    poster_path:string
    overview:string
}
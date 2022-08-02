import { MutableRefObject } from "react";

export interface INavProps{
    setMoviesList:React.Dispatch<React.SetStateAction<MovieType[]>>,
    navRef:MutableRefObject<null>
}

export interface ISearchBoxProps{
    setMoviesList:React.Dispatch<React.SetStateAction<MovieType[]>>
}

export interface IPopularProps{
    moviesList:MovieType[]
}

export interface IMovieGridProps{
    moviesList:MovieType[]
}


export type MovieType = {
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

export interface Err{
    message: string
}

export interface MovieDetailsType {
    id:number;
    adult:boolean;
    backdrop_path:string;
    title:string;
    vote_average:number;
    runtime:number;
    release_date:string;
    original_language:string
    poster_path:string
    overview:string
}
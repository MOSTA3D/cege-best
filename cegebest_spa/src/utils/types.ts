import { MutableRefObject } from "react";

export interface INavProps{
    setMoviesList:React.Dispatch<React.SetStateAction<MovieType[]>>,
    ref:MutableRefObject<null>
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
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export interface Err{
    message: string
}
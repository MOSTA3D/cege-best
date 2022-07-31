import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router';
import { useEffect, useState, useRef } from 'react';
import { Dispatch, SetStateAction } from 'react';
// components
import Nav from './Nav';
import Popular from "./Popular";
import Movie from "./Movie";
import NotFound from "./NotFound";
import '../App.scss';
import { FetchFacad, testData } from '../utils/helper';

import {Err, MovieType} from "../utils/types";
import MovieDetails from './MovieDetails';
import { BACKEND_URL } from '../utils/config';


function App() {
  // state
  const [moviesList, setMoviesList]:[MovieType[]|never,Dispatch<SetStateAction<MovieType[]|never[]>>] = useState(testData.results);

  // refs
  const navRef = useRef(null);
  const pageTrack = useRef(1);
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
      if(!navRef.current) return;

      if((window.scrollY + window.innerHeight) === (document.body.scrollHeight + (navRef.current as HTMLElement).offsetHeight)){
        console.log("you reached the end");
        // fetchFacad.getData(`${BACKEND_URL}/movie/`);
      }
    }

    setMoviesList(testData.results);

  }, [])

  return (
    <div className="App">
      <Nav ref={navRef} {...{setMoviesList}}/>
      <Routes>
        <Route path="/" element={<Navigate to = "/movies" />} />
        <Route path="/movies" element={<Popular {...{moviesList}} />} />
        <Route path="/movies/:id" element={<MovieDetails/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

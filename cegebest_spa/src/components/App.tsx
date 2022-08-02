import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router';
import { useEffect, useState, useRef } from 'react';
import { Dispatch, SetStateAction } from 'react';
// components
import Nav from './Nav';
import Popular from "./Popular";
import NotFound from "./NotFound";
import '../App.scss';
import { FetchFacad } from '../utils/helper';

import {Err, MovieType} from "../utils/types";
import MovieDetails from './MovieDetails';
import { BACKEND_URL } from '../utils/config';


function App() {
  // state

  // refs
  const navRef = useRef(null);
  const pageTrack = useRef(1);
  

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Navigate to = "/movies" />} />
        <Route path="/movies" element={<Popular/>} />
        <Route path="/movies/:id" element={<MovieDetails/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

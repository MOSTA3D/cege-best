import SearchBox from "./SearchBox";
import MovieGrid from "./MovieGrid";

import { useState } from "react";
import { IPopularProps } from "../utils/types";
import Logo from "./Logo";

function Popular(props:IPopularProps){
    const { moviesList } = props;
    return (
        <div className="popular">
            <h1>Welcome To The Original <Logo/></h1>
            <MovieGrid moviesList={moviesList} />
        </div>
    )
}

export default Popular;
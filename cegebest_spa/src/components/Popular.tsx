import SearchBox from "./SearchBox";
import MovieGrid from "./MovieGrid";

import { useState } from "react";
import { IPopularProps } from "../utils/types";
import Logo from "./Logo";

function Popular(){
    return (
        <div className="popular">
            <h1 className="welcome">Welcome To The Original <Logo/></h1>
            <br/>
            <h1 className="trending">Trending</h1>
            <MovieGrid/>
        </div>
    )
}

export default Popular;
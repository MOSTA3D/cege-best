// dependencies
import { useState } from "react";

import SearchBox from "./SearchBox";
import Logo from "./Logo";
import { INavProps } from "../utils/types";

function Nav (props:INavProps){
    const {setMoviesList} = props;
    return (
        <nav className="nav">
            <Logo />
            <SearchBox {...{setMoviesList}} />
        </nav>
    )
}

export default Nav;
// dependencies
import { useState } from "react";

import SearchBox from "./SearchBox";
import Logo from "./Logo";
import { INavProps } from "../utils/types";

function Nav (props:INavProps){
    const {setMoviesList, navRef} = props;
    return (
        <nav ref={navRef} className="nav">
            <Logo />
            <SearchBox {...{setMoviesList}} />
        </nav>
    )
}

export default Nav;
// dependencies
import { useState } from "react";

import SearchBox from "./SearchBox";
import Logo from "./Logo";
import { INavProps } from "../utils/types";

function Nav (){
    return (
        <nav className="nav">
            <Logo />
            <SearchBox />
        </nav>
    )
}

export default Nav;
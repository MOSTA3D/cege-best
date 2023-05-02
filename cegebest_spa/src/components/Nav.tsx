import { useState } from "react";

import SearchBox from "./SearchBox";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

function Nav() {
  const navigator = useNavigate();

  const handleTrendingClick = () => {
    if (window.location.pathname === "/movies") {
      return;
    }
    navigator("/movies");
  };

  return (
    <nav className="nav">
      <div className="left">
        <FontAwesomeIcon
          className="back"
          onClick={()=>navigator(-1)}
          icon={faAngleLeft}
        />
        <Logo />
        <SearchBox />
      </div>
      <button className="trending" onClick={handleTrendingClick}>
        &nbsp;
        <FontAwesomeIcon icon={faHome} />
        &nbsp;
        <span>Home</span> &nbsp;
      </button>
    </nav>
  );
}

export default Nav;

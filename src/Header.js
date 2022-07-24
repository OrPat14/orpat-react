import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ConstructionIcon from "@mui/icons-material/Construction";
import HeaderOption from "./HeaderOption";

export function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/340/340357.png"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={ConstructionIcon} title="Projects" />
        <HeaderOption
          avatar="https://www.fivesquid.com/pics/t2/1556218087-112144-2-1.png"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;

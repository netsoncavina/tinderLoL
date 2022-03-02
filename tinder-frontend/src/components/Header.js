import React from "react";
import "./styles/Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header--icon" />
      </IconButton>

      <img
        className="header--logo"
        src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/CBLOL_2021_Logo.png/"
        alt="Tinder Logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header--icon" />
      </IconButton>
    </div>
  );
}

export default Header;

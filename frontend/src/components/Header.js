import React from "react";
import logo from "../assets/icon-left-font.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <a href="/">
          <img src={logo} alt="Groupomania" />
        </a>
      </header>
    </>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import home from "../assets/icons/home.svg";
import rocket from "../assets/icons/rocket.svg";
import user from "../assets/icons/user.svg";

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink
            className={(navData) => (navData.isActive ? "active-left-nav" : "")}
            to="/"
          >
            <img src={home} alt="home" />
          </NavLink>
          <br />
          {/* <NavLink
            className={(navData) => (navData.isActive ? "active-left-nav" : "")}
            to="/trending"
          >
            <img src={rocket} alt="home" />
          </NavLink> */}
          <br />
          <NavLink
            className={(navData) => (navData.isActive ? "active-left-nav" : "")}
            to="/Profil"
          >
            <img src={user} alt="home" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;

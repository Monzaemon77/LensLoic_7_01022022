import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo_left from "../assets/icon-left-font.png";
import login from "../assets/icons/login.svg";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";

const Navigation = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/">
            <div className="logo">
              <img src={logo_left} alt="logo groupomania" />
            </div>
          </NavLink>
        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink to="/Profil">
                <h5>
                  Bienvenue {userData[0].user_lastname}{" "}
                  {userData[0].user_firstname}
                </h5>
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink to="/Profil">
                <img src={login} alt="login" />
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

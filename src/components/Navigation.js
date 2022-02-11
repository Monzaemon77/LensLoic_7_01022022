import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink end to="/Login">
        Connexion
      </NavLink>
      <NavLink end to="/Signup">
        Inscription
      </NavLink>
    </div>
  );
};

export default Navigation;

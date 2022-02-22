import React from "react";
import Log from "../components/Log";
import icone from "../assets/icon.svg";

const Profil = () => {
  return (
    <>
      <div className="profil-page">
        <div className="log-container">
          <Log />
          <div className="img-container">
            <a href="/">
              <img src={icone} alt="icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;

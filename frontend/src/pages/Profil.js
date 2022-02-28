import React, { useContext } from "react";
import Log from "../components/Log";
import icone from "../assets/icon.svg";
import { UidContext } from "../components/AppContext";

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <>
      <div className="profil-page">
        {uid ? (
          <h1>UPDATE PAGE</h1>
        ) : (
          <div className="log-container">
            <Log signup={true} login={false} />
            <div className="img-container">
              <a href="/">
                <img src={icone} alt="icon" />
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profil;

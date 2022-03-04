import React, { useContext } from "react";
import Log from "../components/Log";
import icone from "../assets/icon.svg";
import { UidContext } from "../components/AppContext";
import UpdateProfil from "../components/Profil/UpdateProfil";

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <>
      <div className="profil-page">
        {uid ? (
          <UpdateProfil />
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

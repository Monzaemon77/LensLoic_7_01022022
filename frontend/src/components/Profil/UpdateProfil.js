import React from "react";
import { useSelector } from "react-redux";
import LeftNav from "../LeftNav";

const UpdateProfil = () => {
  const userData = useSelector((state) => state.userReducer[0]);
  const userPic = useSelector((state) => state.userPicReducer[0]);

  return (
    <div className="profil-container">
      <LeftNav />
      <h1>
        Profil de {userData.user_lastname} {userData.user_firstname}
      </h1>
      <div className="left-part">
        <h3>Photo de profil</h3>
        <img
          src={`${process.env.REACT_APP_API_URL}${userPic.img_url}`}
          alt="user-pic"
        />
      </div>
    </div>
  );
};

export default UpdateProfil;

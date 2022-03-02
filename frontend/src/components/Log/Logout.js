import React from "react";
import axios from "axios";
import cookie from "js-cookie";
import logouticon from "../../assets/icons/logout.svg";

const Logout = () => {
  const removeCookie = (key) => {
    if (window !== undefined) {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    await axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}api/auth/Logout`,
      withCredentials: true,
    })
      .then(() => {
        removeCookie("jwt");
      })
      .catch((err) => console.log(err));

    window.location = "/";
  };

  return (
    <>
      <li onClick={logout}>
        <img src={logouticon} alt="logout" />
      </li>
    </>
  );
};

export default Logout;

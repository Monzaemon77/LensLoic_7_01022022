import React, { useState } from "react";
import Login from "../LoginForm";
import Signup from "../SignupForm";

const Log = () => {
  const [signUpModal, setSignUpModal] = useState(true);
  const [loginModal, setLoginModal] = useState(false);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignUpModal(true);
      setLoginModal(false);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setLoginModal(true);
    }
  };

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModals}
            id="register"
            className={signUpModal ? "active-btn" : null}
          >
            S'inscrire
          </li>
          <li
            onClick={handleModals}
            id="login"
            className={loginModal ? "active-btn" : null}
          >
            Se connecter
          </li>
        </ul>
        {signUpModal && <Signup />}
        {loginModal && <Login />}
      </div>
    </div>
  );
};

export default Log;

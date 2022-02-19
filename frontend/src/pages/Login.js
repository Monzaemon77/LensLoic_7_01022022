import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Login = () => {
  return (
    <>
      <Header />
      <Navigation />
      <form action="/" method="post">
        <div>
          <input type="text" placeholder="email" />
          <br />
          <input type="password" placeholder="password" />
        </div>
      </form>
      <button>Connexion</button>
    </>
  );
};

export default Login;

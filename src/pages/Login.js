import React from "react";
import Navigation from "../components/Navigation";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Navigation />
      <form action="/" method="post">
        <div>
          <input type="text" placeholder="email" />
          <br />
          <input type="password" placeholder="password" />
        </div>
      </form>
      <button>Connexion</button>
    </div>
  );
};

export default Login;

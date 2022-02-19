import React from "react";

const Login = () => {
  return (
    <>
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

import React from "react";

const Signup = () => {
  return (
    <>
      <form action="/" method="post">
        <div>
          <input type="text" placeholder="email" />
          <br />
          <input type="password" placeholder="password" />
          <br />
          <input type="text" placeholder="nom" />
          <br />
          <input type="text" placeholder="prenom" />
        </div>
      </form>
      <button>Connexion</button>
    </>
  );
};

export default Signup;

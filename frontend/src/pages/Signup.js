import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Signup = () => {
  return (
    <>
      <Header />
      <Navigation />
      <form action="/" method="post">
        <div>
          <input type="text" placeholder="email" />
          <br />
          <input type="password" placeholder="password" />
          <br />
          <input type="text" placeholder="nom" />
          <br />
          <input type="text" placeholder="prenom" />
          <br />
          <input type="text" placeholder="poste de travail" />
        </div>
      </form>
      <button>Connexion</button>
    </>
  );
};

export default Signup;

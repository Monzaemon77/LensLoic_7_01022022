import React, { useState } from "react";
import axios from "axios";
import Login from "./LoginForm";

const Signup = () => {
  const [formSubmit, setFromSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setNom] = useState("");
  const [firstname, setPrenom] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const lastNameError = document.querySelector(".lastname.error");
    const firstNameError = document.querySelector(".firstname.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    const termsError = document.querySelector(".terms.error");

    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    let reg = new RegExp(
      "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    ).test(email);
    if (!reg) {
      emailError.innerHTML = "Email non valide";

      if (password !== controlPassword || !terms.checked) {
        if (password !== controlPassword) {
          passwordConfirmError.innerHTML =
            "Les mots de passe ne correspondent pas";
        }
        if (!terms.checked) {
          termsError.innerHTML = "Veuillez valider les conditions générales";
        }
      }
    } else {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/auth/Signup`,
        data: {
          email,
          password,
          lastname,
          firstname,
        },
      })
        .then((res) => {
          if (res.data.error) {
            emailError.innerHTML = res.data.message;
            lastNameError.innerHTML = res.data.message;
            firstNameError.innerHTML = res.data.message;
            passwordError.innerHTML = res.data.message;
          } else {
            setFromSubmit(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      {formSubmit ? (
        <>
          <Login />
          <h4 className="success">
            {" "}
            Enregistrement réussi, veuillez vous connecter
          </h4>
        </>
      ) : (
        <>
          <form
            action=""
            onSubmit={handleRegister}
            id="sign-up-form"
            method="post"
          >
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="email error"></div>
            <br />
            <label htmlFor="lastname">Nom</label>
            <br />
            <input
              type="text"
              name="lastname"
              id="lastName"
              onChange={(e) => setNom(e.target.value)}
              value={lastname}
            />
            <div className="lastname error"></div>
            <br />
            <label htmlFor="firstname">Prenom</label>
            <br />
            <input
              type="text"
              name="firstname"
              id="firstName"
              onChange={(e) => setPrenom(e.target.value)}
              value={firstname}
            />
            <div className="firstname error"></div>
            <br />
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="password error"></div>
            <br />
            <label htmlFor="password-conf">Confirmer mot de passe</label>
            <br />
            <input
              type="password"
              name="password"
              id="password-conf"
              onChange={(e) => setControlPassword(e.target.value)}
              value={controlPassword}
            />
            <div className="password-confirm error"></div>
            <br />
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              J'accepte les{" "}
              <a href="/" target="_blank" rel="noopener noreferrer">
                conditions générales
              </a>
            </label>
            <div className="terms error"></div>
            <br />
            <input type="submit" value="Valider inscription" />
          </form>
        </>
      )}
    </>
  );
};

export default Signup;

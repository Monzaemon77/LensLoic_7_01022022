import Navigation from "../components/Navigation";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Navigation />
      Bienvenue sur le reseau social de Groupomania, si vous avez un compte,
      connecter vous sur la page Connexion.
      <br />
      Sinon on vous invite à créer votre profil grâce à la page Inscription.
    </>
  );
};

export default Home;

import Navigation from "../components/Navigation";
import logo from "../assets/icon-left-font.png";

const Home = () => {
  return (
    <div className="home">
      <img src={logo} alt="Groupomania" />
      <Navigation />
    </div>
  );
};

export default Home;

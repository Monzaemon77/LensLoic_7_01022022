import Navbar from "../components/Navbar";
import LeftNav from "../components/LeftNav";
import Thread from "../components/Thread";
import { useContext } from "react";
import { UidContext } from "../components/AppContext";
import NewPostForm from "../components/Post/NewPostForm";
import Log from "../components/Log";

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className="home">
      <Navbar />
      <LeftNav />
      <div className="main">
        <div className="home-header">
          {uid ? <NewPostForm /> : <Log login={true} signup={false} />}
        </div>
        {uid ? <Thread /> : null}
      </div>
    </div>
  );
};

export default Home;

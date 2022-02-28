import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UidContext } from "./components/AppContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import Signup from "./pages/Signup";

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("No Token"));
    };
    fetchToken();
  }, [uid]);
  return (
    <UidContext.Provider value={uid}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UidContext.Provider>
  );
};

export default App;

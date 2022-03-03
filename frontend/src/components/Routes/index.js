import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
//import Trending from "../../pages/Trending";
import Navbar from "../Navbar";

const index = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profil" element={<Profil />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default index;

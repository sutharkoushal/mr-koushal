import React from "react";
import { NavLink } from "react-router-dom";
import web from "../public/images/k5.webp";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        name="Grow Your business with"
        imgSrc={web}
        visit="/services"
        btname="Get Started"
      />
    </>
  );
};

export default Home;

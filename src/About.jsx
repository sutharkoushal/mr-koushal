import React from "react";
import { NavLink } from "react-router-dom";
import web from "../public/images/k2.jpg";
import Commom from "./Commom";

const About = () => {
  return (
    <>
      <Commom
        name="Welcome to About page"
        imgSrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;

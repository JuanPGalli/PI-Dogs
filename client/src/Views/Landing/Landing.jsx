import React from "react";
import dogImg from "./dogs.jpg";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <img src={dogImg} alt="FunnyDogImage" />
    </div>
  );
};

export default Landing;

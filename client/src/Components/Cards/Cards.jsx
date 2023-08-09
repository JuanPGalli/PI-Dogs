import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards-container">
      <Card name={"Lucas"} phone={"45679965"} email={"lucas@gmail.com"} />
      <Card name={"Diana"} phone={"45679965"} email={"Diana@gmail.com"} />
      <Card name={"Luis"} phone={"45679965"} email={"Luis@gmail.com"} />
      <Card name={"Ignacio"} phone={"45679965"} email={"Ignacio@gmail.com"} />
      <Card name={"Roberto"} phone={"45679965"} email={"Roberto@gmail.com"} />
      <Card name={"Matias"} phone={"45679965"} email={"Matias@gmail.com"} />
    </div>
  );
};

export default Cards;

import React from "react";
import Card from "../Card/Card";
import "./Cards.css";
import img from "../../../src/Views/Landing/dogs.jpg";

const Cards = () => {
  return (
    <div className="cards-container">
      <Card
        image={img}
        name={"Lucas"}
        temperaments={"45679965"}
        weight={"lucas@gmail.com"}
      />
      <Card
        image={img}
        name={"Diana"}
        temperaments={"45679965"}
        weight={"Diana@gmail.com"}
      />
      <Card
        image={img}
        name={"Luis"}
        temperaments={"45679965"}
        weight={"Luis@gmail.com"}
      />
      <Card
        image={img}
        name={"Ignacio"}
        temperaments={"45679965"}
        weight={"Ignacio@gmail.com"}
      />
      <Card
        image={img}
        name={"Roberto"}
        temperaments={"45679965"}
        weight={"Roberto@gmail.com"}
      />
      <Card
        image={img}
        name={"Matias"}
        temperaments={"45679965"}
        weight={"Matias@gmail.com"}
      />
      <Card
        image={img}
        name={"Roberto"}
        temperaments={"45679965"}
        weight={"Roberto@gmail.com"}
      />
      <Card
        image={img}
        name={"Matias"}
        temperaments={"45679965"}
        weight={"Matias@gmail.com"}
      />
    </div>
  );
};

export default Cards;

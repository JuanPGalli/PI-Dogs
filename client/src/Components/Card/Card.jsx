import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, image, name, temperaments, weight }) => {
  return (
    <div className="card-container">
      <Link to={`/detail/${id}`}>
        <div className="card-image">
          <img src={image} alt="apiDogsImg" />
        </div>
      </Link>

      <div className="card-info">
        <h4>Name: {name}</h4>
        <h4>Temperaments: {temperaments}</h4>
        <h4>Weight: {weight}</h4>
      </div>
    </div>
  );
};

export default Card;

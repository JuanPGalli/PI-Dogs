import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={props.image} alt="apiDogsImg" />
      </div>

      <div className="card-info">
        <h4>Name: {props.name}</h4>
        <h4>Temperaments: {props.temperaments}</h4>
        <h4>Weight: {props.weight}</h4>
      </div>
    </div>
  );
};

export default Card;

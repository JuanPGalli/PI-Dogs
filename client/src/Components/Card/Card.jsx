import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-title">
        <h2>{props.name}</h2>
      </div>
      <div className="card-divisor" />
      <div className="card-info">
        <h4>{props.phone}</h4>
        <br></br>
        <h4>{props.email}</h4>
      </div>
    </div>
  );
};

export default Card;

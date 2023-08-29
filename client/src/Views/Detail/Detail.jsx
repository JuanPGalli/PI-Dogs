import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanState, getDogById } from "../../Redux/Actions";
import { stringAllTemps } from "../../Helper/Helper";
import loader from "./spinning-loading.gif";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const dogById = useSelector((state) => state.dogById);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogById(id));
    console.log(dogById);

    return dispatch(cleanState());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="card-container-detail">
      <div className="card-image-detail">
        {dogById?.image ? (
          <img src={dogById?.image} alt={dogById?.name} />
        ) : (
          <div>
            <img src={loader} alt="Loading" />
          </div>
        )}
      </div>
      <div className="card-info-detail">
        <h4>ID: {dogById?.id}</h4>
        <h4>Name: {dogById?.name}</h4>
        <h4>Height: {dogById?.height}</h4>
        <h4>Weight: {dogById?.weight}</h4>
        <h4>
          Temperaments:{" "}
          {dogById.Temperaments
            ? stringAllTemps(dogById.Temperaments)
            : dogById?.temperaments}
        </h4>
        <h4>Life Span: {dogById?.life_span}</h4>
      </div>
    </div>
  );
};

export default Detail;

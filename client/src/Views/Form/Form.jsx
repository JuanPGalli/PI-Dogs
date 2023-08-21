import React, { useState, useEffect } from "react";
//import { useDispatch } from "react-redux";
//import { postUser } from "../../Redux/Actions";
import "./Form.css";

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    lifeSpan: "",
    temperaments: [],
  });

  const [errors, setErrors] = useState({
    name: "Name is required",
    minHeight: "Min Height is required",
    maxHeight: "Max Height is required",
    minWeight: "Min Weight is required",
    maxWeight: "Max Weight is required",
    lifeSpan: "Life Span is required",
    temperaments: "",
  });

  const [submitted, setSubmitted] = useState(false); // Nuevo estado para controlar si se ha enviado el formulario
  const [showAlert, setShowAlert] = useState(false); // Nuevo estado para controlar si mostrar el alerta

  //const disptach = useDispatch();

  const disable = () => {
    let disabled = true;

    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        //alert("UPS! HUBO UN ERROR"); //Se puede jugar con un alert, acá está mal hecho porque salta todo el tiempo.
        break;
      }
    }
    return disabled;
  };

  const validate = (input, name) => {
    const regexNumber = /^(\d+\s*)+$/; //sólo números.
    const regexName = /^[A-Za-z\s.'-]*$/; //sólo letras.
    if (name === "name") {
      if (input.name.trim() !== "") {
        if (
          regexName.test(input.name.trim()) &&
          input.name.trim().length < 11
        ) {
          setErrors({ ...errors, name: "" });
        } else
          setErrors({
            ...errors,
            name: "Invalid name or more than 10 characters long!",
          });
      } else setErrors({ ...errors, name: "Name is required" });
    } else if (name === "minHeight") {
      if (input.minHeight.trim() !== "") {
        if (regexNumber.test(input.minHeight.trim()))
          setErrors({ ...errors, minHeight: "" });
        else
          setErrors({
            ...errors,
            minHeight:
              "Invalid Min Height. Check if Min Height is a number smaller than Max Height.",
          });
      } else setErrors({ ...errors, minHeight: "Min Height is required" });
    } else if (name === "maxHeight") {
      if (input.maxHeight.trim() !== "") {
        if (
          regexNumber.test(input.maxHeight.trim()) &&
          parseInt(input.maxHeight.trim()) > parseInt(input.minHeight.trim())
        )
          setErrors({ ...errors, maxHeight: "" });
        else
          setErrors({
            ...errors,
            maxHeight:
              "Invalid Max Height. Check if Max Height is a number bigger than Min Height.",
          });
      } else setErrors({ ...errors, maxHeight: "Max Height is required" });
    } else if (name === "minWeight") {
      if (input.minWeight.trim() !== "") {
        if (regexNumber.test(input.minWeight.trim()))
          setErrors({ ...errors, minWeight: "" });
        else
          setErrors({
            ...errors,
            minWeight:
              "Invalid Min Weight. Check if Min Weight is a number smaller than Max Weight.",
          });
      } else setErrors({ ...errors, minWeight: "Min Weight is required" });
    } else if (name === "maxWeight") {
      if (input.maxWeight.trim() !== "") {
        if (
          regexNumber.test(input.maxWeight.trim()) &&
          parseInt(input.maxWeight.trim()) > parseInt(input.minWeight.trim())
        )
          setErrors({ ...errors, maxWeight: "" });
        else
          setErrors({
            ...errors,
            maxWeight:
              "Invalid Max Weight. Check if Max Weight is a number bigger than Min Weight.",
          });
      } else setErrors({ ...errors, maxWeight: "Max Weight is required" });
    } else if (name === "lifeSpan") {
      if (input.lifeSpan.trim() !== "") {
        if (regexNumber.test(input.lifeSpan.trim())) {
          if (parseInt(input.lifeSpan.trim()) < 20) {
            setErrors({ ...errors, lifeSpan: "" });
          } else
            setErrors({
              ...errors,
              lifeSpan: "Are you shure the dog can be that old?",
            });
        } else setErrors({ ...errors, lifeSpan: "Invalid Life Span" });
      } else setErrors({ ...errors, lifeSpan: "Life Span is required" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    //dispatch(postUser(input));

    event.target.reset();

    setInput({
      name: "",
      minHeight: "",
      maxHeight: "",
      minWeight: "",
      maxWeight: "",
      lifeSpan: "",
      temperaments: [],
    });
    setErrors({
      name: "Name is required",
      minHeight: "Min Height is required",
      maxHeight: "Max Height is required",
      minWeight: "Min Weight is required",
      maxWeight: "Max Weight is required",
      lifeSpan: "Life Span is required",
      temperaments: "",
    });
    setSubmitted(true);
    setShowAlert(true); // Mostrar el alerta después de enviar el formulario
  };

  const handleChange = (event) => {
    if (event.target.name === "temperaments") {
      const selectedOptions = Array.from(
        event.target.selectedOptions,
        (option) => option.value
      );
      setInput({
        ...input,
        temperaments: selectedOptions,
      });
    } else {
      setInput({
        ...input,
        [event.target.name]: event.target.value,
      });
      validate(
        {
          ...input,
          [event.target.name]: event.target.value,
        } /* Le paso lo mismo que en setInput porque el estado no se actualiza en tiempo real cuando es dentro de la misma funcion */,
        event.target.name
      );
    }
  };

  // Usar useEffect para ocultar la alerta después de pegarle a submit
  useEffect(() => {
    if (showAlert) {
      setShowAlert(false);
    }
  }, [showAlert]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="inputs">
        <div className="divs">
          <label>Name:</label>
          <input
            name="name"
            placeholder="Name"
            type="text"
            onChange={handleChange}
          />
          {errors.name}
        </div>
        <div className="divs">
          <label>Min Height:</label>
          <input name="minHeight" type="text" onChange={handleChange} />
          {errors.minHeight}
        </div>
        <div className="divs">
          <label>Max Height:</label>
          <input name="maxHeight" type="text" onChange={handleChange} />
          {errors.maxHeight}
        </div>
        <div className="divs">
          <label>Min Weight:</label>
          <input name="minWeight" type="text" onChange={handleChange} />
          {errors.minWeight}
        </div>
        <div className="divs">
          <label>Max Weight:</label>
          <input name="maxWeight" type="text" onChange={handleChange} />
          {errors.maxWeight}
        </div>
        <div className="divs">
          <label>Life Span:</label>
          <input name="lifeSpan" type="text" onChange={handleChange} />
          {errors.lifeSpan}
        </div>
        <label>Temperaments:</label>
        <select name="temperaments" onChange={handleChange} multiple>
          <option value="none">ctrl + temp</option>
          <option value="stubborn">Stubborn</option>
          <option value="intelligent">intelligent</option>
          <option value="fast">fast</option>
          <option value="curious">curious</option>
        </select>
        <input
          disabled={disable()}
          type="submit"
          name="submit"
          value="CREATE"
          className="submit-btn"
        />
      </form>
      {/* Mostrar mensaje de éxito después del envío */}
      {submitted && showAlert && alert("Dog Breed Succesfully Created !")}
    </div>
  );
};

export default Form;

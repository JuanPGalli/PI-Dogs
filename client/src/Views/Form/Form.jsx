import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    pokemons: "",
  });

  const [errors, setErrors] = useState({
    name: "Name is required",
    email: "Email is required",
    phone: "",
    pokemons: "",
  });

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
    if (name === "name") {
      if (input.name !== "") setErrors({ ...errors, name: "" });
      else setErrors({ ...errors, name: "Name is required" });
    } else if (name === "email") {
      const regexEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
      if (input.email !== "") setErrors({ ...errors, email: "" });
      else {
        setErrors({ ...errors, email: "Email is required" });
        return;
      }
      if (regexEmail.test(input.email)) setErrors({ ...errors, email: "" });
      else {
        setErrors({ ...errors, email: "Invalid Email" });
        return;
      }
    } else if (name === "phone") {
      //poner una regex o que el .length no sea mayor a 50 por ej
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  const handleChange = (event) => {
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
  };

  return (
    <div>
      {console.log(errors)}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input name="name" type="text" onChange={handleChange} />
          {errors.name}
        </div>
        <div>
          <label>Email:</label>
          <input name="email" type="text" onChange={handleChange} />
          {errors.email}
        </div>
        <div>
          <label>Phone:</label>
          <input name="phone" type="text" onChange={handleChange} />
          {errors.phone}
        </div>
        <select name="pokemons" onChange={handleChange}>
          <option value="none">select pokemon</option>
          <option value="Pikachu">Pikachu</option>
          <option value="Bulbasur">Bulbasur</option>
          <option value="Raichu">Raichu</option>
          <option value="Charizard">Charizard</option>
        </select>
        <input disabled={disable()} type="submit" name="submit" />
      </form>
    </div>
  );
};

export default Form;

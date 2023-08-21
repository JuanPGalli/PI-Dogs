import React from "react";
import { Link, useLocation } from "react-router-dom";
import dogLogo from "./LogoDogs.jpg";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="nav-container">
      <div className="img-container">
        <Link to={"/"}>
          <img src={dogLogo} alt="dogLogo" />
        </Link>
      </div>
      <div className="link-container">
        <Link to={"/home"}>HOME</Link>
        {location.pathname !== "/" && <Link to={"/create"}>CREATE DOG</Link>}
      </div>
    </div>
  );
};

export default Navbar;

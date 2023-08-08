import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="img-container">
        <Link to={"/"}>
          <img
            src="https://cdn.theorg.com/d3119e0e-8202-4034-85ce-d0356382515e_thumb.jpg"
            alt="henryLogo"
          />
        </Link>
      </div>
      <div className="link-container">
        <Link to={"/home"}>Home</Link>
        <Link to={"/create"}>Create Dog</Link>
      </div>
    </div>
  );
};

export default Navbar;

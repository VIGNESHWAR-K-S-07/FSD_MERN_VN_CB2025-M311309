import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components-css/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  function ToggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="navBar">
      <div className="hamburger" onClick={ToggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isOpen ? "open" : ""}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/departments"}>Departments</Link>
        </li>
        <li>
          <Link to={"/why-hit"}>Why choose HIT?</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

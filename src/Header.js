import React from "react";
import styles from "./styles.css";
import FitnessLoftLogo from "./images/FitnessLoft_Logo.png";

const Header = ({ name }) => {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
};

export default Header;

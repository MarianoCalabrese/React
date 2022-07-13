import React from "react";
import styles from "../styles.css";
import FitnessLoftLogo from "../images/FitnessLoft_Logo.png";

const Header = ({ name }) => {
  return (
    <header className="header">
      <h1 className="headline">{name}</h1>
      <img src={FitnessLoftLogo} alt="logo" className="responsivePicture" />
    </header>
  );
};

export default Header;

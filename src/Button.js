import React from "react";
import styles from "./styles.css";
import Table from 'react-bootstrap/Table';

const Button = ({ onClick, name, className }) => {
  return (
    <div>
      <button type="button" onClick={onClick} className={className}>
        {name}
      </button>
    </div>
  );
};

export default Button;

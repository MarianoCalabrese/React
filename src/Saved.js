import React from "react";
import { useState } from "react";
import styles from "./styles.css";
import BookArticle from "./BookArticle.js";
import Button from "./Button.js";

const Saved = ({ nameSavedItem }) => {
  return <div className="saveInformation">{nameSavedItem}</div>;
};

export default Saved;

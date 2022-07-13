import React from "react";
import { useState } from "react";
import styles from "./styles.css";
import BookArticle from "./BookArticle.js";
import Button from "./Button.js";

const ArticleList = ({ list, setToDoList }) => {
  const onDelete = (name) => {
    const newArray = list.filter((item) => {
      if (item.name === name) {
        return false;
      }
      return true;
    });
    setToDoList(newArray);
  };
  return (
    <div className="tableContainer">
      <table>
        <tr>
          <th className="th">Articlename&ensp;</th>
          <th className="th">Article category&ensp;</th>
          <th className="th">Calculated assets&ensp;</th>
          <th className="th">Storage place&ensp;</th>
          <th className="th">Supplier&ensp;</th>
          <th className="th">Suppliers email adress</th>
        </tr>
        {list.map((element) => {
          return (
            <tr>
              <td className="td">{element.name} </td>
              <td className="td">{element.categorie}</td>
              <td className="td">{element.quantity}</td>
              <td className="td">{element.storageLocation}</td>
              <td className="td">{element.supplier}</td>
              <td className="td">{element.supplierEmail}</td>
              <td className="td">{element.articleid}</td>
              <Button
                name="X"
                onClick={() => onDelete(element.name)}
                className="buttonStandard"
              />
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ArticleList;

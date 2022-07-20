import React from "react";
import { useState } from "react";
import styles from "./styles.css";
import BookArticle from "./BookArticle.js";
import Button from "./Button.js";
import Table from 'react-bootstrap/Table';


const ArticleList = ({ list, setToDoList, bookList, totalUnits }) => {
  const onDelete = (name) => {
    const newArray = list.filter((item) => {
      if (item.name === name) {
        return false;
      }
      return true;
    });
    setToDoList(newArray);
  };

  const currentStock = () => {
    bookList.map((element) => {
       return element.totalunits;  
      
    });
  };

  return (
    <div class="tableContainer">
      <table class="table table-bordered table-hover">
        <tr>
          <th className="th">Articlename&ensp;</th>
          <th className="th">Article category&ensp;</th>
          <th className="th">Storage place&ensp;</th>
          <th className="th">Supplier&ensp;</th>
          <th className="th">Suppliers email adress</th>
          <th className="th">Calculated assets&ensp;</th>
          <th className="th">Current stock&ensp;</th>
        </tr>
        {list.map((element) => {
          return (
            <tr>
              <td className="td">{element.name} </td>
              <td className="td">{element.categorie}</td>
              <td className="td">{element.storageLocation}</td>
              <td className="td">{element.supplier}</td>
              <td className="td">{element.supplierEmail}</td>
              <td className="td">{element.quantity}</td>
              <td className="td">{currentStock()}</td>
              {/* <td className="td">{element.articleid}</td> articleid should not be shown in articleliste */}
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

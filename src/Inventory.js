import React from "react";
import { useState } from "react";
import styles from "./styles.css";
import BookArticle from "./BookArticle.js";
import Button from "./Button.js";

const Inventory = ({ list, bookList, setBookList }) => {
  const onDelete = (id) => {
    const newArray = bookList.filter((item) => {
      if (item.id === id) {
        return false;
      }
      return true;
    });
    setBookList(newArray);
  };

  return (
    <div className="tableContainer">
      <table>
        <tr>
          <th className="th">Articlename&ensp;</th>
          <th className="th">Book Date&ensp;</th>
          <th className="th">Booking Reason&ensp;</th>
          <th className="th">Packaging units&ensp;</th>
          <th className="th">Number of units per package&ensp;</th>
          <th className="th">Total number of units</th>
        </tr>
        {bookList.map((element) => {
          return (
            <tr>
              <td className="td">{element.articlename}</td>
              <td className="td">{element.bookdate}</td>
              <td className="td">{element.bookreason}</td>
              <td className="td">{element.packagingunit}</td>
              <td className="td">{element.numberofunits}</td>
              <td className="td">{element.totalunits}</td>
              <td className="td">{element.id}</td>
              <td className="td">{element.articleid}</td>
              <Button
                name="X"
                onClick={() => onDelete(element.id)}
                className="buttonStandard"
              />
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Inventory;

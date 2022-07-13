import React from "react";
import ArticleList from "./ArticleList.js";
import Button from "./Button.js";
import { useState } from "react";
import styles from "./styles.css";
import Saved from "./Saved.js";
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";

const BookArticle = ({
  list,
  booklist,
  setBookList,
  articleStatus,
  setArticleStatus
}) => {
  const [inputTextArticleName, setinputTextArticleName] = useState("");
  const [inputBookDate, setinputBookDate] = useState("");
  const [inputNumberPackagingUnit, setinputNumberPackagingUnit] = useState(0);
  const [inputNumberOfUnits, setinputNumberOfUnits] = useState(0);
  const [inputTextBookReason, setinputTextBookReason] = useState("");
  const [lastAddedItem, setLastAddedItem] = useState("null");
  const ItemList = () => {
    return list.map((element) => {
      return (
        <option value={element.name} name={element.name}>
          {element.name}
        </option>
      );
    });
  };
  const numberOfArticles = (inputNumberPackagingUnit, inputNumberOfUnits) => {
    let numberOfItems = inputNumberPackagingUnit * inputNumberOfUnits;
    return numberOfItems;
  };

  const articleId = () => {
    list.map((element) => {
      return setLastAddedItem(element.articleid);
    });
  };

  const addItemInBookList = () => {
    if (
      inputTextArticleName !== "...choose" &&
      inputTextArticleName.length > 0 &&
      inputBookDate &&
      inputBookDate.length > 0 &&
      inputNumberOfUnits &&
      inputNumberOfUnits.length > 0 &&
      inputNumberPackagingUnit &&
      inputNumberPackagingUnit.length > 0
    ) {
      setLastAddedItem("test");
      const newArray = [...booklist];
      const newItem = {
        id: uuidv4(),
        articleid: lastAddedItem,
        articlename: inputTextArticleName,
        bookdate: inputBookDate,
        bookreason: inputTextBookReason,
        packagingunit: inputNumberPackagingUnit,
        numberofunits: inputNumberOfUnits,
        totalunits: numberOfArticles(
          inputNumberPackagingUnit,
          inputNumberOfUnits
        )
      };
      newArray.push(newItem);
      setBookList(newArray);
      setinputTextArticleName("");
      setinputBookDate("");
      setinputTextBookReason("");
      setinputNumberOfUnits(0);
      setinputNumberPackagingUnit(0);
      setArticleStatus(true);
      setTimeout(() => setArticleStatus(false), 2000);
      clearTimeout();
    } else {
      alert("Unvollständige Eingabe");
    }
  };

  return (
    <div>
      <form className="formContainer">
        <label>
          Choose Article:
          <select
            className="inputTypeSelect"
            value={inputTextArticleName}
            onChange={(e) => setinputTextArticleName(e.target.value)}
          >
            <option selected="selected" className="inputTypeDatalist">
              ...choose
            </option>
            <ItemList />
          </select>
          Book date:
          <input
            type="date"
            name="bookDate"
            value={inputBookDate}
            onChange={(e) => setinputBookDate(e.target.value)}
          />
          Reason for booking:
          <input
            type="text"
            name="bookReason"
            value={inputTextBookReason}
            onChange={(e) => setinputTextBookReason(e.target.value)}
          />
          Packaging units:
          <input
            type="number"
            name="packagingUnit"
            value={inputNumberPackagingUnit}
            onChange={(e) => setinputNumberPackagingUnit(e.target.value)}
          />
          <p></p>
          Number of units in package:
          <input
            type="number"
            name="numberOfUnits"
            value={inputNumberOfUnits}
            onChange={(e) => setinputNumberOfUnits(e.target.value)}
          />
        </label>
      </form>
      <div className="numberOfArticles">
        Total number of Units:&nbsp;
        {numberOfArticles(inputNumberPackagingUnit, inputNumberOfUnits)}
      </div>
      <div className="buttonBottomContainer">
        <Button
          name="Book"
          onClick={addItemInBookList}
          className="buttonStandard"
        />
        <Button
          name="Delete Data"
          onClick={() => {
            setinputTextArticleName("");
            setinputBookDate("");
            setinputTextBookReason("");
            setinputNumberOfUnits(0);
          }}
          className="buttonStandard"
        />
      </div>
      {articleStatus === true ? (
        <Saved nameSavedItem="Article booked in inventory" />
      ) : null}
    </div>
  );
};

export default BookArticle;

import React from "react";
import ArticleList from "./ArticleList.js";
import Button from "./Button.js";
import { useState } from "react";
import styles from "./styles.css";
import Saved from "./Saved.js";
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";

const BookOutArticle = ({
  list,
  booklist,
  setBookList,
  articleStatus,
  setArticleStatus
}) => {
  const [inputTextArticleName, setinputTextArticleName] = useState("");
  const [inputBookDate, setinputBookDate] = useState("");
  const [inputNumberOfUnits, setinputNumberOfUnits] = useState(0);
  const [inputTextBookOutReason, setinputTextBookOutReason] = useState("");
  const ItemList = () => {
    return list.map((element) => {
      return <option value={element.name}>{element.name}</option>;
    });
  };

  const articleId = (inputTextArticleName) =>
    list.map((element) => {
      if (inputTextArticleName === element.name) {
        return element.articleid;
      }
    });

  const addItemInBookList = () => {
    if (
      inputTextArticleName !== "...choose" &&
      inputTextArticleName.length > 0 &&
      inputBookDate &&
      inputBookDate.length > 0 &&
      inputNumberOfUnits &&
      inputNumberOfUnits.length > 0 &&
      inputTextBookOutReason &&
      inputTextBookOutReason.length > 0
    ) {
      const newArray = [...booklist];
      newArray.push({
        id: uuidv4(),
        articleid: articleId(inputTextArticleName),
        articlename: inputTextArticleName,
        bookdate: inputBookDate,
        bookreason: inputTextBookOutReason,
        numberofunitsbookedoff: inputNumberOfUnits
      });
      setBookList(newArray);
      setinputTextArticleName("");
      setinputBookDate("");
      setinputTextBookOutReason("");
      setinputNumberOfUnits(0);
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
          Reason for booking out:
          <input
            type="text"
            name="bookReason"
            value={inputTextBookOutReason}
            onChange={(e) => setinputTextBookOutReason(e.target.value)}
          />
          <p></p>
          Number of units to book out:
          <input
            type="number"
            name="numberOfUnits"
            value={inputNumberOfUnits}
            onChange={(e) => setinputNumberOfUnits(e.target.value)}
          />
        </label>
      </form>
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
            setinputTextBookOutReason("");
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

export default BookOutArticle;

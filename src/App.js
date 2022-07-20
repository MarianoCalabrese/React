import { useState } from "react";
import Header from "./PageBasics/Header.js";
import "./styles.css";
import Button from "./Button.js";
import BookArticle from "./BookArticle";
import ArticleList from "./ArticleList.js";
import CreateArticle from "./CreateArticle.js";
import Saved from "./Saved.js";
import Inventory from "./Inventory.js";
import BookOutArticle from "./BookOutArticle.js";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [currentView, setcurrentView] = useState("overview");
  const [list, setList] = useState([]);
  const [bookList, setBookList] = useState([]);
  const [articleStatus, setArticleStatus] = useState(false);
  const [totalUnits, setTotalUnits] = useState(0);

  console.log(currentView);
  return (
    <div className="container">
      <nav>
        <Header name="SimplyInventory" />
        <p className="buttonMenuContainer">
          <Button
            name="Article list"
            onClick={() => setcurrentView("ArticleList")}
            className="btn btn-link btn-lg"
          />
          <Button
            name="Create article"
            onClick={() => setcurrentView("CreateArticle")}
            className="btn btn-link btn-lg"
          />
          <Button
            name="Book in article"
            onClick={() => setcurrentView("BookArticle")}
            className="btn btn-link btn-lg"
          />
          <Button
            name="Book out article"
            onClick={() => setcurrentView("BookOutArticle")}
            className="btn btn-link btn-lg"
          />
          <Button
            name="Inventory"
            onClick={() => setcurrentView("Inventory")}
            className="btn btn-link btn-lg"
          />
        </p>
      </nav>
      {currentView === "CreateArticle" ? (
        <div>
          <CreateArticle
            list={list}
            setList={setList}
            setArticleStatus={setArticleStatus}
            articleStatus={articleStatus}
          />
        </div>
      ) : null}
      {currentView === "BookArticle" ? (
        <BookArticle
          list={list}
          setBookList={setBookList}
          booklist={bookList}
          articleStatus={articleStatus}
          setArticleStatus={setArticleStatus}
          setTotalUnits={setTotalUnits}
        />
      ) : null}
      {currentView === "ArticleList" ? (
        <ArticleList
          list={list}
          setToDoList={setList}
          bookList={bookList}
          totalUnits={totalUnits}
        />
      ) : null}
      {currentView === "Inventory" ? (
        <Inventory bookList={bookList} setBookList={setBookList} list={list} />
      ) : null}
      {currentView === "BookOutArticle" ? (
        <BookOutArticle
          list={list}
          setBookList={setBookList}
          booklist={bookList}
          articleStatus={articleStatus}
          setArticleStatus={setArticleStatus}
        />
      ) : null}
    </div>
  );
};

export default App;

import { useState } from "react";
import Button from "./Button";
import ArticleList from "./ArticleList.js";
import BookArticle from "./BookArticle";
import Saved from "./Saved.js";
import { v4 as uuidv4 } from "uuid";

const CreateArticle = ({ list, setList, articleStatus, setArticleStatus }) => {
  const [inputTextArticleName, setInputTextArticleName] = useState("");
  const [inputTextArticleQuantity, setInputTextArticleQuantity] = useState(0);
  const [inputTextArticleCategorie, setInputTextArticleCategorie] = useState(
    ""
  );
  const [inputTextStorageLocation, setInputTextStorageLocation] = useState("");
  const [inputTextSupplier, setInputTextSupplier] = useState("");
  const [inputTextSupplierEmail, setInputTextSupplierEmail] = useState("");

  const addItem = () => {
    if (
      inputTextArticleName &&
      inputTextArticleName.length > 0 &&
      inputTextArticleCategorie &&
      inputTextArticleCategorie.length > 0 &&
      inputTextArticleQuantity &&
      inputTextArticleQuantity.length > 0 &&
      inputTextStorageLocation &&
      inputTextStorageLocation.length > 0 &&
      inputTextSupplier &&
      inputTextSupplier.length > 0 &&
      inputTextSupplierEmail &&
      inputTextSupplierEmail.length > 0
    ) {
      const newArray = [...list];
      newArray.push({
        articleid: uuidv4(), // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        name: inputTextArticleName,
        categorie: inputTextArticleCategorie,
        quantity: inputTextArticleQuantity,
        storageLocation: inputTextStorageLocation,
        supplier: inputTextSupplier,
        supplierEmail: inputTextSupplierEmail
      });
      setList(newArray);
      setInputTextArticleName("");
      setInputTextArticleCategorie("");
      setInputTextArticleQuantity("");
      setInputTextStorageLocation("");
      setInputTextSupplier("");
      setInputTextSupplierEmail("");
      setArticleStatus(true);
      setTimeout(() => setArticleStatus(false), 2000);
      clearTimeout();
    } else {
      alert("Unvollständige Eingabe");
    }
  };

  const deleteItem = () => {
    const listArray = [...list];
    listArray.pop();
    setList(listArray);
  };

  return (
    <div>
      <form className="formContainer">
        <label>
          Articlename:
          <input
            type="text"
            name="Articlename"
            value={inputTextArticleName}
            onChange={(e) => setInputTextArticleName(e.target.value)}
            required
          />
          Article category:
          <input
            type="text"
            name="Articlecategorie"
            value={inputTextArticleCategorie}
            onChange={(e) => setInputTextArticleCategorie(e.target.value)}
            required
          />
          Calculated assets:
          <input
            type="number"
            name="CalcuclatedAssets"
            value={inputTextArticleQuantity}
            onChange={(e) => setInputTextArticleQuantity(e.target.value)}
            required
          />
          Storage place:
          <input
            type="text"
            name="StoragePlace"
            value={inputTextStorageLocation}
            onChange={(e) => setInputTextStorageLocation(e.target.value)}
            required
          />
          Supplier:
          <input
            type="text"
            name="Supplier"
            value={inputTextSupplier}
            onChange={(e) => setInputTextSupplier(e.target.value)}
            required
          />
          Suplliers email adress:
          <input
            type="email"
            name="SuplliersEmail"
            value={inputTextSupplierEmail}
            onChange={(e) => setInputTextSupplierEmail(e.target.value)}
            required
          />
        </label>
      </form>
      <div className="buttonBottomContainer">
        <Button name="Create" onClick={addItem} className="buttonStandard" />
        <Button
          name="Delete all"
          onClick={() => setList([])}
          className="buttonStandard"
        />
      </div>
      {articleStatus === true ? (
        <Saved nameSavedItem="Article saved in list" />
      ) : null}
    </div>
  );
};

export default CreateArticle;

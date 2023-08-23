import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import styled from "./CreatArticle.module.css";
import Input from "../../components/input/input";
import Textarea from "../../components/textarea/textarea";
import axios from "axios";

function CreateArticle() {
  const [article, setArticle] = useState({
    tittle: "",
    date: "",
    readingTime: "",
    actor: "",
    message: "",
    imageUrl: "",
  });

  const handleArticle = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleArticleMessage = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
  };

  const articleSend = () => {
    axios.post("http://localhost:7000/articles", {
      id: 9,
      imagUrl:article.imageUrl
        ,
      tittle: article.tittle,
      readingTime: article.readingTime ,
      actor: article.actor,
      content: article.message ,
      date: article.date,
    });
  };

  return (
    <>
      <Navbar tittle="Reza Articles" />
      <div className={styled.CreateArticle}>
        <div className="container">
          <h1>ساخت مقاله</h1>

          <Input
            name="tittle"
            label="عنوان"
            handleChanger={handleArticle}
            type="text"
          />
          <Input
            name="date"
            label="تاریخ"
            handleChanger={handleArticle}
            type="text"
          />
          <Input
            name="readingTime"
            label="زمان خواندن"
            handleChanger={handleArticle}
            type="text"
          />
          <Input
            name="actor"
            label="نویستده"
            handleChanger={handleArticle}
            type="text"
          />
          <Input
            name="imageUrl"
            label="لینک عکس"
            handleChanger={handleArticle}
            type="text"
          />
          <Textarea label="متن" handleChanger={handleArticleMessage} />

          <div className={styled.buttonWrapper}>
            <button onClick={articleSend}>ساخت مقاله</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CreateArticle;

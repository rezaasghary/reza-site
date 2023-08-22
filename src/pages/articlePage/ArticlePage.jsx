import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styled from "./ArticlePage.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SpinnerLoading from "../../components/spinner/SpinnerLoading";

function ArticlePage() {
  const params = useParams();

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`http://localhost:7000/articles/${params.id}`)
      .then((result) => {
        setArticle(result.data);

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });

    
  }, []);

  return (
    <div className={styled.articleWrapper}>
      <Navbar tittle="Reza store" />

      <div className="container">
        { isLoading ? (
          <SpinnerLoading />
        ) : (
          <div>
            <h2>{article.tittle}</h2>

            <div className={styled.articleInfo}>
              <span>تاریخ {article.date}</span>
              <span>نویسنده: {article.actor}</span>
              <span>مدت زمان خواندن دقیقه {article.readingTime}</span>
            </div>

            <img src={article.imagUrl} alt="" />

            <p>{article.content}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ArticlePage;

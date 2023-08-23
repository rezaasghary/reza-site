import { useEffect, useState } from "react";
import Article from "../../components/article/article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./Home.module.css";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link, NavLink } from "react-router-dom";
import SpinnerLoading from "../../components/spinner/SpinnerLoading";


function Home() {
  const [articles, seteArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // api call
    setIsLoading(true);
    axios
      .get("http://localhost:7000/articles")
      .then((result) => {
        seteArticles(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  },[]);

  return (
    
    <div className={styled.homeWrapper}>
      <Navbar tittle="Reza Articles" />
      <div className="container">
        <h2>مقالات</h2>

        {isLoading ? (
          <SpinnerLoading/>
        ) : (
          <div className={styled.articles}>
            {articles.map((article) => (
              <Link to={`/articlepage/${article.id}`}>
                <Article key={article.id} article={article} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
export default Home;

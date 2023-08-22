
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import CreateArticle from "./pages/creatArticle/CreatArticle"
import AboutUs from "./pages/Aboutus/Aboutus";
import ArticlePage from "./pages/articlePage/ArticlePage";
import Notfound from "./pages/notfound/notFound";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        
        
        <Route path="/about" element={<AboutUs />} />
        <Route path="/articlepage/:id" element={<ArticlePage />} />
        <Route path="/creat-article" element={<CreateArticle/>} />
        <Route path="*" element={<Notfound/>} />
       
        
      </Routes>
    </div>
  );
}

export default App;

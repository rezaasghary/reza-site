import styled from "./navbar.module.css";
import { Link, NavLink } from "react-router-dom";
function Navbar(props){

    

    return(

       <div className={styled.wrapper}>
         <div className="container">
            <div className={styled.header}>
            <h3>
                {props.tittle}
            </h3>
            <ul>
                <li>
                    <Link to="/">
                    لیست مقالات
                    </Link>
                    
                   
                    
                    
                </li>
                <li>
                    <Link to = "/creat-article">
                    مقاله جدید
                    
                    </Link>
                    
                </li>
                <li>
                    <Link to="/about">
                    درباره ما
                    </Link>
                    
                </li>
            </ul>
        </div>
        </div>
       </div>
    )
}

export default Navbar;
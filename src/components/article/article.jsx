import styled from "./article.module.css"

function Article(props){
    
    return(
        <div className={styled.articleWrapper}>
            <img src={props.article.imagUrl} alt="" />
            <h4>{props.article.tittle}</h4>
            <p>زمان مطالعه {props.article.readingTime} دقیقه</p>

        </div>
    )
}

export default Article;
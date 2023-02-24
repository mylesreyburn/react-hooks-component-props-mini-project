import React from "react";
import Article from "./Article";

function ArticleList( {articles} ){
    console.log("articles:", articles)
    const articlesUse = articles.map((post) => {
        return <Article 
            key={post.id} 
            title={post.title} 
            date={post.date} 
            preview={post.preview}
            minutes={post.minutes}
        />
    }
    )
    return articlesUse
}

export default ArticleList
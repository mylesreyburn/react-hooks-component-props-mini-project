import React from "react";
import Article from "./Article";

function ArticleList( {posts} ){
    console.log("articles:", posts)
    const articlesUse = posts.map((post) => {
        return <Article 
            key={post.id} 
            title={post.title} 
            date={post.date} 
            preview={post.preview}
            minutes={post.minutes}
        />
    }
    )
    return(
        <main>
            {articlesUse}
        </main>
    )
}

export default ArticleList
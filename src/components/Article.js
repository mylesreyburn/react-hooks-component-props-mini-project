import React from "react";

function Article( {title, date = "January 1, 1970", preview, minutes} ){
    let roundedMinutes = 0;
    let minutesDisplayString = ""
    if(minutes < 30){
        roundedMinutes = Math.ceil(minutes/5)*5
        console.log(roundedMinutes)
        for(let i = 0; i < roundedMinutes/5; i++){
            minutesDisplayString += "☕️"
        }
    }else{
        roundedMinutes = Math.ceil(minutes/10)*10
        console.log(roundedMinutes)
        for(let i = 0; i < roundedMinutes/10; i++){
            minutesDisplayString += "🍱"
        }
    }
    console.log(minutesDisplayString)
    
    

    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{minutesDisplayString} {minutes} min read</p>
        </article>
    )
}

export default Article
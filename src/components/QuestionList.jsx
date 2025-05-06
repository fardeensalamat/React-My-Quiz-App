import React from "react";
import styles from "../styles/QuestionList.module.css"


export default function QuestionList({question, options, handleClick, currentAnswer}){

    return(
        <div className={styles.QuestionWrapper}>
            <div className="container">
                <h2>{question}</h2>
                <hr />
                <ol>
                    {options.map((option, index)=>(
                        <li key={index} onClick={()=>handleClick(option)} className={currentAnswer === option ? styles.selected : ''}>{option}</li>
                    ))}
                </ol>
            </div>
        </div>
        
    )
}
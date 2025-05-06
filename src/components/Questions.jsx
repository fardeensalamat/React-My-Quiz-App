import React, { useState } from "react";
import QuestionList from "./QuestionList";
import Result from "./Result";
import styles from '../styles/Questions.module.css'


export default function Questions(){

    const questions = [

        {
            question: 'What is 2 + 2 ?',
            options: ['0','4','-4','2'],
            answer: '4'
        },
        {
            question: 'What is  9 + 7 ?',
            options: ['15','16','17','18'],
            answer: '16'
        },

        {
            question: 'What is  9 - 5 ?',
            options: ['1','2','3','4'],
            answer: '4'
        },

        {
            question: 'What is  9 - 1 ?',
            options: ['8','2','3','4'],
            answer: '8'
        },

        {
            question: 'What is  9 + 9 ?',
            options: ['19','28','18','17'],
            answer: '18'
        },

    ]

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [score,setScore] = useState(0);

    //Marks Calculation
    
    const handleClick = (option) => {
          setCurrentAnswer(option);
          if(option === questions[currentQuestionIndex].answer){
             setScore(score + 1);
          }
    }

    const handleNextQuestion = ()=> {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer(null);
    }

    return (
        <div className="container">

            {currentQuestionIndex < questions.length ? 
                <div>
                   <QuestionList question={questions[currentQuestionIndex].question}
                   options={questions[currentQuestionIndex].options} handleClick={handleClick} currentAnswer={currentAnswer}/>
                   <button disabled={currentAnswer === null}  className={currentAnswer === null ? "btn btn-secondary w-100" : "btn btn-success w-100"} onClick={handleNextQuestion}>Submit</button>
                </div> : <Result score = {score} />
            }
                              
        </div>
    )
}


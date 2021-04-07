import React, { useState, useEffect } from 'react';
import {quizQuestionsAmount} from "../constants/index";
import { Link } from 'react-router-dom';

import QuizContent from "../components/quizContent/QuizContent"

const QuizPage = ({array}) => {
     const [step, setStep] = useState(1);
    // const [grade, setGrade] = useState(0);
    // useEffect(()=>{},[gradeSummary])

    const onBackClick = () => {setStep(prevStep => prevStep-1);}
//console.log("step",step,"\n","grade",grade);
    const onNextStep = () => {setStep(prevStep => prevStep+1);}

    const finishQuiz = () => {
        //setStep(prevStep => prevStep+1)
        localStorage.setItem("userGrade", array.reduce((a, b) => parseInt(a) + parseInt(b)));
        return <button><Link to="/result" className="btn btn-primary">Done</Link></button>
        
    };
     console.log("step",step)
    // console.log("gradeSummary",gradeSummary)
    console.log("array",array)


    return (
        <div className='quiz_page'>
            <div>quiz</div>
            <QuizContent currentStep = {step} arrayGradesAnsweredQuestion = {array}/>
            <button onClick={onBackClick} disabled={step===1}>back</button>
            {step < quizQuestionsAmount && <button onClick={onNextStep} disabled={false}>next</button>}
            {step === quizQuestionsAmount && finishQuiz()}

        </div>
    )
};

export default QuizPage;
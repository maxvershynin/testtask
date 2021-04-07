import React, { useState, useEffect } from 'react';
import {quizQuestionsAmount} from "../constants/index";
import { Link } from 'react-router-dom';

import QuizContent from "../components/quizContent/QuizContent"

const QuizPage = ({array}) => {
     const [step, setStep] = useState(1);
     const [error, setError] = React.useState(false);
     
    // const [grade, setGrade] = useState(0);
    // useEffect(()=>{},[gradeSummary])

    const onBackClick = () => {
        setStep(prevStep => prevStep-1);
        setError(false);
    }
//console.log("step",step,"\n","grade",grade);
    // const error = () => {console.log('2222222222222222222')}
    const onNextStep = (step) => {
        console.log(array);
        if(array[step-1]!==0){
            setStep(prevStep => prevStep+1);
            setError(false);
        } else {
            setError(true)
        };
    };

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
            <QuizContent currentStep = {step} arrayGradesAnsweredQuestion = {array} error={error} />
            <button onClick={onBackClick} disabled={step===1}>back</button>
            {step < quizQuestionsAmount && <button onClick={()=>onNextStep(step)} disabled={false}>next</button>}
            {step === quizQuestionsAmount && finishQuiz()}

        </div>
    )
};

export default QuizPage;
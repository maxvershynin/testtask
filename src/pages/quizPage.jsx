import React, { useState, useEffect } from 'react';
import quizQuestionsAmount from "../constants/index";
import { Link } from 'react-router-dom';

import QuizContent from "../components/QuizContent"

const gradeSummary = [0];

const QuizPage = (props) => {
    const [step, setStep] = useState(1);
    const [grade, setGrade] = useState(0);
    useEffect(()=>{},[gradeSummary])

    const onBackClick = () => setStep(prevStep => prevStep-1);

    const onNextStep = () => setStep(prevStep => prevStep+1);

    const finishQuiz = () => {
        // localStorage.setItem({userGrade: grade})
       return <button><Link to="/result" className="btn btn-primary">Done</Link></button>
        
    };
    console.log("step",step)
    console.log("gradeSummary",gradeSummary)


    return (
        <div className='quiz_page'>
            <div>quiz</div>
            <QuizContent currentStep = {step} currentGrade = {grade} setGrade = {setGrade} gradeSummary = {gradeSummary}/>
            <button onClick={onBackClick} disabled={step===1}>back</button>
            {step < quizQuestionsAmount && <button onClick={onNextStep} disabled={!gradeSummary[step-1]}>next</button>}
            {step === quizQuestionsAmount && finishQuiz()}

        </div>
    )
};

export default QuizPage;
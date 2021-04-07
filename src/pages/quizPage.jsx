import React, { useState, useEffect } from 'react';
import {quizQuestionsAmount} from "../constants/index";
import { Link } from 'react-router-dom';

import QuizContent from "../components/quizContent/main"

const QuizPage = ({array}) => {
    const [step, setStep] = useState(1);
    const [error, setError] = React.useState(false);

    const onBackClick = () => {
        setStep(prevStep => prevStep-1);
        setError(false);
    }
    
    const onNextStep = (step) => {
        if(array[step-1]!==0){
            setStep(prevStep => prevStep+1);
            setError(false);
        } else {
            setError(true)
        };
    };

    return (
        <div className='quiz_page'>
            <div>quiz</div>
            <QuizContent currentStep = {step} arrayGradesAnsweredQuestion = {array} error={error} />
            <button onClick={onBackClick} disabled={step===1}>back</button>
            {step < quizQuestionsAmount && <button onClick={()=>onNextStep(step)}>next</button>}
            {step === quizQuestionsAmount && <button><Link to="/result" className="btn btn-primary">Done</Link></button>}
        </div>
    )
};

export default QuizPage;
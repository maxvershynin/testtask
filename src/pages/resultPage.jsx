import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResultPage = (props) => {
    const [step, setStep] = useState('Welcome');

    const onNextStep = () => setStep('Reset');

    const onBackClick = () => setStep('Welcome');

    return (
        <div className='result_page'>
            <div>ResultPage</div>
        </div>
    )
};

export default ResultPage;
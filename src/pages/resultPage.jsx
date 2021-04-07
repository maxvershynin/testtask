import React from 'react';

const ResultPage = (props) => {

    const grade = localStorage.getItem("userGrade");
    return (
        <div className='result_page'>
            <header>ResultPage </header>
            <span>USER`S GRADE ==&gt; <b>{grade}</b></span>
        </div>
    )
};

export default ResultPage;
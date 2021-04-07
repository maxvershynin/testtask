import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResultPage = (props) => {

    const grade = localStorage.getItem("userGrade");
    return (
        <div className='result_page'>
            <div>ResultPage {grade}</div>
            
        </div>
    )
};

export default ResultPage;
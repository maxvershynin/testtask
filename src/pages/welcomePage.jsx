import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = (props) => {

    return (
        <div className='welcome_page'>
            <header>Hello, we are going to make a quick quiz</header>
            <p>Click on the button </p>
            <button><Link to="/quiz" className="btn btn-primary">Let`s start</Link></button>
        </div>
    )
};

export default WelcomePage;
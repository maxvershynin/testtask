import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = (props) => {

    return (
        <div className='welcome_page'>
            <header>Hello, we are going to make a quick quiz</header>
            <p>Click on the button </p>
            <Link to="/quiz" className="btn btn-primary"><button>Let`s start</button></Link>
        </div>
    )
};

export default WelcomePage;
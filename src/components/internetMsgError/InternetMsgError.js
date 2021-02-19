import React from 'react';
import './internetMsgError.css';
import cloudSlash from '../assets/cloudSlash.svg';

function InternetMsgError() {
    
    return (
        <div className="no_internet">
            <img  width="50px" height="auto" src={cloudSlash} alt="no conn." />
            <p>Sorry, no internet connection.</p>
        </div>
    )
}

export default InternetMsgError

import React from 'react';
import './Main.css';
import Nav from '../nav/Nav';
import MainPage from '../mainPage/MainPage';

function Main() {
    return (
        <div className="main">
            <div className="main_inner">
                <Nav />
                <MainPage />
            </div>
           

        </div>
    )
}

export default Main

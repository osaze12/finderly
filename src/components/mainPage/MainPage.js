import React from 'react';
import './MainPage.css';
import Search from '../search/Search';
import Images from '../images/Images';

function MainPage() {
   
    return (
        <div className="mainPage">
           <h1>Discover beautiful {window.screen.width > 480 && <br/>} African Images.</h1>
           <Search />
           <p className='trendList'><span>Trending:</span> Flower, Wallpaper, backgrounds, Happy, Love</p>
           <Images />
        </div>

        
    )
}

export default MainPage

import React from 'react';
import TvShow from './TvShow';
import endGame from "./images/endGame.jpg";
import thor from "./images/thor.jpg";
import blackPanther from "./images/blackPanther.jpg";
import captainMarvel from "./images/captainMarvel.jpg";
import infinityWar from "./images/infinityWar.jpg";
import ironMan from "./images/ironMan.jpg";
import antMan from "./images/antMan.jpg";

function Gallery () {
    return(
        <div>
            <img src={endGame} className="cover" alt="endgame movie cover" />
            <div className='container'>
                <TvShow id='thor' name='Thor' image={thor}/>
                <TvShow id='captain_marvel' name='Captain Marvel' image={captainMarvel}/>
                <TvShow id='ironman' name='Ironman' image={ironMan}/> 
                <TvShow id='antman' name='Antman' image={antMan}/>
                <TvShow id='black_panther' name='Black Panther' image={blackPanther}/>
                <TvShow id='infinity_war' name='Infinity war' image={infinityWar}/>
            </div>  
        </div>
    );
}

export default Gallery;
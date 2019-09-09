import React from 'react';
import TvShow from './TvShow';
import endGame from "./images/endGame.jpg";
import getTvshows from "./tvShows-get.js";


function Gallery() {
    return (
        <div>
            <img src={endGame} className="cover" alt="endgame movie cover" />
            <div className='container'>
                {
                    getTvshows().map(tvShow => (
                        <TvShow
                            key={tvShow.id}
                            id={tvShow.id}
                            name={tvShow.name}
                            image={tvShow.image}
                            description={tvShow.description}
                        />
                    ))
                }
            </div>
        </div>
    );
}



export default Gallery;
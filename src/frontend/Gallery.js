import React, { useEffect, useState } from "react";
import Navbar from './Navbar';
import TvShow from "./TvShow";
import Nav from './Nav'
//import getTvshows from "./tvShows-get.js";


export default function Gallery() {
  const [gallery, setGallery] = useState([]);
    useEffect(() => {
      fetch('/rest/shows')
        .then(response => response.json())
        .then(backendGallery => setGallery(backendGallery))
        .catch(() => console.log('err'))

    }, [])
  return (
  <div>
     <div className='mainCover'>
     <Navbar></Navbar>
     <img src={endGame} alt="endGame" className="cover" />
     </div>
     
     <Nav></Nav>
      <div className='container'>
      
       {
         gallery.map(tvShow => (
           <TvShow
           key={tvShow.id}
           id={tvShow.id}
           name={tvShow.name}
           />
         ))
       }
      </div>
  </div>
  );
  
}







    

import React, { useEffect, useState } from "react";
import TvShow from "./TvShow";
import endGame from "./images/endGame.jpg";
//import getTvshows from "./tvShows-get.js";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch("/rest/shows")
      .then(res => res.json())
      .then(backendShows => setGallery(backendShows))
      .catch(() => console.log("err"));
  }, []);

  return (
    <>  
      
        <img src={endGame} alt="endGame"  className="cover"/>
      
      <div className="container">
        {gallery.map(tvShow => (
          <TvShow
            key={tvShow.id}
            id={tvShow.id}
            name={tvShow.name}
            image={tvShow.image}
          />
        ))}
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Details.css";
import Loading from "./Loading.js";

export default function Details(props) {
  const [show, setShow] = useState({});
  const tvShowId = props.match.params.TvShow;

  useEffect(() => {
    fetch('/rest/tvShows')
      .then(res => res.json())
      .then(function (myJson) {
        let tvShow = myJson.find(show => show.id === tvShowId);
        setShow(tvShow);
    });
    
}, [tvShowId]);

  if (show.length > 0) {
    return (
      <div className="details">
        <div className="details-container">
          <h1 className="details-header">{show.name}</h1>
          <br />
          <br />
          <div className="details-info">
            <p className="details-text">{show.description}</p>
            <img
              className="image"
              src={require(`../images/${show.id}.jpg`)}
              alt={`${show.name} logo`}
            />
          </div>
          <Link className="Home-Page-Link" to="/">
            Return to Home Page
          </Link>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

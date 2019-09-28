import React from "react";
import { Link } from "react-router-dom";

function TvShow(props) {
  return (
    
      <Link to={`./${props.id}`} className='item'>
        <img class="thumbnail" src={require(`./images/${props.id}.jpg`)} alt={`${props.name}`} />
        <div className="overlay">
          <h1>{props.name}</h1>
        </div>
        <div className="synopsis">
          <h3>{props.description}</h3>
        </div>
      </Link>
    
  );
}

export default TvShow;

import React from "react";
import { FaSearch } from "react-icons/fa";
import endGame from "./images/endGame.jpg";

export default function Nav() {
	return (
		<>
			<div className="nav">
				<label className="logo">Kod</label>
				<label className="logo2">F</label>
				<label className="logo3">li</label>
				<label className="logo4">x</label>

				<div className="searchBox">
					<FaSearch />
					<input type="text" placeholder="Search" value=""></input>
				</div>
			</div>

			<div className="mainCover">
				<img src={endGame} alt="endGame" className="cover" />
			</div>
			<div className="coverTitle">
				<h1 className="mainCoverTitle">AVENGERS</h1>
				<h2 className="secondaryCoverTitle">Endgame</h2>
			</div>
			<div className="coverDescription">
				<p>
					Adrift in space with no food or water,
          	
					Tony Stark sends a message to Pepper Potts
					
					as his oxygen supply starts to dwindle. Meanwhile,
					
					the remaining Avengers -- Thor, Black Widow,
					
					Captain America and Bruce Banner -- must figure
					
					out a way to bring back their vanquished allies
					
					for an epic showdown with Thanos -- the evil demigod
					
					who decimated the planet and the universe.
        		</p>
			</div>
		</>
	);
}

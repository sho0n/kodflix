import thor from "./images/thor.jpg";
import blackPanther from "./images/blackPanther.jpg";
import captainMarvel from "./images/captainMarvel.jpg";
import infinityWar from "./images/infinityWar.jpg";
import ironMan from "./images/ironMan.jpg";
import antMan from "./images/antMan.jpg";

export default function getTvshows() {
    return[
        {id: 'thor' , name: 'thor', image: thor },
        {id: 'captain_marvel', name: 'Captain Marvel', image: captainMarvel },
        {id: 'ironman', name: 'ironman', image: ironMan },
        {id: 'antman', name: 'Antman', image: antMan },
        {id: 'black_panther', name: 'Black Panther', image: blackPanther },
        {id: 'infinity_war', name: 'Infinity war', image: infinityWar },
    ]
}
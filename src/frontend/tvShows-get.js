import thor from "./images/thor.jpg";
import blackPanther from "./images/blackPanther.jpg";
import captainMarvel from "./images/captainMarvel.jpg";
import infinityWar from "./images/infinityWar.jpg";
import ironMan from "./images/ironMan.jpg";
import antMan from "./images/antMan.jpg";

export default function getTvshows() {
    return[
        {id: 'thor' , name: 'Thor', image: thor, description:'As the son of Odin (Anthony Hopkins), king of the Norse gods, Thor (Chris Hemsworth) will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki (Tom Hiddleston), Thors brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.' },
        {id: 'captain_marvel', name: 'Captain Marvel', image: captainMarvel, description:'' },
        {id: 'ironman', name: 'Ironman', image: ironMan, description:'' },
        {id: 'antman', name: 'Antman', image: antMan, description:'' },
        {id: 'black_panther', name: 'Black Panther', image: blackPanther, description:'' },
        {id: 'infinity_war', name: 'Infinity war', image: infinityWar,  description:'' },
    ]
}
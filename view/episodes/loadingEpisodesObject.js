import Episodes from "../../objects/Episodes.js";

export default function loadingEpisodesObject(episodes){
    let episodesArray = [];
    for(let episode in episodes){
        episodesArray[episode] = new Episodes(episodes[episode].id, episodes[episode].air_date, episodes[episode].episode, episodes[episode].name);
    }

    return episodesArray;    
}
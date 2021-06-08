import {baseURL} from "../../index.js";

export default async function getDataEpisodesFromAPI(){
    const response = await fetch(baseURL);
    const data = await response.json();
    const episodes = await data.episodes;
    const responseEpisodes = await fetch(episodes);
    const dataEpisodes = await responseEpisodes.json();
    return dataEpisodes;
}
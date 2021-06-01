import loadingEpisodesObject from "../../view/episodes/loadingEpisodesObject.js";
import createHTMLEpisodesElements from "../../view/episodes/createHTMLEpisodesElements.js";
import {baseURL} from "../../index.js";

let fragment = document.createDocumentFragment();

export default async function getDataEpisodesFromAPI(){
    let episodesArray = [];

    const episodesContainer = document.querySelector("#all");

    const response = await fetch(baseURL);
    const data = await response.json();
    const episodes = await data.episodes;
    const responseEpisodes = await fetch(episodes);
    const dataEpisodes = await responseEpisodes.json();
    const obtainedEpisodes = await function (dataEpisodes) {                
        episodesArray = loadingEpisodesObject(dataEpisodes.results);
        for(let i = 0; i < episodesArray.length; i++){
            fragment.append(createHTMLEpisodesElements(episodesArray[i]));
            episodesContainer.append(fragment);
        }
    }
    obtainedEpisodes(dataEpisodes);
}
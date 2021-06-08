import loadingEpisodesObject from "./loadingEpisodesObject.js";
import createHTMLEpisodesElements from "./createHTMLEpisodesElements.js";

export default async function gettingEpisodes(dataEpisodes){
    // Here i created this fragment to load it with DOM elements and then render all in only one iteration.
    let fragment = new DocumentFragment();

    let episodesArray = [];
    const episodesContainer = document.querySelector("#all");
    const obtainedEpisodes = await function (dataEpisodes) {                
        episodesArray = loadingEpisodesObject(dataEpisodes.results);
        for(let i = 0; i < episodesArray.length; i++){
            fragment.append(createHTMLEpisodesElements(episodesArray[i]));
        }
        episodesContainer.append(fragment);
    }

    obtainedEpisodes(dataEpisodes);
}
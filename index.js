import getDataCharactersFromAPI from "./logic/characters/getDataCharactersFromApi.js";
import getDataEpisodesFromAPI from "./logic/episodes/getDataEpisodesFromApi.js";
import getDataLocationFromAPI from "./logic/locations/getDataLocationFromApi.js";
import changingLoadingMessage from "./view/changingLoadingMessage.js";
import cleaningDom from "./view/clean/cleaningDom.js";

export const baseURL  = "https://rickandmortyapi.com/api";

document.querySelector("#obtainPJ").addEventListener("click",  () => {
    getCharacterInfoFromDataReceived();
});

async function getCharacterInfoFromDataReceived(){
    await getDataCharactersFromAPI();
    changingLoadingMessage("Characters");
}

document.querySelector("#obtainEP").addEventListener("click", () => {
    getEpisodeInfoFromDataReceived();
})

async function getEpisodeInfoFromDataReceived(){
    await getDataEpisodesFromAPI();
    changingLoadingMessage("Episodes");
}

document.querySelector("#obtainLT").addEventListener("click",  () => {
    getLocationInfoFromDataReceived();
});

async function getLocationInfoFromDataReceived(){
    await getDataLocationFromAPI();
    changingLoadingMessage("location");
}

document.querySelector("#clear").addEventListener("click", () => {
    intervalTrigger();
});

function intervalTrigger()  {
    let interval = setInterval(function() {
        let myBoolean = cleaningDom();
        if(!myBoolean){
            window.clearInterval(interval); 
        }
    }, 75);
};
import obtainCharacters from "./view/characters/obtainCharacters.js";
import obtainEpisodes from "./view/episodes/obtainEpisodes.js";
import obtainLocations from "./view/locations/obtainLocations.js";
import changingLoadingMessage from "./view/changingLoadingMessage.js";
import cleaningDom from "./view/clean/cleaningDom.js";

export const baseURL  = "https://rickandmortyapi.com/api";

document.querySelector("#obtainPJ").addEventListener("click",  () => {
    getCharacterInfoFromDataReceived();
});

async function getCharacterInfoFromDataReceived(){
    await obtainCharacters();
    changingLoadingMessage("Characters");
}

document.querySelector("#obtainEP").addEventListener("click", () => {
    getEpisodeInfoFromDataReceived();
})

async function getEpisodeInfoFromDataReceived(){
    await obtainEpisodes();
    changingLoadingMessage("Episodes");
}

document.querySelector("#obtainLT").addEventListener("click",  () => {
    getLocationInfoFromDataReceived();
});

async function getLocationInfoFromDataReceived(){
    await obtainLocations();
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
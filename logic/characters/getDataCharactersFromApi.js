import loadingCharactersObject from "../../view/characters/loadingCharactersObject.js";
import createHTMLCharactersElements from "../../view/characters/createHTMLCharactersElements.js";
import {baseURL} from "../../index.js";

let fragment = new DocumentFragment();

export default async function getDataCharactersFromAPI(){
    let charactersArray = [];
    const charactersContainer = document.querySelector("#all");
    const response = await fetch(baseURL);
    const data = await response.json();
    const characters = await data.characters;
    const responseCharacters = await fetch(characters);
    const dataCharacters = await responseCharacters.json();
    const obtainedCharacters = await function (dataCharacters) {                
        charactersArray = loadingCharactersObject(dataCharacters.results);
        for(let i = 0; i < charactersArray.length; i++){
            fragment.append(createHTMLCharactersElements(charactersArray[i]));
        }
        charactersContainer.append(fragment);
    }
    obtainedCharacters(dataCharacters);
}
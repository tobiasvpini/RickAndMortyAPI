import loadingCharactersObject from "./loadingCharactersObject.js";
import createHTMLCharactersElements from "./createHTMLCharactersElements.js";

export default async function gettingCharacters(dataCharacters){
    // Here i created this fragment to load it with DOM elements and then render all in only one iteration.
    let fragment = new DocumentFragment();

    let charactersArray = [];
    const charactersContainer = document.querySelector("#all");
    const obtainedCharacters = await function (dataCharacters) {                
        charactersArray = loadingCharactersObject(dataCharacters.results);
        for(let i = 0; i < charactersArray.length; i++){
            fragment.append(createHTMLCharactersElements(charactersArray[i]));
        }
        charactersContainer.append(fragment);
    }

    obtainedCharacters(dataCharacters);
}
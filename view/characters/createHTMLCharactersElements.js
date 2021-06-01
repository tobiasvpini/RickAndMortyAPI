import loadInfoInCharactersElements from "../characters/loadInfoInCharactersElements.js";
import addingClassesToCharacters from "../characters/addingClassesToCharacters.js"

export default function createHTMLCharactersElements(character){
    const characterContainer = document.createElement('div');
    const name = document.createElement('h4');
    const status = document.createElement('p');
    const species = document.createElement('p');
    const location = document.createElement('p');
    const img = document.createElement('img');

    loadInfoInCharactersElements(character, name, status, species, location, img);

    addingClassesToCharacters(characterContainer, name, status, species, location);

    characterContainer.append(img, name, status, species, location);

    return characterContainer;
}
import Character from "../../objects/Character.js";

export default function loadingCharactersObject(characters){
    let charactersArray = [];
    for(let character in characters){
        charactersArray[character] = new Character(characters[character].id, characters[character].name, characters[character].status, characters[character].species,  characters[character].location.name, characters[character].image);
        charactersArray[character].saludar();
    }

    return charactersArray;
}

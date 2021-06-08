import {baseURL} from "../../index.js";

export default async function getDataCharactersFromAPI(){
    const response = await fetch(baseURL);
    const data = await response.json();
    const characters = await data.characters;
    const responseCharacters = await fetch(characters);
    const dataCharacters = await responseCharacters.json();
    return dataCharacters;
}
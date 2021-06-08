import gettingCharacters from "./gettingCharacters.js";
import getDataCharactersFromAPI from "../../logic/characters/getDataCharactersFromApi.js";

export default async function obtainCharacters(){
    const dataCharacters = await getDataCharactersFromAPI();
    gettingCharacters(dataCharacters);
}

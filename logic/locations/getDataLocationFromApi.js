import {baseURL} from "../../index.js";

export default async function getDataLocationFromAPI(){
    const response = await fetch(baseURL);
    const data = await response.json();
    const locations = await data.locations;
    const responseLocations = await fetch(locations);
    const dataLocations = await responseLocations.json();
    return dataLocations;       
}
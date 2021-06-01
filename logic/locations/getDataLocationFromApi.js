import loadingLocationObject from "../../view/locations/loadingLocationObject.js";
import createHTMLLocationsElements from "../../view/locations/createHTMLLocationsElements.js";
import {baseURL} from "../../index.js";

let fragment = document.createDocumentFragment();

export default async function getDataLocationFromAPI(){
    let locationsArray = [];
    const locationsContainer = document.querySelector("#all");
    const response = await fetch(baseURL);
    const data = await response.json();
    const locations = await data.locations;
    const responseLocations = await fetch(locations);
    const dataLocations = await responseLocations.json();
        
    const obtainedLocation = await function (dataLocations) {                
        locationsArray = loadingLocationObject(dataLocations.results);
        for(let i = 0; i < locationsArray.length; i++){
            fragment.append(createHTMLLocationsElements(locationsArray[i]));
        }
        locationsContainer.append(fragment);
    }
    obtainedLocation(dataLocations);   
}
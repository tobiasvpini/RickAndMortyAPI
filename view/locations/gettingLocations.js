import loadingLocationObject from "./loadingLocationObject.js";
import createHTMLLocationsElements from "./createHTMLLocationsElements.js";

export default async function gettingLocations(dataLocations){
    // Here i created this fragment to load it with DOM elements and then render all in only one iteration.
    let fragment = new DocumentFragment();
    let locationsArray = [];
    const locationsContainer = document.querySelector("#all");
    const obtainedLocation = await function (dataLocations) {                
        locationsArray = loadingLocationObject(dataLocations.results);
        for(let i = 0; i < locationsArray.length; i++){
            fragment.append(createHTMLLocationsElements(locationsArray[i]));
        }
        locationsContainer.append(fragment);
    }
    obtainedLocation(dataLocations);
}
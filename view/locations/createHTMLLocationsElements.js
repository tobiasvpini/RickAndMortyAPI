import loadInfoInLocationsElements from "../locations/loadInfoInLocationsElements.js";
import addingClassesToLocations from "../locations/addingClassesToLocations.js";

export default function createHTMLLocationsElements(location){
    const locationContainer = document.createElement('div');
    const name = document.createElement('h4');
    const type = document.createElement('p');
    const dimension = document.createElement('p');
    const residents = document.createElement('ul');

    loadInfoInLocationsElements(location, name, type, dimension, residents);

    addingClassesToLocations(locationContainer, name, type, dimension, residents);

    locationContainer.append(name, type, dimension, residents);

    return locationContainer;
}
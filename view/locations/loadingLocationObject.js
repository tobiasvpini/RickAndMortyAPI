import Location from "../../objects/Location.js";

export default function loadingLocationObject(locations){
    let locationsArray = [];
    for(let location in locations){
        locationsArray[location] = new Location(locations[location].id, locations[location].name, locations[location].type, locations[location].dimension, locations[location].residents);
    }

    return locationsArray;
}
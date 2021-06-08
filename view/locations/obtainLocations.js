import gettingLocations from "./gettingLocations.js";
import getDataLocationFromAPI from "../../logic/locations/getDataLocationFromApi.js";

export default async function obtainLocation(){
    const dataLocations = await getDataLocationFromAPI();
    gettingLocations(dataLocations);   
}

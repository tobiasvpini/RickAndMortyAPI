import Character from "./objects/Character.js";
import Episodes from "./objects/Episodes.js";
import Location from "./objects/Location.js";

const baseURL  = "https://rickandmortyapi.com/api";

let fragment = new DocumentFragment();

document.querySelector("#obtainPJ").addEventListener("click",  () => {
    getCharacterInfoFromDataReceived();
});

async function getDataCharactersFromAPI(){
    let charactersArray = [];
    const charactersContainer = document.querySelector("#all");
    const response = await fetch(baseURL);
    const data = await response.json();
    const characters = await data.characters;
    const responseCharacters = await fetch(characters);
    const dataCharacters = await responseCharacters.json();
    const obtainedCharacters = await function (dataCharacters) {                
        charactersArray = loadingCharactersObject(dataCharacters.results);
        for(let i = 0; i < charactersArray.length; i++){
            fragment.append(createHTMLCharactersElements(charactersArray[i]));
        }
        charactersContainer.append(fragment);
    }
    obtainedCharacters(dataCharacters);
}

async function getCharacterInfoFromDataReceived(){
    await getDataCharactersFromAPI();
    changingLoadingMessage("characters");
}

function changingLoadingMessage(type){
    document.querySelector("#loading").textContent =  `${type} obtained!`;
}

const loadingCharactersObject = (characters) => {
    let charactersArray = [];
    for(let character in characters){
        charactersArray[character] = new Character(characters[character].id, characters[character].name, characters[character].status, characters[character].species,  characters[character].location.name, characters[character].image);
    }

    return charactersArray;
}

const createHTMLCharactersElements = (character) => {
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

const loadInfoInCharactersElements = (character, name, status, species, location, img) => {
    name.textContent = character.name;
    status.textContent = `Status: ${character.status}`;
    species.textContent = `Specie: ${character.species}`;
    location.textContent = `Location: ${character.location}`;
    img.src = character.image;
}

const addingClassesToCharacters = (characterContainer, name, status, species, location) => {
    characterContainer.className = 'character-container';
    name.className = 'nameOfCharacter';
    status.className = 'status';
    species.className = 'species';
    location.className = 'location';
    if(name.textContent.length > 20){
        name.className += ' largeName';
    }
}

document.querySelector("#clear").addEventListener("click", () => {
    intervalTrigger();
});

function cleaningDom(){
    const container = document.querySelector("#all");
    document.querySelector("#loading").textContent = "Cleaning screan..";

    if(container.firstElementChild){
        container.removeChild(container.firstElementChild);
        return true;
    } else{
        document.querySelector("#loading").textContent = "Loading info";
        return false;
    }
}

function intervalTrigger()  {
    let interval = setInterval(function() {
        let myBoolean = cleaningDom();
        if(!myBoolean){
            window.clearInterval(interval); 
        }
    }, 75);
};

document.querySelector("#obtainEP").addEventListener("click", () => {
    getEpisodeInfoFromDataReceived();
})

async function getEpisodeInfoFromDataReceived(){
    await getDataEpisodesFromAPI();
    changingLoadingMessage("episodes");
}

async function getDataEpisodesFromAPI(){
    let episodesArray = [];

    const episodesContainer = document.querySelector("#all");

    const response = await fetch(baseURL);
    const data = await response.json();
    const episodes = await data.episodes;
    const responseEpisodes = await fetch(episodes);
    const dataEpisodes = await responseEpisodes.json();
    const obtainedEpisodes = await function (dataEpisodes) {                
        episodesArray = loadingEpisodesObject(dataEpisodes.results);
        for(let i = 0; i < episodesArray.length; i++){
            fragment.append(createHTMLEpisodesElements(episodesArray[i]));
            episodesContainer.append(fragment);
        }
    }
    obtainedEpisodes(dataEpisodes);
}

const loadingEpisodesObject = (episodes) => {
    let episodesArray = [];
    for(let episode in episodes){
        episodesArray[episode] = new Episodes(episodes[episode].id, episodes[episode].air_date, episodes[episode].episode, episodes[episode].name);
    }

    return episodesArray;    
}

const createHTMLEpisodesElements = (episode) => {
    const episodeContainer = document.createElement('div');
    const name = document.createElement('h4');
    const episodeName = document.createElement('p');
    const air_date = document.createElement('p');
    const id = document.createElement('p');
    const img = document.createElement('img');

    loadInfoInEpisodesContainer(episode, name, id, episodeName, air_date, img);

    addingClassesToEpisodes(img, episodeContainer, name, id, air_date, episodeName);

    episodeContainer.append(img, name, id, episodeName, air_date);

    return episodeContainer;
}

const loadInfoInEpisodesContainer = (episode, name, id, episodeName, air_date, img) => {
    name.textContent = episode.name;
    id.textContent = `ID: ${episode.id}`;
    episodeName.textContent = `Episode: ${episode.episode}`;
    air_date.textContent = `Air date: ${episode.air_date}`;
    img.src = './img/episodeImage.jpg';
}

const addingClassesToEpisodes = (img, episodesContainer, name, id, air_date, episodeName) => {
    episodesContainer.className = 'episodes-container';
    name.className = 'nameOfEpisode';
    id.className = 'id';
    air_date.className = 'air_date';
    episodeName.className = 'episodeName';
    img.className = 'episodeImg';
    if(name.textContent.length >= 20 && name.textContent.length < 30){
        name.className += ' largeName';
    } else if(name.textContent.length >= 30 && name.textContent.length < 35){
        name.className += ' superLargeName';
    } else if(name.textContent.length >= 35){
        name.className += ' ultraSuperLargeName';
    }
}

document.querySelector("#obtainLT").addEventListener("click",  () => {
    getLocationInfoFromDataReceived();
});

async function getDataLocationFromAPI(){
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

async function getLocationInfoFromDataReceived(){
    await getDataLocationFromAPI();
    changingLoadingMessage("location");
}

const loadingLocationObject = (locations) => {
    let locationsArray = [];
    for(let location in locations){
        locationsArray[location] = new Location(locations[location].id, locations[location].name, locations[location].type, locations[location].dimension, locations[location].residents);
    }

    return locationsArray;
}

const createHTMLLocationsElements = (location) => {
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

const loadInfoInLocationsElements = (location, name, type, dimension, residents) => {
    name.textContent = location.name;
    type.textContent = `Type: ${location.type}`;
    dimension.textContent = `Dimension: ${location.dimension}`;
    residents.textContent = "Residents: "
    
    for(let resident in location.residents){
        residents.innerHTML += `<li>${location.residents[resident]}</li>`;
    }

}

const addingClassesToLocations = (locationContainer, name, type, dimension, residents) => {
    locationContainer.className = 'location-container';
    name.className = 'nameOfLocation';
    type.className = 'type';
    dimension.className = 'dimension';
    residents.className = 'residents';
    if(name.textContent.length >= 20 && name.textContent.length < 30){
        name.className += ' largeName';
    }else if(name.textContent.length >= 30 && name.textContent.length < 35){
        name.className += ' superLargeName';
    } else if(name.textContent.length >= 35){
        name.className += ' ultraSuperLargeName';
    }
}


import Character from "./Character.js";

const baseURL  = "https://rickandmortyapi.com/api";

let fragment = new DocumentFragment();

document.querySelector("#obtainPJ").addEventListener("click", async () => {
    const charactersContainer = document.querySelector("#all");

    const response = await fetch(baseURL);
    const data = await response.json();
    const characters = await data.characters;
    let charactersArray = [];

    changingLoadingMessage("characters");
    
    const responseCharacters = await fetch(characters);
    const dataCharacters = await responseCharacters.json();
    const obtainedCharacters = await function (dataCharacters) {                
        charactersArray = loadingCharactersObject(dataCharacters.results);
        for(let i = 0; i < charactersArray.length; i++){
            fragment.append(createHTMLElements(charactersArray[i]));
        }
        charactersContainer.append(fragment);
    }
    obtainedCharacters(dataCharacters);             
});

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

const createHTMLElements = (character) => {
    const characterContainer = document.createElement('div');
    const name = document.createElement('h3');
    const status = document.createElement('p');
    const species = document.createElement('p');
    const location = document.createElement('p');
    const img = document.createElement('img');

    name.textContent = character.name;
    status.textContent = `Status: ${character.status}`;
    species.textContent = `Specie: ${character.species}`;
    location.textContent = `Location: ${character.location}`;
    img.src = character.image;

    addingClasses(characterContainer, name, status, species, location);

    characterContainer.append(img, name, status, species, location);

    return characterContainer;
}

const addingClasses = (characterContainer, name, status, species, location) => {
    characterContainer.className = 'character-container';
    name.className = 'name';
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
    }, 0);
};

document.querySelector("#obtainEP").addEventListener("click", async() => {
    const episodesContainer = document.querySelector("#all");

    const response = await fetch(baseURL);
    const data = await response.json();
    const episodes = await data.episodes;
    let episodesArray = [];

    changingLoadingMessage("episodes");
    
    const responseEpisodes = await fetch(episodes);
    const dataEpisodes = await responseEpisodes.json();
    const obtainedEpisodes = await function (dataEpisodes) {                
        episodesArray = loadingEpisodesObject(dataEpisodes.results);
        for(let i = 0; i < episodesArray.length; i++){
            fragment.append(createHTMLElements(episodesArray[i]));
            episodesContainer.append(fragment);
        }
    }
    obtainedEpisodes(dataEpisodes);    
})



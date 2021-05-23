import Character from "./Character.js";

const baseURL  = "https://rickandmortyapi.com/api";

let fragment = new DocumentFragment();

document.querySelector(".obtainPJ").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    document.body.style.overflowY = 'visible';

    fetch(baseURL)
    .then(response => response.json())
    .then(data => {
        const charactersContainer = document.querySelector("#all");
        const loading = document.querySelector("#loading");
        const characters = data.characters;
        let charactersArray = [];

        loading.textContent = 'Characters obtained!';
        loading.classList += 'postLoadGetCharacters';
        
        fetch(characters)
            .then(resp => resp.json())
            .then(data => {
                let i = 1;
                let nextPage = `https://rickandmortyapi.com/api/character?page=${i+1}`;
                let initialPage = `https://rickandmortyapi.com/api/character?page=${i}`;
                let prevPage = `https://rickandmortyapi.com/api/character?page=${i-1}`;
                
                charactersArray = loadingCharactersObject(data.results);
                for(let i = 0; i < charactersArray.length; i++){
                    fragment.append(createHTMLElements(charactersArray[i]));
                }
                charactersContainer.append(fragment);
            })         
    });
})


document.querySelector(".clean").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
 
    document.querySelector("#loading").textContent = "Cleaning screan..";

    const container = document.querySelector("#all");

    setInterval(() => {
            if(container.lastElementChild){
                container.removeChild(container.firstElementChild);
            } else{
                document.querySelector("#loading").textContent = "Loading info";
            }
    }, 350);

})

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
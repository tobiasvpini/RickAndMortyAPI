export default function addingClassesToCharacters(characterContainer, name, status, species, location){
    characterContainer.className = 'character-container';
    name.className = 'nameOfCharacter';
    status.className = 'status';
    species.className = 'species';
    location.className = 'location';
    if(name.textContent.length > 20){
        name.className += ' largeName';
    }
}
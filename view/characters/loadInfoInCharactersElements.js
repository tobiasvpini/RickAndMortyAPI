export default function loadInfoInCharactersElements(character, name, status, species, location, img){
    name.textContent = character.name;
    status.textContent = `Status: ${character.status}`;
    species.textContent = `Specie: ${character.species}`;
    location.textContent = `Location: ${character.location}`;
    img.src = character.image;
}
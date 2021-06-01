export default function loadInfoInLocationsElements(location, name, type, dimension, residents){
    name.textContent = location.name;
    type.textContent = `Type: ${location.type}`;
    dimension.textContent = `Dimension: ${location.dimension}`;
    residents.textContent = "Residents: "
    
    for(let resident in location.residents){
        residents.innerHTML += `<li>${location.residents[resident]}</li>`;
    }

}
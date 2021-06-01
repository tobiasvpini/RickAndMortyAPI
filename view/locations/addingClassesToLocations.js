export default function addingClassesToLocations(locationContainer, name, type, dimension, residents){
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

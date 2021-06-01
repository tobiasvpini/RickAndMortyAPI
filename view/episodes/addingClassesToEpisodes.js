export default function addingClassesToEpisodes(img, episodesContainer, name, id, air_date, episodeName){
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
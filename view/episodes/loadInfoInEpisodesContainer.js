export default function loadInfoInEpisodesContainer(episode, name, id, episodeName, air_date, img){
    name.textContent = episode.name;
    id.textContent = `ID: ${episode.id}`;
    episodeName.textContent = `Episode: ${episode.episode}`;
    air_date.textContent = `Air date: ${episode.air_date}`;
    img.src = "../img/episodeImage.jpg";
}
import loadInfoInEpisodesContainer from "../episodes/loadInfoInEpisodesContainer.js";
import addingClassesToEpisodes from "../episodes/addingClassesToEpisodes.js";

export default function createHTMLEpisodesElements(episode){
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
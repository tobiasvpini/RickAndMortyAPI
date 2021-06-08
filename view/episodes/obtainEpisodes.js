import gettingEpisodes from "./gettingEpisodes.js";
import getDataEpisodesFromAPI from "../../logic/episodes/getDataEpisodesFromApi.js";

export default async function obtainEpisodes(){
    const dataEpisodes = await getDataEpisodesFromAPI();
    gettingEpisodes(dataEpisodes);
}

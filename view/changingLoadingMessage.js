export default function changingLoadingMessage(type){
    document.querySelector("#loading").textContent =  `${type} obtained!`;
}
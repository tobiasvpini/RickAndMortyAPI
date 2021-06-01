export default function cleaningDom(){
    const container = document.querySelector("#all");
    document.querySelector("#loading").textContent = "Cleaning screan..";

    if(container.firstElementChild){
        container.removeChild(container.firstElementChild);
        return true;
    } else{
        document.querySelector("#loading").textContent = "Loading info";
        return false;
    }
}
// buttons for switching between map and kingdoms
let mapButton = document.getElementById("map-button")
let kingdomsButton = document.getElementById("kingdoms-button")

let mapDiv = document.getElementById("world-map-div");
let kingdomsDiv = document.getElementById("world-kingdoms-div")

function toggleMap() {
    if (kingdomsButton.disabled == true) {

        mapButton.disabled = true;
        kingdomsButton.disabled = false;

        mapDiv.style.display = "block";
        kingdomsDiv.style.display = "none";

    }
}

function toggleKingdoms() {
    if (mapButton.disabled == true) {

        kingdomsButton.disabled = true;
        mapButton.disabled = false;

        mapDiv.style.display = "none";
        kingdomsDiv.style.display = "block";

    }
}
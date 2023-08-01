document.addEventListener("DOMContentLoaded", () => {
    createSquareDivs(16);
})

function createSquareDivs(gridSize) {
    let etchContainer = document.querySelector(".container");
    gridSize **= 2
    for (let i = 0; i<gridSize; i++) {
        let div = document.createElement("div");
        etchContainer.appendChild(div);

    }
}
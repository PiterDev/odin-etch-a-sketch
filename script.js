const container_size = 720;

document.addEventListener("DOMContentLoaded", () => {
    createSquareDivs(32);
    document.querySelectorAll(".etch-div").forEach(div => {
        div.addEventListener("mouseover", divMouseOver)
    });
})

function divMouseOver(event) {
    this.style.backgroundColor = "#000";
}

function createSquareDivs(gridSize) {
    let etchContainer = document.querySelector(".container");
    let divAmount = gridSize ** 2;
    for (let i = 0; i < divAmount; i++) {
        let div = document.createElement("div");
        div.classList.add("etch-div");
        
        etchContainer.appendChild(div);
        div.style.flexBasis = `${container_size/gridSize}px`;
        //div.style.height = `${container_size/gridSize}px`;

    }
}
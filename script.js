const container_size = 720;

document.addEventListener("DOMContentLoaded", () => {
    createSquareDivs(32);
    document.querySelector(".generate").addEventListener("click", () => {
        let containerSize = 0;
        while (containerSize <= 0 || containerSize > 100) {
            containerSize = prompt("How much squares per side? (max 100)", 10);
        }
        
        createSquareDivs(containerSize);
    })
})

function divMouseOver(event) {
    this.style.backgroundColor = "#000";
}

function createSquareDivs(gridSize) {
    let etchContainer = document.querySelector(".container");
    etchContainer.replaceChildren();
    let divAmount = gridSize ** 2;
    for (let i = 0; i < divAmount; i++) {
        let div = document.createElement("div");
        div.classList.add("etch-div");
        div.addEventListener("mouseover", divMouseOver);

        etchContainer.appendChild(div);
        div.style.flexBasis = `${container_size/gridSize}px`;
    }
}
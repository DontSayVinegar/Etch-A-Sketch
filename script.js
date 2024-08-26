const gridContainer = document.querySelector(".gridContainer");

gridContainer.addEventListener("mouseover", (e) => {
    const targetSquare = e.target;
    targetSquare.style.backgroundColor = randomColor();
})

function addDivs(amountPerSide) {
    const amountOfDivs = amountPerSide * amountPerSide;
    let minWidth = gridContainer.clientWidth / amountPerSide;

    for (let i = 0; i < amountPerSide; i++) {
        const newRow = document.createElement("div");
        newRow.style.cssText = "flex: 1 1 " + minWidth + "px; display: flex;";

        for (let j = 0; j < amountPerSide; j++) {
            const newDiv = document.createElement("div");
            newDiv.style.cssText = "flex: 1 1 " + minWidth + "px";

            newRow.appendChild(newDiv);
        }

        gridContainer.appendChild(newRow);
    }
}

function randomColor() {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    return `rgb(${r}, ${g}, ${b})`;
}

addDivs(prompt("How many squares per side?"));
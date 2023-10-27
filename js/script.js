const gridElem = document.querySelector(".grid");
const numCell = 100;
const btnElem = document.querySelector("button");

btnElem.addEventListener("click", function () {
    for (let i = 0; i < numCell; i++) {
        let cellElem = document.createElement("div");
        cellElem.classList.add("cell");
        cellElem.innerText = i + 1;
        cellElem.addEventListener("click", setColorgetNumber);
        gridElem.append(cellElem);
    }
});


/*************************************************/
//FUNCTIONS
function setColorgetNumber() {
    this.classList.add("lightblue");
    console.log(this.innerText);
}
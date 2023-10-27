//get grid element and button element from HTML document
const gridElem = document.querySelector(".grid");
const btnElem = document.querySelector("button");

//add an EventListener in the button
btnElem.addEventListener("click", function () {
    //Clears the gridElem from possible cells
    gridElem.innerHTML = "";
    
    //Take the number of cells
    numCell = getCellNumber();
    //Gets the level class based on the number of cells
    let classLevel = getLevelClass(numCell);
    
    //Generates the cells
    generateCells(numCell, classLevel, gridElem);
});

/*************************************************/
//FUNCTIONS

/**
 * Description: this function get a value from the select element from the HTML document
 * @returns {Number}
 */
function getCellNumber() {
    const numCell = document.querySelector("#lev");
    return parseInt(numCell.value);
}

/**
 * Description: this function add a class lightblue in the cell element and prints in the console the number of the cell
 * 
 */
function setColorgetNumber() {
    this.classList.add("lightblue");
    console.log(this.innerText);
}


/*
* Description: this function take a number as a parameter and returns a name of a class 
* @param {number}
* @retruns {String}
*/
function getLevelClass(num) {
    switch (num) {
        case 100:
            return "easy";
        case 81:
            return "medium";
        case 49:
            return "hard";
        default:
            break;
    }
}

/** 
 * Description: this function generate a number of cells passed by parameter with the level class and the cell class. Add an eventListener and than appends it in the HTML element grid 
 * @params {number, String, HTML element}
 * 
 */
function generateCells(number, level, grid) {
    for (let i = 0; i < number; i++) {
        let cellElem = document.createElement("div");
        cellElem.classList.add("cell");
        cellElem.classList.add(level);
        cellElem.innerText = i + 1;
        cellElem.addEventListener("click", setColorgetNumber);
        grid.append(cellElem);
    }
}
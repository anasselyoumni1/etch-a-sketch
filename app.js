const gridItem = document.querySelector(".grid-item");
const container = document.querySelector(".grid-container");
const resetButton = document.createElement("button");
const inputButton = document.createElement("button");

resetButton.innerHTML = "reset";
inputButton.innerHTML = "help";

document.body.appendChild(inputButton);
document.body.appendChild(resetButton);

function defaultGrid() { 
    
}

const gridInput =  prompt("Vul je grid in.");
parseInt(gridInput);
if(gridInput >=100) {
    alert("Sorry dit is een te grote hoeveelheid");
    }
     else 
     {
    for(let i = 0; i < gridInput * gridInput; i++){
    const divElement = document.createElement("div");
    divElement.classList.add("grid-item");
    container.appendChild(divElement);

    divElement.addEventListener('mouseenter', e =>{
        const randomOne = Math.floor(Math.random()*255);
        const randomTwo = Math.floor(Math.random()*255);
        const randomThree = Math.floor(Math.random()*255);
    divElement.style.backgroundColor = `rgb(${randomOne},${randomTwo}, ${randomThree})`;
   });

   resetButton.addEventListener('click', e => {
    divElement.style.backgroundColor = "transparent";
});
}}


function clearGrid() { 
    const 
}

// Je moet nog dit gedeelte fiksen
inputButton.addEventListener('click', (e) => { 
   const gridInput =  prompt("Vul je grid in.");
    parseInt(gridInput);
    
});




const container = document.getElementById('container');
const squares = 100;

//sound player
const context = new AudioContext()
let o, g;


function generateRandomColor(){
    return '#' + Math.floor((Math.random() * 0xFFFFFF)).toString(16).padStart(6, 0);
}

function setColor(event, el, color){
    if (color !== undefined){
        el.style.background = color;
        el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    }
    else{
        el.style.background = '#1d1d1d';
        el.style.boxShadow = '0 0 2px #000';
    }
}

for (let i = 0; i < squares; i++) {
    //generate new square elemeent
    const square = document.createElement('div');
    square.classList.add('square'); 

    //change color depending on events
    square.addEventListener('mouseover', (e) => {e.preventDefault(); setColor(e, square, generateRandomColor())});
    square.addEventListener('mouseout', (e) => {e.preventDefault(); setColor(e, square)});

    //append element to the html
    container.appendChild(square);   
}
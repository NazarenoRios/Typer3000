const body = document.querySelector("body");
const palabraAleatoria = document.querySelector("#randomWord");
const time = document.querySelector("#timeSpan");
const score = document.querySelector("#score");
const endGameContainer = document.querySelector(".end-game-container");
const input1 = document.querySelector("#input1");
const timeContainer = document.querySelector(".time-container");
const scoreContainer = document.querySelector(".score-container");
const endGame = document.querySelector("#end-game-container");
const main = document.querySelector(".main");

const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];


time.value = 10;
score.value = 0;

function randomWords (arr) {
    for (let i = 0; i < arr.length; i++) {
        return arr[Math.floor(Math.random() * arr.length)]
    }
};

function addToDOM () {
    palabraAleatoria.textContent = randomWords(words);
};

addToDOM();

input1.addEventListener("input", function (e) {

    let palabraIngresada = e.target.value;

    if (palabraIngresada == palabraAleatoria.textContent) {
        time.value += 3;
        e.target.value = "";
        updateScore()
        return addToDOM();
    }
});



function actualizarTiempo () {
    
    timeContainer.innerHTML = `Tiempo restante: ${time.value}s`

    if (time.value === 0) {
        clearInterval(timeInterval);
        main.style.display = "none";
        gameOver();
    }
    else {
        time.value--;
    }
}

let timeInterval = setInterval(actualizarTiempo, 1000);


function updateScore () {
    score.value += 1;
    scoreContainer.innerHTML = `Score: ${score.value}`;
};

function gameOver () {
    let titulo = document.createElement("h1");
    titulo.textContent = "Te quedaste sin tiempo!";
    titulo.style.marginBottom = "15px";

    let puntaje = document.createElement("p");
    puntaje.textContent = `Tu score fue de: ${score.value}`;
    puntaje.style.marginBottom = "15px";
    puntaje.style.fontSize = "23px";

    
    let restart = document.createElement("a");
    // restart.setAttribute("type","button")
    // restart.setAttribute("id","restart")
    // restart.setAttribute("onclick","location.reload()")
    restart.innerHTML = "<a id='restart' type='button' onclick='location.reload()'> <span id='span1'></span> <span id='span2'></span> <span id='span3'></span> <span id='span4'></span> Restart </a>";

    endGame.appendChild(titulo);
    endGame.appendChild(puntaje);
    endGame.appendChild(restart);
};
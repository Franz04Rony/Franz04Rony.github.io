const papel = document.getElementById("papel");
const piedra = document.getElementById("piedra");
const tijeras = document.getElementById("tijeras");
const inicio = document.getElementById("inicio");
const game = document.getElementById("game");
const win_lose = document.getElementById("win-lose");
const play_again = document.getElementById("play-again");
const b_play_again = document.getElementById("b-play-again");
const box_jugador = document.getElementById("box-jugador")
const you_picked = document.getElementById("you-picked");
const imagen_jugador = document.getElementById("imagen-jugador");
const box_casa = document.getElementById("box-casa");
const imagen_casa = document.getElementById("imagen-casa");
const score_number = document.getElementById("score");
let score = 0;
estados = ["piedra", "papel", "tijeras"];
links = ["images/icon-rock.svg", "images/icon-paper.svg", "images/icon-scissors.svg"];
game.style.display = "none";
imagen_jugador.className = "papel-img";
imagen_casa.className = "papel-img";
box_casa.style.backgroundImage = "unset"; //?
box_casa.style.boxShadow = "unset";
play_again.style.display = "none";
imagen_casa.style.boxShadow = "unset";
imagen_casa.style.backgroundColor = "hsl(229, 25%, 31%)";


function funcion1(){
     //Bot
     box_casa.className = bot;
     box_casa.style.cursor = "unset";
     box_casa.style.width = "10em";
     box_casa.style.height = "10em";
     box_casa.style.display = "flex";
     box_casa.style.alignItems = "center";
     box_casa.style.justifyContent = "center";
     imagen_casa.style.width = "7em";
     imagen_casa.style.height = "7em";
     box_casa.style.position = "unset";
     imagen_casa.src = link_bot;
}
function funcion2(bot){
    play_again.style.display = "flex";
    console.log("funcionn2")   
}

piedra.addEventListener("click",()=>{
    
    
    // let timerId = setTimeout(function(){
    //     console.log("que tal??");
    //     },1000);
    
    jugador = "piedra";
    rand = Math.floor((Math.random()*3)+1);
    bot = estados[rand - 1];
    link_bot = links[rand - 1];
    i = 0
    let timerId = setTimeout(function(){
        funcion1()
    },1000);
    let timerId1 = setTimeout(function(){
        funcion2(bot)
    },2000);
    //Poniendo estilos
    //Jugador
    box_jugador.className = jugador;
    box_jugador.style.cursor = "unset";
    box_jugador.style.width = "10em";
    box_jugador.style.height = "10em";
    box_jugador.style.display = "flex";
    box_jugador.style.alignItems = "center";
    box_jugador.style.justifyContent = "center";
    imagen_jugador.style.width = "7em";
    imagen_jugador.style.height = "7em";
    box_jugador.style.position = "unset";
    imagen_jugador.src = links[0];
    
    //cambiar de pantalla
    inicio.style.display = "none";
    game.style.display = "flex";
    if (jugador != bot){
        if(bot == "papel"){
            console.log("Bot gana")
            win_lose.textContent = "Perdiste :c"
            score_number.textContent = score-1;
            score = score - 1;
        }
        else{
            console.log("Jugador gana")
            win_lose.textContent = "Ganaste!"
            score_number.textContent = score+2;
            score = score + 2;
        }
    }
    else{
        console.log("Empateee");
        win_lose.textContent = "Empateee";
    }
})

papel.addEventListener("click",()=>{
    jugador = "papel";
    rand = Math.floor((Math.random()*3)+1);
    bot = estados[rand - 1];
    link_bot = links[rand - 1];
    //Poniendo estilos
    //Jugador
    box_jugador.className = jugador;
    box_jugador.style.cursor = "unset";
    box_jugador.style.width = "10em";
    box_jugador.style.height = "10em";
    box_jugador.style.display = "flex";
    box_jugador.style.alignItems = "center";
    box_jugador.style.justifyContent = "center";
    imagen_jugador.style.width = "7em";
    imagen_jugador.style.height = "7em";
    box_jugador.style.position = "unset";
    imagen_jugador.src = links[1];
    //Bot
    box_casa.className = bot;
    box_casa.style.cursor = "unset";
    box_casa.style.width = "10em";
    box_casa.style.height = "10em";
    box_casa.style.display = "flex";
    box_casa.style.alignItems = "center";
    box_casa.style.justifyContent = "center";
    imagen_casa.style.width = "7em";
    imagen_casa.style.height = "7em";
    box_casa.style.position = "unset";
    imagen_casa.src = link_bot;
    //cambiando de pantalla
    inicio.style.display = "none";
    game.style.display = "flex";
    if (jugador != bot){
        if(bot == "tijeras"){
            console.log("Bot gana")
            win_lose.textContent = "Perdiste :c"
            score_number.textContent = score-1;
            score = score - 1;
        }
        else{
            console.log("Jugador gana")
            win_lose.textContent = "Ganaste!";
            score_number.textContent = score+2;
            score = score + 2;
        }
    }
    else{
        console.log("Empateee")
        win_lose.textContent = "Empateee";
    }
})

tijeras.addEventListener("click",()=>{
    jugador = "tijeras";
    rand = Math.floor((Math.random()*3)+1);
    bot = estados[rand - 1];
    link_bot = links[rand - 1];
    //Poniendo estilos
    //Jugador
    box_jugador.className = jugador;
    box_jugador.style.position = "unset";
    box_jugador.style.cursor = "unset";
    box_jugador.style.width = "10em";
    box_jugador.style.height = "10em";
    box_jugador.style.display = "flex";
    box_jugador.style.alignItems = "center";
    box_jugador.style.justifyContent = "center";
    imagen_jugador.style.width = "7em";
    imagen_jugador.style.height = "7em";
    imagen_jugador.src = links[2];
    //Bot
    box_casa.className = bot;
    box_casa.style.position = "unset";
    box_casa.style.cursor = "unset";
    box_casa.style.width = "10em";
    box_casa.style.height = "10em";
    box_casa.style.display = "flex";
    box_casa.style.alignItems = "center";
    box_casa.style.justifyContent = "center";
    imagen_casa.style.width = "7em";
    imagen_casa.style.height = "7em";
    imagen_casa.src = link_bot;
    //cambiando de pantalla
    inicio.style.display = "none";
    game.style.display = "flex";
    if (jugador != bot){
        if(bot == "piedra"){
            console.log("Bot gana")
            win_lose.textContent = "Perdiste :c"
            score_number.textContent = score-1;
            score = score - 1;
        }
        else{
            console.log("Jugador gana")
            win_lose.textContent = "Ganaste!";
            score_number.textContent = score+2;
            score = score + 2;
        }
    }
    else{
        console.log("Empateee")
        win_lose.textContent = "Empateee";
    }
})

b_play_again.addEventListener("click", ()=>{
    game.style.display = "none";
    inicio.style.display = "flex";
})

//animacion de espera:

 
// papel.addEventListener("click",()=>{
//     inicio.style.visibility="hidden";
//     // contador = contador+1;
//     // //papel.style.width="100px";
//     // papel.style.backgroundImage = "unset";
//     // papel.style.backgroundColor = "green";
//     // papel.style.boxShadow = "0 0 10px #2196F3";
//     // console.log(contador)
// })




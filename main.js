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

 play_again.style.display = "none";
 box_casa.style.boxShadow = "unset";
 imagen_casa.style.boxShadow = "unset";
 imagen_casa.style.backgroundColor = "hsl(229, 25%, 31%)";


function funcion1(bot,jugador,score, win_lose){
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
        
        //NO depende de que escojas
        imagen_casa.style.backgroundColor = "rgb(241, 240, 240)";
        imagen_casa.style.boxShadow = "0 0.4em 0.1em 0.05em inset hsl(230deg 8% 71%)";

        //actualizando score
        let j = 0;
        let b = 0;
        if (jugador == "piedra") j = 0;
        if (jugador == "papel") j = 1;
        if (jugador == "tijeras") j = 2;
        if (bot == "piedra") b = 0;
        if (bot == "papel") b = 1;
        if (bot == "tijeras") b = 2;
        const game = [
        ["E","P", "G"],
        ["G", "E", "P"],
        ["P", "G", "E"],
        ]
        let result = game[j][b]
        if (result != "E"){
            if(result =="G"){
                console.log("Jugador gana")
                win_lose.textContent = "Ganaste! :D";
                score = score + 1;
                return score;
            }
            if(result == "P"){
                console.log("Perdistee")
                win_lose.textContent = "Perdiste :c"
                score = score - 1;
                return score;
            }
        }
        else{
            console.log("Empateee")
            win_lose.textContent = "Empateee";
            return score;
        }
        
}
function funcion2(){
    play_again.style.display = "flex";
}

piedra.addEventListener("click",()=>{
    jugador = "piedra";
    rand = Math.floor((Math.random()*3)+1);
    bot = estados[rand - 1];
    link_bot = links[rand - 1];
    i = 0
    
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

    //bot elige
    imagen_casa.src = link_bot;
    let timerId1 = setTimeout(function(){
        score = funcion1(bot,jugador,score, win_lose);
        score_number.textContent = score;
    }, 1000);

    let timerId2 = setTimeout(function(){
        funcion2();
    }, 2000);

    //cambiar de pantalla
    inicio.style.display = "none";
    game.style.display = "flex";
    
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
    //bot elige
    imagen_casa.src = link_bot;
    let timerId1 = setTimeout(function(){
        score = funcion1(bot,jugador,score, win_lose);
        score_number.textContent = score;
    }, 1000);

    let timerId2 = setTimeout(function(){
        funcion2();
    }, 2000);
    //cambiando de pantalla
    inicio.style.display = "none";
    game.style.display = "flex";
    
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
    //bot elige
    imagen_casa.src = link_bot;
    let timerId1 = setTimeout(function(){
        score = funcion1(bot,jugador,score, win_lose);
        score_number.textContent = score;
    }, 1000);

    let timerId2 = setTimeout(function(){
        funcion2();
    }, 2000);
    //cambiando de pantalla
    inicio.style.display = "none";
    game.style.display = "flex";
})

b_play_again.addEventListener("click", ()=>{
    game.style.display = "none";
    inicio.style.display = "flex";

    play_again.style.display = "none";
    box_casa.style.boxShadow = "unset";
    imagen_casa.style.boxShadow = "unset";
    imagen_casa.style.backgroundColor = "hsl(229, 25%, 31%)";
    box_casa.className = "unset";
})





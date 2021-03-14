console.log("Main.js OKAY!");
const canvas = document.querySelector("#game");
const context = canvas.getContext('2d');
const pontos = document.querySelector('#pontos');
document.addEventListener('keydown', keyPush);
setInterval(game, 1000/10);

const velocidade = 1;
let x = y = 0;
let px = py = 10;
const tamanho = 20;
const quantidade = 20;
let appleX = appleY = 15;
let snake = [];
let tail = 5;


function game() {
    px += x;
    py += y;
    if(px < 0) {
        px = quantidade-1;
    }
    if(px > quantidade-1) {
        px = 0;
    }
    if(py < 0) {
        py = quantidade-1;
    }
    if(py > quantidade-1) {
        py = 0;
    }
    context.fillStyle= "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "red";
    context.fillRect(appleX*tamanho, appleY*tamanho, tamanho, tamanho);

    context.fillStyle = "green";
    for(let i = 0; i < snake.length; i++) {
        context.fillRect(snake[i].x*tamanho, snake[i].y*tamanho, tamanho, tamanho);
        if(snake[i].x == px && snake[i].y == py) {
            x = 0;
            y = 0;
            tail = 5;
            pontos.innerText = 0;
        }
    }
    snake.push({x:px, y:py})
    while(snake.length > tail) {
        snake.shift();
    }
    if (appleX == px && appleY == py) {
        tail++;
        appleX = Math.floor(Math.random()*tamanho);
        appleY = Math.floor(Math.random()*tamanho);
        attPontos(pontos, 1);
    }
}
function keyPush(event) {
    console.log(event.keyCode);
    switch (event.keyCode) {
        case 37: // esquerda
            if(y != 0) {
                x = -velocidade;
                y = 0;
            }
        
        break;
        case 38: // cima
        if(x != 0) {
            x = 0;
            y = -velocidade;
        }
        break;
        case 39: // direita
        if(y != 0) {
            x = velocidade;
            y = 0;
        }
        break;
        case 40: // baixo
        if(x != 0) {
            x = 0;
            y = velocidade;

        }
        break;
        case 13: {
            x = -velocidade;
            y = 0;
        }
    }
}
function attPontos(pontuacao, ponto) {
    pontuacao.innerText = parseInt(pontuacao.innerText)+ponto;
}
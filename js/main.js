const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let largura = canvas.clientWidth;
let altura = canvas.clientHeight;

let x = largura / 2;
let y = altura / 2;

let centro = {
    x: largura / 2,
    y: altura / 2
};

let translate = {
    x: centro.x,
    y: centro.y
}

let scale = 1.0;

const cores = ["#EFB605", "#E58903", "#E01A25", "#C20049", "#991C71", "#66489F", "#2074A0", "#10A66E", "#7EB852"];

const PADDING = 32;

function draw() {

    let ladoA = parseFloat(document.querySelector("#lado-a-input").value);
    let ladoB = parseFloat(document.querySelector("#lado-b-input").value);
    let ladoC = parseFloat(document.querySelector("#lado-c-input").value);

    let corLinha = document.querySelector("#color-input").value;

    clearCanvas();

    let triangulo = new Triangulo(x, y, ladoA, ladoB, ladoC);

    if (canvas.getContext) {

        ctx.strokeStyle = "#FFFFFF";
        ctx.fillStyle = corLinha;
        ctx.lineWidth = 8;

        ctx.beginPath();

        ctx.moveTo(triangulo.pontoA.x, canvas.clientHeight - triangulo.pontoA.y);
        ctx.lineTo(triangulo.pontoB.x, canvas.clientHeight - triangulo.pontoB.y);
        ctx.lineTo(triangulo.pontoC.x, canvas.clientHeight - triangulo.pontoC.y);

        ctx.closePath();

        ctx.stroke();
        ctx.fill();


        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 4;
        ctx.font = '24px Arial';
        ctx.lineJoin = 'round';

        ctx.strokeText(triangulo.tipoTriangulo, PADDING, altura - PADDING);
        
        ctx.fillStyle = "#000000";
        ctx.fillText(triangulo.tipoTriangulo, PADDING, altura - PADDING);

    }
}


function drawCentroid() {
    ctx.beginPath();
    ctx.moveTo(0,  0);
    ctx.arc(triangulo.centroide.x, triangulo.centroide.y, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

function updateResolution() {

    largura = canvas.clientWidth;
    altura = canvas.clientHeight;

    console.log(canvas.width);

    centro.x = largura / 2;
    centro.y = altura / 2;



    canvas.width = largura;
    canvas.height = altura;
}

function clearCanvas() {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    ctx.closePath()
}


window.addEventListener("load", () => {

    clearCanvas();
    updateResolution();

    let min = Math.ceil(0);
    let max = Math.floor(cores.length);
    let i = Math.floor(Math.random() * (max - min)) + min;
    
    document.querySelector("#color-input").value = cores[i];

});

window.addEventListener("resize", () => {

    updateResolution();
    
    x = largura / 2;
    y = altura / 2;

    draw();
});

document.getElementById("adicionar-triangulo-btn").addEventListener("click", () => { draw(); });
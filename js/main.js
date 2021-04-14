const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;


window.addEventListener("load", () => {

    ctx.beginPath();
    ctx.clearRect(x, y, canvas.clientWidth, canvas.clientHeight);

});


function draw() {

    let ladoA = parseFloat(document.querySelector("#lado-a-input").value);
    let ladoB = parseFloat(document.querySelector("#lado-b-input").value);
    let ladoC = parseFloat(document.querySelector("#lado-c-input").value);

    let corLinha = document.querySelector("#color-input").value;

    let largura = canvas.clientWidth / 2;
    let altura = canvas.clientHeight / 2;

    let x = largura / 2;
    let y = altura / 2;

    let triangulo = new Triangulo(x, y, ladoA, ladoB, ladoC);

    if (canvas.getContext) {

        ctx.strokeStyle = corLinha;
        ctx.fillStyle = corLinha;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.clearRect(x, y, canvas.clientWidth, canvas.clientHeight);
        
        ctx.moveTo(triangulo.pontoA.x, triangulo.pontoA.y);
        ctx.lineTo(triangulo.pontoB.x, triangulo.pontoB.y);
        ctx.lineTo(triangulo.pontoC.x, triangulo.pontoC.y);
        ctx.closePath();

        ctx.stroke();
        ctx.fill();
    }


}
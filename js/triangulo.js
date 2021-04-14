class Triangulo {


    constructor(x, y, comprimentoA, comprimentoB, comprimentoC) {

        this.x = x;
        this.y = y;

        this.distanciaAB = comprimentoA;
        this.distanciaBC = comprimentoB;
        this.distanciaCA = comprimentoC;

        this.pontoA = {
            x: this.x,
            y: this.y
        }

        this.pontoB = {
            x: this.x + this.distanciaAB,
            y: this.y
        }

        let xPontoC = ((Math.pow(this.distanciaAB, 2) + Math.pow(this.distanciaCA, 2)) - (Math.pow(this.distanciaBC, 2))) / (2 * this.distanciaAB);
        let yPontoC = Math.sqrt((this.distanciaCA * this.distanciaCA) - (xPontoC * xPontoC));

        this.pontoC = {
            x: this.x + xPontoC,
            y: this.y + yPontoC
        }

        this.centroide = Triangulo.calculaCentroide(this.pontoA, this.pontoB, this.pontoC);
    }

    get X() { return this.x; }
    set X(value) {
        this.x = value;
    }

    get Y() { return this.y; }
    set Y(value) {
        this.y = value;
    }

    get comprimentoLadoA() { return this.ladoA; }
    set comprimentoLadoA(value) { 
        return this.ladoA = value; 
    }

    get comprimentoLadoB() { return this.ladoB; }

    set comprimentoLadoB(value) { 
        return this.ladoB = value; 
    }

    get comprimentoLadoC() { return this.ladoC; }
    set comprimentoLadoC(value) { 
        return this.ladoC = value; 
    }

    static calculaCentroide(pontoA, pontoB, pontoC) {

        let centroideX = (pontoA.x + pontoB.x + pontoC.x) / 3;
        let centroideY = (pontoA.y + pontoB.y + pontoC.y) / 3;

        return {
            x: centroideX,
            y: centroideY
        }
    }


    static determinaTipoTriangulo(a, b, c) {

    }

}


Triangulo.TIPO_TRIANGULO = ["Escaleno", "Inexistente", "Isóceles", "Equilátero"]

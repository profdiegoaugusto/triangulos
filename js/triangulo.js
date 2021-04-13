class Triangulo {


    constructor(x, y, comprimentoA, comprimentoB, comprimentoC) {

        this.x = x;
        this.y = y;

        this.ladoA = comprimentoA;
        this.ladoB = comprimentoB;
        this.ladoC = comprimentoC;

        this.pontoA = {
            x: 0,
            y: 0
        }

        this.pontoB = {
            x: 0,
            y: 0
        }

        this.pontoC = {
            x: 0,
            y: 0
        }

        this.centroide = Triangulo.calculaCentroid(this.pontoA, this.pontoB, this.pontoC);
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
            x: x,
            y: y
        }
    }


    static determinaTipoTriangulo(a, b, c) {

    }

}


Triangulo.TIPO_TRIANGULO = ["Escaleno", "Inexistente", "Isóceles", "Equilátero"]

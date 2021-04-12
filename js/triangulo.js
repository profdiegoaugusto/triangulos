class Triangulo {


    constructor(x, y, comprimentoA, comprimentoB, comprimentoC) {

        this.x = x;
        this.y = y;

        this.ladoA = comprimentoA;
        this.ladoB = comprimentoB;
        this.ladoC = comprimentoC;
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


    determinaTipoTriangulo(a, b, c) {

    }

}
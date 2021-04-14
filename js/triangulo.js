class Triangulo {


    constructor(x, y, comprimentoA, comprimentoB, comprimentoC) {

        this.x = x;
        this.y = y;

        this.distanciaAB = comprimentoA;
        this.distanciaBC = comprimentoB;
        this.distanciaAC = comprimentoC;

        
        this.pontoA = {
            x: this.x,
            y: this.y
        }

        this.pontoB = {
            x: this.x + this.distanciaAB,
            y: this.y
        }

        let xPontoC = ((Math.pow(this.distanciaAB, 2) + Math.pow(this.distanciaAC, 2)) - (Math.pow(this.distanciaBC, 2))) / (2 * this.distanciaAB);
        let yPontoC = Math.sqrt((this.distanciaAC * this.distanciaAC) - (xPontoC * xPontoC));

        this.pontoC = {
            x: this.x + xPontoC,
            y: this.y + yPontoC
        }

        this.centroide = Triangulo.calculaCentroide(this.pontoA, this.pontoB, this.pontoC);
        this.tipo = Triangulo.determinaTipoTriangulo(this.distanciaAB, this.distanciaBC, this.distanciaAC);

        // Atualiza pontos (x, y) para centralizar triângulo na tela.
        let deslocamentoX = this.centroide.x - this.x;
        let deslocamentoY = this.centroide.y - this.y;

        this.pontoA.x -= deslocamentoX;
        this.pontoA.y -= deslocamentoY;

        this.pontoB.x -= deslocamentoX;
        this.pontoB.y -= deslocamentoY;
        
        this.pontoC.x -= deslocamentoX;
        this.pontoC.y -= deslocamentoY;

        // Atualiza centróide com os novos valores dos pontos (x, y) do triângulo
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

    get tipoTriangulo() { return this.tipo; }

    static calculaCentroide(pontoA, pontoB, pontoC) {

        let centroideX = (pontoA.x + pontoB.x + pontoC.x) / 3;
        let centroideY = (pontoA.y + pontoB.y + pontoC.y) / 3;

        return {
            x: centroideX,
            y: centroideY
        }
    }


    static determinaTipoTriangulo(a, b, c) {

        let tipo = this.TIPO_TRIANGULO.escaleno;

        if (a <= 0 || b <= 0 || c <= 0)
            tipo = this.TIPO_TRIANGULO.inexistente;
        else if (!((a + b > c) && (a + c > b) && (b + c > a)))
            tipo = this.TIPO_TRIANGULO.inexistente;
        else if (a == b) {

            tipo = this.TIPO_TRIANGULO.isoceles;

            if (b == c)
                tipo = this.TIPO_TRIANGULO.equilatero;
        } else if (b == c || a == c) 
            tipo = this.TIPO_TRIANGULO.isoceles;

        return tipo;
    }

}

Triangulo.TIPO_TRIANGULO = { 
    escaleno: "Escaleno", 
    inexistente: "Inexistente", 
    isoceles: "Isóceles", 
    equilatero: "Equilátero"
};

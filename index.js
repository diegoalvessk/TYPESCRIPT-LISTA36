var Torre = /** @class */ (function () {
    function Torre(nome, ataque, alcance, nivel, valor) {
        this.Nome = nome;
        this.Ataque = ataque;
        this.Alcance = alcance;
        this.Nivel = nivel;
        this.Valor = valor;
    }
    Torre.prototype.Atacar = function () {
        return this.Ataque;
    };
    return Torre;
}());
var Inimigo = /** @class */ (function () {
    function Inimigo(nome, vida) {
        this.Nome = nome;
        this.Vida = vida;
    }
    return Inimigo;
}());
var arrayTorres = [];
function AdicionarTorre(torre1, posicaoTorre) {
    arrayTorres[posicaoTorre] = torre1;
}
function ComecarPartida() {
    var vidaJogador = 2;
    var rodada = 0;
    var indexInimigo = 0;
    var inimigo = [];
    var posicaoInimigo = [];
    var torre1 = new Torre("Digas", 20, 2, 7, 5);
    var posicaoTorre = 4;
    var posicaoAtaque = 0;
    var cont = 0;
    AdicionarTorre(torre1, posicaoTorre);
    while (vidaJogador > 0) {
        if (indexInimigo < 5) {
            inimigo[indexInimigo] = new Inimigo("Diego Osvaldo Cruz", 20);
            posicaoInimigo[indexInimigo] = 9;
        }
        if (posicaoTorre + torre1.Alcance >= posicaoInimigo[posicaoAtaque] && posicaoTorre - torre1.Alcance <= posicaoInimigo[posicaoAtaque]) {
            inimigo[posicaoAtaque].Vida = inimigo[posicaoAtaque].Vida - torre1.Ataque;
            if (inimigo[posicaoAtaque].Vida <= 0) {
                alert("Inimigo destruido!");
                posicaoAtaque++;
                cont++;
            }
        }
        for (var index = 0; index < posicaoInimigo.length; index++) {
            posicaoInimigo[index] = posicaoInimigo[index] - 1;
        }
        if (posicaoInimigo[posicaoAtaque] == 0) {
            posicaoAtaque++;
            vidaJogador = vidaJogador - 1;
        }
        if (vidaJogador == 0) {
            alert("Lose!");
        }
        indexInimigo++;
        console.log(vidaJogador);
        if (cont > 4) {
            alert("Ganhou o game!");
            vidaJogador = 0;
        }
    }
}

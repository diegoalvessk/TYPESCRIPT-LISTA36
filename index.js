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
var arrayInimigos = [];
function AdicionarTorre(torre1, posicaoTorre) {
    arrayTorres[posicaoTorre] = torre1;
}
function ComecarPartida() {
    var vidaJogador = 10;
    var rodada = 0;
    var inimigo;
    var posicaoInimigo = 9;
    var torre1 = new Torre("Digas", 20, 2, 7, 5);
    var posicaoTorre = 4;
    AdicionarTorre(torre1, posicaoTorre);
    while (vidaJogador > 0) {
        if (rodada == 0 || rodada % 9 == 0) {
            inimigo = new Inimigo("Diego Osvaldo Cruz", 150);
            arrayInimigos[9] = inimigo;
            posicaoInimigo = 9;
        }
        if (posicaoTorre + torre1.Alcance >= posicaoInimigo && posicaoTorre - torre1.Alcance <= posicaoInimigo) {
            if (inimigo.Vida <= 0) {
                alert("Inimigo destruido, você foi o ganhador!");
                vidaJogador = 0;
            }
            else {
                inimigo.Vida = inimigo.Vida - torre1.Ataque;
            }
        }
        if (posicaoInimigo == 0) {
            vidaJogador--;
        }
        if (vidaJogador == 0) {
            alert("Lose!");
        }
        posicaoInimigo++;
    }
}

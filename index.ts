class Torre{
    Nome: string
    Ataque: number
    Alcance: number
    Nivel: number
    Valor: number

    constructor(nome: string, ataque: number, alcance: number, nivel: number, valor: number){
        this.Nome = nome
        this.Ataque = ataque
        this.Alcance = alcance
        this.Nivel = nivel
        this.Valor = valor
    }

    Atacar() : number{
        return this.Ataque
    }
}

class Inimigo{
    Nome: string
    Vida: number

    constructor(nome: string, vida: number){
        this.Nome = nome
        this.Vida = vida
    }
}

let arrayTorres : Torre[] = []
let arrayInimigos : Inimigo[] = []

function AdicionarTorre(torre1 : Torre, posicaoTorre: number): void{
    arrayTorres[posicaoTorre] = torre1
}

function ComecarPartida(): void{
    let vidaJogador: number = 10
    let rodada = 0
    let inimigo : Inimigo 
    let posicaoInimigo: number = 9
    let torre1 = new Torre("Digas" , 20, 2, 7, 5)
    let posicaoTorre =  4
    AdicionarTorre(torre1, posicaoTorre)

    while(vidaJogador>0){

        if(rodada == 0 || rodada % 9 == 0){
            inimigo = new Inimigo("Diego Osvaldo Cruz", 150)
            arrayInimigos[9] = inimigo
            posicaoInimigo = 9
        }

        if(posicaoTorre + torre1.Alcance >= posicaoInimigo && posicaoTorre - torre1.Alcance <= posicaoInimigo){
            if(inimigo.Vida <= 0){
                alert("Inimigo destruido, você foi o ganhador!")
                vidaJogador = 0
            }else{
                inimigo.Vida = inimigo.Vida - torre1.Ataque

            }
        }

        if(posicaoInimigo == 0){
            vidaJogador--
        }

        if(vidaJogador == 0){
            alert("Lose!")
        }

        posicaoInimigo++
    }




}
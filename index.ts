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

function AdicionarTorre(torre1 : Torre, posicaoTorre: number): void{
    arrayTorres[posicaoTorre] = torre1
}

function ComecarPartida(): void{
    let vidaJogador: number = 2
    let rodada = 0
    let indexInimigo = 0
    let inimigo : Inimigo[] = [] 
    let posicaoInimigo: number[] = []
    let torre1 = new Torre("Digas" , 20, 2, 7, 5)
    let posicaoTorre =  4
    let posicaoAtaque = 0
    let cont = 0
    AdicionarTorre(torre1, posicaoTorre)

    while(vidaJogador>0){

        if(indexInimigo<5){
            inimigo[indexInimigo] = new Inimigo("Diego Osvaldo Cruz", 20)
            posicaoInimigo[indexInimigo] = 9
        }

        if(posicaoTorre + torre1.Alcance >= posicaoInimigo[posicaoAtaque] && posicaoTorre - torre1.Alcance <= posicaoInimigo[posicaoAtaque]){
           
            inimigo[posicaoAtaque].Vida = inimigo[posicaoAtaque].Vida - torre1.Ataque

            if(inimigo[posicaoAtaque].Vida <= 0){
                    alert("Inimigo destruido!")
                    posicaoAtaque++
                    cont++
            }
        }

        for (let index = 0; index < posicaoInimigo.length; index++) {
            posicaoInimigo[index] =  posicaoInimigo[index] - 1
        }

        if(posicaoInimigo[posicaoAtaque] == 0){
            posicaoAtaque++
            vidaJogador = vidaJogador - 1
        }

        if(vidaJogador == 0){
            alert("Lose!")
        }

        indexInimigo++
        console.log(vidaJogador)
        
        if(cont>4){
            alert("Ganhou o game!")
            vidaJogador = 0
        }
    }




}
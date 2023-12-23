// # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"


function classificarRank(saldo) {
    let rank = null

    if (saldo <= 10) {
        rank = "Ferro"
    } else if (saldo > 10 && saldo <= 20) {
        rank = "Bronze"
    } else if (saldo > 20 && saldo <= 50) {
        rank = "Prata"
    } else if (saldo > 50 && saldo <= 80) {
        rank = "Ouro"
    } else if (saldo > 80 && saldo <= 90) {
        rank = "Diamante"
    } else if (saldo > 90 && saldo <= 100) {
        rank = "Lendário"
    } else {
        rank = "Imortal"
    }

    return rank
}

function main(vitoria, derrota) {
    const saldo = vitoria - derrota
    let rank = classificarRank(saldo)

    console.log(`O Herói tem saldo de ${saldo} e está no nível de ${rank}`)
}


const vitoria = 73
const derrota = 12 

main(vitoria, derrota)
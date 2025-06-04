alert("Boas vindas ao jogo do número secreto!");  

let limiteNumeroAleatorio = 100;
let numeroSecreto = parseInt(Math.random() * limiteNumeroAleatorio + 1); // Gera um número aleatório entre 0 e 10
console.log(numeroSecreto); // Exibe o número secreto no console para fins de depuração
let chute;
let tentativas = 1; // Inicializa o contador de tentativa

while(chute != numeroSecreto){
    chute = parseInt(prompt(`Digite um número entre 0 e ${limiteNumeroAleatorio}:`)); // Solicita ao usuário que digite um número
    if(numeroSecreto == chute){
        break;
    }
    else{
        if(numeroSecreto < chute){
            alert(`O número secreto é menor que ${chute}. Tente novamente!`); // Mensagem se o chute for maior
        }
        else{
            alert(`O número secreto é maior que ${chute}. Tente novamente!`); // Mensagem se o chute for menor
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; // Define a palavra correta para o plural
alert(`Isso aí! Você acertou o número secreto, que era ${numeroSecreto}! Com ${tentativas} ${palavraTentativa}!`) // Mensagem de acerto



let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagem);
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é MENOR que o chute');
        }else{
            exibirTextoNaTela('p', 'O número secreto é MAIOR que o chute');
        }
        tentativas++;
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}
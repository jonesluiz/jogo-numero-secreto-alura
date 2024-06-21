//Nesse curso iremos manipular o HTML através do Java

/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto.';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um Número entre 1 e 10';*/

let listaDeNumerosSorteados = []; //nesse momento estamos criando uma lista vazia, com os []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); //O rate representa a velocidade.
}

function exibirMensagemInicial(){

exibirTextoNaTela('h1', 'Jogo do Número Secreto.');
exibirTextoNaTela('p', `Escolha um Número entre 1 e ${numeroLimite}`);
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'ACERTOU!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++
        limparCampo();
    }

}

function gerarNumeroAleatorio() {
    // código antes da lista - return parseInt(Math.random() * 10 +1);

    //agora iremos implementar uma lista que mostrará quais os números que já saíram

    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    //se o número já estiver na lista, gerar um novo número
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(); //aqui, a função includes faz a verificação se o numeroEscolhido já foi gerado e se já foi, será gerado um outro número diferente.
        
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido); //com o push, é adicionado o numero escolhido a lista.
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
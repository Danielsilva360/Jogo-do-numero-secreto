let numeroSorteado = [];
let numeroLimite = 10;
let tentativas = 1;
let numeroAleatorio = gerarNumeroAleatorio();


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag,texto);
    campo.innerHTML=texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1','jogo do numero secreto');
    exibirTextoNaTela('p','escolha um numero de 1 a 10');
}
mensagemInicial();

function verificarChute(){
      let chute = document.querySelector('input').value;
      if(chute == numeroAleatorio){
         let palavraTentativas = tentativas > 1 ? 'tentativas':' tentativa';
       let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativas} !`;

        exibirTextoNaTela('h1','Parabens voce acertou!!!');
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
     }else{
        if(chute > numeroAleatorio){
            exibirTextoNaTela('p',' o numero e menor');
        }else {
            exibirTextoNaTela('p','o numero e maior');
         }
         tentativas++;
         limparCampo();
       }  
     
       
     }

    
function gerarNumeroAleatorio() {

     let numeroEscolhido = parseInt(Math.random()*numeroLimite + 1);
     let quantidadeNumerosLista = numeroSorteado.length;
     if(quantidadeNumerosLista == numeroLimite ){
        numeroSorteado = [];
     }

     if(numeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
     }else{
        numeroSorteado.push(numeroEscolhido);
        return numeroEscolhido;
     }

}

function limparCampo(){
    chute=document.querySelector('input');
    chute.value ='';
}
function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
     tentativas = 1;
    mensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled','true');

}
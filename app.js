alert('Boas Vindas ao jogo do Número Secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// enquanto chute não = número seqcreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    // se chute
    if (numeroSecreto == chute) {
        break;
        // console.log(`Isso aí ! Você acertou. O número secreto é ${numeroSecreto}`);
    
        // alert(`Vôce acertou !!! O número secreto é ${numeroSecreto}`);
    
        // alert('Vôce acertou em ' + tentativas + ' tentativa(s) !!! O número secreto é ' + numeroSecreto);
    } else {
          if (numeroSecreto > chute) {
            alert(`O número secreto é MAIOR que ${chute}`);
        } else {
            alert(`O número secreto é MENOR que ${chute}`);
        }
    //tentativa = tentativa + 1;
    tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : "tentativa";
alert(`Vôce acertou em  ${tentativas} ${palavraTentativa} !!! O número secreto é ${numeroSecreto}`);

// if (tentativas == 1) {
//     alert(`Vôce acertou em  ${tentativas} tentativa !!! O número secreto é ${numeroSecreto}`);
// } else {
//     alert(`Vôce acertou em  ${tentativas} tentativas !!! O número secreto é ${numeroSecreto}`);
// }


// } else if (chute < numeroSecreto) {
//     alert('Erroooooooooooooooooou !! O número secreto é MAIOR');
// }
//     else {
//         alert('Erroooooooooooooooooou !! O número secreto é MENOR');
//     }



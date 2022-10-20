const {gets, print} = require('./aula6');

let maiorValor = 0;

for(let i = 0; i < 5; i++){
const numSorteado = gets();
if (numSorteado > maiorValor) {
    maiorValor = numSorteado;
    }
}

print(maiorValor);
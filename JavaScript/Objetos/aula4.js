
class carro  {
    marca;
    cor;
    media;

    constructor (marca, cor, media) {
        this.marca = marca;
        this.cor = cor;
        this.media = media;
    }

    calcularGasto (dist, precoComb) {
    
        return dist * this.media * precoComb;
    }


}
 
const civic = new carro ('Honda', 'preto', 1 / 8);
console.log (civic.calcularGasto (100, 5));


const corolla = new carro ('Toyota', 'branco', 1 / 9);
console.log (corolla.calcularGasto (100, 5));

const uno = new carro ('Fiat', 'azul', 1 / 11);
console.log (uno.calcularGasto (100, 5));

class Ejemplo{
    valor
    constructor(valor){
        this.valor = valor;
    }
}

let a = new Ejemplo(10);
let b = a;
let c = b;

console.log("Objeto de a: " + a.valor);
console.log("Objeto de b: " + b.valor);

b.valor = 50;
console.log("Cambio objeto b");
console.log("Objeto de a: " + a.valor);
console.log("Objeto de b: " + b.valor);
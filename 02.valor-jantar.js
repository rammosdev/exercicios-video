// EXERCÍCIO 2
// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO:
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00

let valorJantar = 80;
let taxaGarcom = 20;

function Total(valorJantar, taxaGarcom) {
  let valorDaTaxa = ((taxaGarcom / 100) * valorJantar)
  let total = valorJantar + valorDaTaxa
  return total;
}
console.log("O valor do seu jantar é: R$" + valorJantar + ",00" + " com a taxa do garçom de " + ((taxaGarcom / 100) * valorJantar))
console.log("O valor total é: R$" + Total(valorJantar, taxaGarcom) + ",00")

//console.log(`O valor do seu jantar é: R$${valorJantar},00 com a taxa do garçom de ${taxaGarcom}%`)
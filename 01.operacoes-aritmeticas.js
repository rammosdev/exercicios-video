let num1 = 2
let num2 = 4

//#region Soma
function Soma(num1, num2) {
  let soma = num1 + num2

  return soma
}
//#endregion

function Subtração(num1, num2) {
  let subtracao = num1 - num2

  return subtracao
}

function Divisão(num1, num2) {
  let divisao = num1 / num2

  return divisao
}

function Multiplicação(num1, num2) {
  let multiplicacao = num1 * num2

  return multiplicacao
}
console.log("Sua soma é: " + (Soma(num1, num2)))
console.log("Sua subtração é: " + (Subtração(num1, num2)))
console.log("Sua divisão é: " + (Divisão(num1, num2)))
console.log("Sua multiplicação é: " + (Multiplicação(num1, num2)))
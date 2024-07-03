const prompt = require('prompt-sync')({sigint: true})

console.log('Bem vindo a calculadora!')
 
let resultado = []

let x = parseFloat( prompt('Qual o primeiro número?'))
let op = prompt('Qual a operação?')
let y = parseFloat(prompt('Qual o segundo número?'))

calculadora(x, op, y)

function calculadora(x, op, y) {
    switch(op) {
        case '+':
            resultado = x + y
            break
        case '-':
            resultado = x - y
            break
        case '*':
            resultado =  x * y
            break
        case '/':
            if(x == 0 || y == 0){
                console.log('Opção inválida, tente novamente!')
                calculadora()
            } else{
                resulatdo = x / y
            }
            break
        case '%':
            resultado = (x * y) / 100
            break
        default:
            console.log('Opção inválida, tente novamente!')
            calculadora()
            break
    }

    console.log(`A resposta é: ${resultado}`)
}
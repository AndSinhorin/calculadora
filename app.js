const prompt = require('prompt-sync')({sigint: true})

console.log('Bem vindo a calculadora!')
 
let resultado = []

let x = parseFloat( prompt('Digite o primeiro número? '))
let op = prompt('Operação desejada? ')
let y = parseFloat(prompt('Digite o segundo número? '))

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
                resultado = x / y
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

    console.log(`Resultado: ${x} ${op} ${y} = ${resultado}`)
}
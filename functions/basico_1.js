console.log('teste')

//Declaração de Variável
let a = 4
console.log(a)

//Function Declaration
function bomDia(){
    console.log('Bom dia!')
}

bomDia()

//Function Expression
const boaTarde = function () {
    console.log('Boa Tarde!')
}

let x = boaTarde() //undefined
console.log(x)

function somar(a, b = 0) {
    return a + b
}

let resultado = somar(3, 4)
console.log(resultado)

resultado = somar(3, 5, 6, 7, 8)
console.log(resultado)

resultado = somar(3)
console.log(resultado)
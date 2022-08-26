//1) passar uma function como parametro para outra function
function bomDia(){
    console.log('Bom dia!')
}

const boaTarde = function () {
    console.log('Boa tarde!')
}


function executarQualquerCoisa(fn){
    if (typeof fn === 'function') {
        fn()
    }else{
        console.log('nao é func')
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

//2) Retornar uma function a partir de uma outra function
function potencia(base){
    return function(expo) {
        return Math.pow(base, expo)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

console.log(potencia(2)(3))

const resultadoPot = potencia(3)(4)
console.log(resultadoPot)

//exercicio 01
function somar(a){
    return function (b){
        return function (c) {
            return a + b + c
        }
    }
}

const resultSomar = somar(20)(30)(100)
console.log(resultSomar)

const resultSomarAB = somar(20)(30)
console.log(resultSomarAB(15))

console.log(somar(3)(6)(9))

//exercicio 02
function soma02(a,b){
    return a+b
}

function mult02(a,b){
    return a * b
}

function div02(a,b){
    return a / b
}

function calcular(a){
    return function (b){
        return function (fn){
            return fn(a, b)
        }
    }
}

const resultCalc = calcular(3)(3)(mult02)
console.log(resultCalc)

console.log(calcular(12)(5)(soma02))
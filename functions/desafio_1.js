
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
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

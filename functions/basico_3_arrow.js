//arrow function
() => console.log('Feliz Natal') //função anonima nao tem como ser chamada

const felizNatal = () => console.log('Feliz Natal')
felizNatal() //se uma variavel recebe uma função anonima dai voce consegue chamar a função pela variavel

const saudacao = (nome) => "Fala " + nome + ", blz!?!" //unica expressão retorna direto e nao pode usar a palavra return

const saudacao2 = (nome) => {
    return "Fala " + nome + ", blz!?!"
} //usa a palavra Return pois existe um CORPO{} que permite mais de uma expressão

console.log(saudacao('Maria')) //chamada da funçao passando o parametro nome...

const saudacao3 = nome => "Fala " + nome + ", topzera?!" //quando tem apenas um argumento, nao precisa ()
console.log(saudacao3('Pedro'))

const saudacao4 = nome => `Fala ${nome}, belezzzzzaa?!` //backticks do ingles permite a interpolação
console.log(saudacao4('Jão'))

//Ou voce usa a palavra function ou vc usa a setinha =>
//const somar = function(array){ 
const somar = numeros => {
    let total = 0
    for (let n of numeros) { // use o I IN var  para objetos e i OF var para arrays
        total += n
    }
    return total
} // exemplo de IN or OF no FOR: https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements

console.log(somar([1,2,3,4,5,6,7,8,9,10]))

//nesse argumento ...numeros esta usando o operador REST(...)
const somar2 = (...numeros) => { 
    //console.log(Array.isArray(numeros))
    //console.log(typeof(numeros))
    let total = 0
    for (let n of numeros) { 
        total += n
    }
    return total
} 
//para somar2, nao precisa passar o array, pode passar so os parametros
console.log(somar2(1,2,3)) 
console.log(somar2(1,2,3,4,5,6)) 
console.log(somar2(1,2,3,4,5,6,7,8,9,10)) 


//Função dentro de outra função - TODAS as funções abaixo é a mesma em várias formas diferentes
function potencia(base){
    return function(expo) {
        return Math.pow(base, expo)
    }
}

//transformou a função em arrow function
const potencia = (base) => {
    return function(expo) {
        return Math.pow(base, expo)
    }
}

//de function para arrow function nas funções internas (expo)
const potencia = (base) => {
    return (expo) => {
        return Math.pow(base, expo)
    }
}

//sem parenteses num unico argumento
const potencia = base => {
    return expo => {
        return Math.pow(base, expo)
    }
}

//sem o corpo
const potencia = base => 
    expo => {
        return Math.pow(base, expo)
    }

    // sem returns
const potencia = base => 
    expo => Math.pow(base, expo)

//toda a função de forma resumida com Arrow Functions
const potencia = base => expo => Math.pow(base, expo)

//THIS
Array.prototype.ultimo = function() {
    console.log(this[this.length -1])
}
//o THIS so funciona em função tradicional.. em ArrowFunction nao
Array.prototype.primeiro = () => {
    console.log(this[0])
}

const numer = [1,2,3,500]
numer.ultimo()
numer.primeiro() //undefined
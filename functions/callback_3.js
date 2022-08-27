
const nums = [1,2,3,4,5,]
const dobro = n => n*2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

//MAP() #3
const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20}
]

const getNome1 = item => item.nome
console.log(carrinho.map(function(value){
    return getNome1(value)
}))
//resumindo a função de cima, pois nao tem necessiade de passar os 3 parametros do Map(fn, index, array)
console.log(carrinho.map(getNome1))

const getTotal1 = item => item.qtde * item.preco
const totais1 = carrinho.map(getTotal1)
console.log(totais1)

//Criando seu map()
Array.prototype.meuMap = function(fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i ++) {
        //const resultado = fn(this[i], i, this)
        //pega a função de cima e joga direto, sem uma constante receber      
        novoArray.push(fn(this[i], i, this))  
    }
    return novoArray
}

const getNome = item => item.nome
console.log(carrinho.meuMap(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.meuMap(getTotal)
console.log(totais)
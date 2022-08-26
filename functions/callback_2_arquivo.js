const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(_, conteudo) { //quando vc nao usa um parametro, é comum usar o underline (_) no parametro 
    console.log(conteudo.toString())
}

// no javascript vc pode ate suprimir algum parametro, mas nao pode trocar a ordem solicitada.. 
// por exemplo a {} esta vazia, eu posso passar ela assim ou simplesmente deletar esse parametro, que dará certo
console.log('Inicio...')
fs.readFile(caminho, {}, exibirConteudo)
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo)=> console.log(conteudo.toString()))
console.log('...Fim')
// no exemplo acima, o console Inicio e Fim executam antes do retorno dos dados do arquivo.

//no exemplo abaixo com o Sync, vai ficar esperando buscar os dados, pra depois dar o resultado no terminal
console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('...Fim Sync')
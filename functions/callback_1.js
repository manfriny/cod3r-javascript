
function exec(fn, a, b){
    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (x, y) => console.log(x - y)

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

/* 
ex: Passar uma função como parâmetro para uma função que vai ler o conteudo de um arquivo
e esse conteudo de um arquivo demora para ser lido
e quando ele conseguir ler, ele chama a função de volta, passando pra voce o conteudo do arquivo
*/

/* 
ex2: voce passa uma requisição para um servidor
há uma chamada HTTP
depois de um tempo, quando vier a resposta
uma callback é chamada
*/
const subtrair = (w, z) => w - z
const r = exec(subtrair, 50, 25)
console.log(r)

//exemplos diversos
const cb = () => console.log('Exec 1...')
setInterval(cb, 1000)


//pode ser feito em uma unica linha como abaixo.
setInterval(() => console.log('Exec 2...'), 1000)

//pode ser feito em uma unica linha como abaixo.
setInterval(function () {
    console.log('Exec 3...')
}, 1000)
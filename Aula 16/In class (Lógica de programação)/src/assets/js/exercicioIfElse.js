
var read = require('../../../../node_modules/readline-sync');

var nota1 = parseFloat(read.question("PRIMEIRA NOTA: "));
var nota2 = parseFloat(read.question("SEGUNDA NOTA: "));
var nota3 = parseFloat(read.question("TERCEIRA NOTA: "));
var nota4 = parseFloat(read.question("QUARTA NOTA: "));

var media = (nota1 + nota2 + nota3 + nota4) / 4 ;

console.log(`A sua média foi ${media}\n`)

if (media >= 7) {
    console.log(`APROVADO\n`)
}else {
    console.log(`REPROVADO\n`)

}
 
// Para casa recuperação entre 5 e 7

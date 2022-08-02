///// Conteúdo Aula
let numero = 10
let texto = `O número digitado foi ${numero}`
let nomeCompleto = `Cia latina de medicamentos`

///// SPREAD (usado apenas para arrays ou strings)
function test (parametro1, ...outroParametro){    //aqui o Spread entende que virão vários dados como parametros nessa função.
    return `Olá ${parametro1}, eu tenho ${outroParametro}`
}
console.log(test("Eduardo", ["cachorro", "coelho", "gato"]))


nome = "CLAMED" 
console.log(...nome) //// Spread separando as letras com espaço. C L A M E D





//// Exercício em aula - Slide 5
let nome = window.prompt("Digite um nome: ")
let sobrenome = window.prompt("Digite um sobrenome: ")
let idade = window.prompt("Digite uma idade: ")
alert (`Eu, ${nome} ${sobrenome}, possuo ${idade} anos e nasci em ${2022 - idade}.`)


//// Exercício 
function somarNumeros (...valores) { // Se usar o Spread no parametro, ele vai fazer um "array" com os dados. Caso contrario, teria que usar  no console.log (somaNumeros([12,34,56]))
    let somatorio = 0
    valores.map ((valor) => {
        somatorio += valor
    })
    return somatorio
}
consolog.log(somarNumeros(12,34,56,42))


/// Exercício Slide 8
const numeros = [1,32,45,2,765,311,89]
console.log (Math.max(...numeros))


//Exercício
const gato = {patas: 4, faz: 'miau'}
const cachorro = {patas: 4, faz: 'auau'}
const gato2 = {...gato, pelagem: 'branca'}

const animais = [...[gato,cachorro,gato2]]

console.log(animais);

/* const gato = { patas: 4, faz: 'miau' }
const cachorro = { patas: 4, faz: 'auau' }
const gato2 = {...gato, pelagem: 'branca'}
const animais = [{gato2}, {cachorro}];
console.log(...animais);
const animais2 = [{...gato2}, {...cachorro}];
console.log(...animais2);
const animais3 = [{gato2}, {cachorro}];
console.log(animais3);
const animais4 = [{...gato2}, {...cachorro}];
console.log(animais4); */
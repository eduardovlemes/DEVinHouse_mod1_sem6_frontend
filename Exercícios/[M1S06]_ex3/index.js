//Construa uma função que irá verificar se um valor passado pelo parâmetro é par. Construa as validações dentro de uma promise para que caso seja uma par retorne para o then a mensagem "Número validado é par”. Caso o valor seja impar, retorne para o catch a mensagem “Error: número informado é impar”.

const verificaSeONumeroEPar = (numero) => {
    if (numero % 2 == 0){
        return "O numero é par."
    } else {
        return "O numero é ímpar."
    }
}
/* console.log (verificaSeONumeroEPar(4)) */

const promise = new Promise((resolve, reject) => {
    const novoParOuImpar = verificaSeONumeroEPar (Number(window.prompt("Digite um número: ")))
    if (novoParOuImpar == "O numero é par.") {
      resolve("Número valido é PAR");
    } else {
      reject("ERROR: O número informado é ímpar.")
    }
  })
  promise.then ((retorno)=>{
    //console.log(retorno)
    div.innerHTML += retorno
  }).catch ((err) => {
    //console.error(err)
    div.innerHTML += err
  })
  
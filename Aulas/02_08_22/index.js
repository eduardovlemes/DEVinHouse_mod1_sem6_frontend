// Exemplo de assincronicidade no JS
call1 = () => {
    console.log("Olá")
    setTimeout(() => {
        console.log ("tudo bem?")
    }, 5000);   ///O código não espera executar esse código para fazer o próximo.
    console.log ("Sim, estou bem.")
}
call1 ()


// Promises - "são classes, e classes são objetos, logo promises são objetos."
const promise = new Promise((resolve, reject) => {
    let valor = 20;
    if (valor > 20) {
      resolve("sou maior que 20");
    } else {
      reject("sou menor que 20");
    }
  });
  promise.then ((retorno)=>{
    console.log(retorno)
  },
  (err) => {
    console.error(err)
  })


// Exemplo 2 supostamente do dia-a-dia
  const promessa = new Promise((resolve, reject) => {

    fetch('./file.json')
    .then((response) => {
      console.log(response)
      resolve (response.jsaon ())})
    .catch((erro) => {reject (erro)}) 
  })
  console.log(promessa)

  promessa.then ((resolve)=>{
    console.log(resolve)
  }).catch (
    (erro) =>{console.error (erro)}
  )




  // Exemplo de async e await - a ideia é que com esse elementos o JS espera a função ser validada para poder continuar a leitura do código, neste caso espera validar o login e senha para depois carregar a playlist do usuário.
  async function validar (username, password){
    setTimeout(() => {
      if (username == "clamed" && password == "1234"){
      return "sucesso"
    } else {
      return "não deu"
    }
    }, 5000);
  }

  function carregarPlaylist () {}

  async function login () {
    let username = "clamed", password = "1234"
    let validarResultado = await validar (username, password)
    console.log(validarResultado) 

    if (validarResultado == "sucesso") {
      console.log ("logado")
      carregarPlaylist()
    } else{
      console.log("usuario ou senha incorretos")
    }
  }
  
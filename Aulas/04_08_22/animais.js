// Vamos utilizar a api zoo Animal para fazer um mini relatório sobre animais. O fluxo da aplicação consiste em ao carregar a tela ele deve trazer a imagem, o nome, o peso mínimo e o habitat de um animal aleatório.
// Observações:
// A chamada GET deverá ser feita para a url https://zoo-animal-api.herokuapp.com/animals/rand 
// Para carregar a imagem obtenha a tag html img e no seu atributo src defina que ele será igual a propriedade image_link do objeto vindo do backend.
// O nome será a propriedade name, o peso mínimo será weight_max e o habitat é o habitat

let botao = document.querySelector('#botao')
let div = document.querySelector('#div')
let imagem = document.querySelector('#imagem')

botao.addEventListener('click', () => {
    div.innerHTML = ""
    const options = {
        method: "GET",
        header: {'contentType': 'application/json'},
    }
    fetch(`https://zoo-animal-api.herokuapp.com/animals/rand`, options)
    .then((response)=>{
        return response.json()
    }).then((response)=>{ 
        console.log(response)
        imagem.setAttribute("src", response.image_link)
        div.innerHTML += `<br>Animal: ${response.name}. <br>Pesa ≅ ${response.weight_max} lb. <br> Localizado em ${response.habitat}.`
    }).catch((err)=>{
        console.error(err)
    })
})
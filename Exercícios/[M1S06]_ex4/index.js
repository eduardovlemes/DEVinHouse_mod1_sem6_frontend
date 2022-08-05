/// XMLhtmlrequest
let botao = document.getElementById("botao")
let div = document.getElementById("div")
let imagem = document.getElementById("imagem")

botao.addEventListener("click",() => {
    const input = document.getElementById("input").value
    const OReq = new XMLHttpRequest()    
    OReq.onload = () => {
        console.log (`<br>Nome: ${OReq.response.name}`) 
        console.log (`<br>Altura: ${OReq.response.height}`) 
        console.log (`<br>Peso: ${OReq.response.weight}`)
        imagem.setAttribute("src", OReq.response.sprites.front_default)
    }    
    OReq.open("GET", `https://pokeapi.co/api/v2/pokemon/${input}`)
    OReq.responseType = "json"    
    OReq.send()
})
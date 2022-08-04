// API

const oReq = new XMLHttpRequest () // Primeiro criar a instância

oReq.onload = () => {
    console.log(oReq.response)
}

oReq.open ("GET", "https://pokeapi.co/api/v2/pokemon/charizard")
oReq.responseType = "json"

oReq.send()
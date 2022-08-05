/// XMLhtmlrequest
/* var botao = document.getElementById('btn')
var body = document.getElementById('body')

botao.addEventListener('click', () => {
    var input = document.getElementById('cep-entrada').value

    const OReq = new XMLHttpRequest()
    
    OReq.onload = () => {
        console.log(OReq.response)
        body.innerHTML += `<br><br>Bairro: ${OReq.response.bairro}`
        body.innerHTML += `<br>Logradouro: ${OReq.response.logradouro}`
        body.innerHTML += `<br>Localidade: ${OReq.response.localidade}`
    }
    
    OReq.open("GET", `https://viacep.com.br/ws/${input}/json/`)
    OReq.responseType = "json"
    
    OReq.send()
}); */


//fecht
var botao = document.getElementById('btn')
var body = document.getElementById('div')

botao.addEventListener('click', () => {
    var input = document.getElementById('input').value
    
    const options = {
        method: "GET",
        headers: {'content-type': 'application/json'},
    }
    fetch(`https://viacep.com.br/ws/${input}/json/`, options)
    .then((response) => {
        return response.json()
    }).then((response) => {
        body.innerHTML += `<br><br>Bairro: ${response.bairro}`
        body.innerHTML += `<br>Logradouro: ${response.logradouro}`
        body.innerHTML += `<br>Localidade: ${response.localidade}`
    }).catch((err) => {
        console.error (err)
    })       
})
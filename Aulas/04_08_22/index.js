var botao = document.getElementById('btn')
var body = document.getElementById('div')

botao.addEventListener('click', () => {
    var input = document.getElementById('input').value
    console.log(input)
    const OReq = new XMLHttpRequest()    
    OReq.onload = () => {        
        console.log(OReq.response);
        body.innerHTML += `<br><br>Bairro: ${OReq.response.bairro}`
        body.innerHTML += `<br>Logradouro: ${OReq.response.logradouro}`
        body.innerHTML += `<br>Localidade: ${OReq.response.localidade}`
    }    
    OReq.open("GET", `https://viacep.com.br/ws/${input}/json/`)
    OReq.responseType = "json"    
    OReq.send()
});

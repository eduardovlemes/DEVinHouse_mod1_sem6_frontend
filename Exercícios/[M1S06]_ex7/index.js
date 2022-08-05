/* Agora treinando um pouco mais requisições fetch inicie uma comunicação com a API via cep (https://viacep.com.br/).
- Crie uma página html para buscar o endereço através do cep contendo:
- 1 input para receber o CEP
- 1 button para buscar o endereço
- Crie uma função assíncrona que deve realizar o fetch do endereço do cep
- Utilize este endpoint: https://viacep.com.br/ws/01001000/json/  
- Substitua o 01001000 pelo cep digitado no input
- Faça a chamada utilizando Fetch e aguarde o resultado
- Adicione no button o evento de click para chamar a função criada.
- Caso a api retorne sucesso deve ser adicionado um elemento <p> com o endereço formatado ex: logradouro, complemento - bairro - localidade/uf. */

var botao = document.getElementById('botao')
var body = document.getElementById('body')

botao.addEventListener('click', () => {
    var input = document.getElementById('input').value
    const options = {
    method: "GET",
    header: {'contentType': 'application/json'}
    }
    fetch(`https://viacep.com.br/ws/${input}/json/`, options)
    .then((response)=>{
        return response.json()
    }).then((response)=>{ 
        body.innerHTML += `<br><br>Bairro: ${response.bairro} <br>Logradouro: ${response.logradouro} <br>Localidade: ${response.localidade}`;
    }).catch((err)=>{
        console.error(err)
    });
})
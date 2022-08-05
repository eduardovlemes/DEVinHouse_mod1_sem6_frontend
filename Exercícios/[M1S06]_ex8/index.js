/* - Quando o usuário clicar no botão de buscar sem ter informado um valor no input exibir modal de alerta (alert) informando que o campo precisa ser preenchido
- Quando o usuário preencher o campo com menos ou mais de 8 caracteres deve ser exibido modal de alerta (alert) informando que o campo foi preenchido com um cep inválido
- Em ambos os casos à cima não deve ser realizada a consulta na api de cep */


let botao = document.getElementById("botao")
let body = document.getElementById("body")

botao.addEventListener("click", () => {
    
    let input = document.getElementById("input").value
    if (input == ""){
        alert ("Digite um numero válido.")
    }
    
    let tamanhoInput = input.length
    if (tamanhoInput <= 7){
        alert ("O número digitado é invalido.")
    } else if (tamanhoInput > 8) {
        alert ("O número digitado é invalido.")
    }

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
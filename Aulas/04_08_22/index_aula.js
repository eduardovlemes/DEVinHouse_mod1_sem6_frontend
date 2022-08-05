/* const options = {
    method: "GET",
    headers: {'content-type': 'application/json'},
}

fetch("https://pokeapi.co/api/v2/pokemon/magikarp", options)
.then((response) => {
    return response.json()
}).then((pokemon) => {
    console.log (pokemon)
}).catch((err) => {
    console.error (err)
}) */



const options = {
    method: "GET",
    headers: {'content-type': 'application/json'},
}

fetch("https://zoo-animal-api.herokuapp.com/animals/rand", options)
.then((response) => {
    return response.json()
}).then((pokemon) => {
    console.log (pokemon)
}).catch((err) => {
    console.error (err)
})

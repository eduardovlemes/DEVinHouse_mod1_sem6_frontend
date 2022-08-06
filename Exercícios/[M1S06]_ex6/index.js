function searchPokemon(){
    const options = {
    method: "GET",
    //headers: {'content-type': 'application/json'},
    }
    let pokemon = document.querySelector(".input__search").value
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, options)
    .then((response) => {
    return response.json()
    }).then((pokemon) => {
    let image = document.querySelector(".pokemonimage")
    let idPokemon = document.querySelector(".pokemonnumber")
    let namePokemon = document.querySelector(".pokemonname")
    let typePokemon = document.querySelector("#pokemontype")
    let weightPokemon = document.querySelector("#weight")
    let abilityPokemon = document.querySelector("#ability")
    
    image.src = pokemon.sprites.front_default
    idPokemon.innerHTML = pokemon.id
    namePokemon.innerHTML = pokemon.name
    typePokemon.innerHTML = pokemon.types[0].type.name
    weightPokemon.innerHTML = pokemon.weight
    abilityPokemon.innerHTML = ""
    
    pokemon.abilities.forEach(abilityObj => {
        let tagLi = document.createElement("li")
        tagLi.innerHTML = abilityObj.ability.name
        abilityPokemon.appendChild(tagLi)
    })
    }).catch((err) => {
    console.error (err)
    })
}
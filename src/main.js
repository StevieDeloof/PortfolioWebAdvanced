'use strict'
import { getImage } from "./searchFunctions.js"
const poketable = document.getElementById("poketable")

const searchPokemon = async (amount = 10) => {
    let i = 1;
    while (amount > 0) {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(data => data.json())

        const newPokemon = document.createElement("tr")
        const data = document.createElement("td")

        const image = getImage(i)
        newPokemon.appendChild(image)

        data.innerHTML = pokemon.forms[0].name
        newPokemon.appendChild(data);
        poketable.appendChild(newPokemon)
        i++
    }
}

document.addEventListener('load', searchPokemon())
'use strict'
import { getImage } from "./searchFunctions.js"
const poketable = document.getElementById("poketable")

const searchPokemon = async (amount = 10) => {
    for (let i = 1; i <= amount; i++) {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(data => data.json())

        const newPokemon = document.createElement("tr")
        const data = document.createElement("td")

        const image = getImage(i)
        const imageColumn = document.createElement("td")
        imageColumn.appendChild(image)
        newPokemon.appendChild(imageColumn)

        data.innerHTML = pokemon.forms[0].name
        newPokemon.appendChild(data);
        poketable.appendChild(newPokemon)
    }
}

document.addEventListener('load', searchPokemon())
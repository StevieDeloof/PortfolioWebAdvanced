'use strict'
import { getImage, filterName} from "./searchFunctions.js"

const poketable = document.getElementById("poketable")
const amountEl = document.getElementById("amount")
const pokemonName = document.getElementById("pokemonName")

const searchPokemon = async (amount = 10, search = "") => {
    poketable.innerHTML = ""
    console.log(search)
    let i = 1;
    while (amount > 0) {
        //search Pokemon based on ID
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(data => data.json())
        const name = pokemon.forms[0].name
         
        if (filterName(search, name)) {
            const newPokemon = document.createElement("tr")
            const data = document.createElement("td")

            const image = getImage(i)
            newPokemon.appendChild(image)

            data.innerHTML = name
            newPokemon.appendChild(data);
            poketable.appendChild(newPokemon)
            amount--;
        }
        i++
    }
}

document.addEventListener('load', searchPokemon())

document.getElementById("filter").addEventListener("click", () => {
    searchPokemon(parseFloat(amountEl.value), pokemonName.value)
})
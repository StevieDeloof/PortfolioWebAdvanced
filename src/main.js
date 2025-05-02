'use strict'
import { searchPokemon } from "./searchFunctions.js"

const filter = document.getElementById('filter');
const amountEl = document.getElementById("amount")
const pokemonName = document.getElementById("pokemonName")

document.addEventListener('load', searchPokemon())

//Button dissapears while function is progressing to prevent bugs
filter.addEventListener("click", async () => {
    filter.style.display = 'none';
    await searchPokemon(parseFloat(amountEl.value), pokemonName.value)
    filter.style.display = 'inline';
})
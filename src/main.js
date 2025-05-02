'use strict'
import { searchPokemon } from "./searchFunctions.js"

const poketable = document.getElementById("poketable")
const amountEl = document.getElementById("amount")
const pokemonName = document.getElementById("pokemonName")


document.addEventListener('load', searchPokemon())

document.getElementById("filter").addEventListener("click", () => {
    searchPokemon(parseFloat(amountEl.value), pokemonName.value)
})
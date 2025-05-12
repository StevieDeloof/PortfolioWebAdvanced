'use strict'

import { notFound, searchPokemon } from "./searchFunctions.js"
import { initializeStorage, refreshFavorites } from "./storageLogic.js";

const filter = document.getElementById('filter');
const response = document.getElementById('res');
const amountEl = document.getElementById("amount")
const pokemonName = document.getElementById("pokemonName")

initializeStorage()
refreshFavorites()
document.addEventListener('load',searchPokemon())

//Button dissapears while function is progressing to prevent bugs
filter.addEventListener("click", async () => {
    filter.style.display = 'none';
    response.style.display = "inline"
    await searchPokemon(parseFloat(amountEl.value), pokemonName.value.toLowerCase()).catch(() => {
        notFound.style.display = "block"
    })
    response.style.display = "none"
    filter.style.display = 'inline';
})
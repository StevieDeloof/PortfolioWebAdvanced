export let favorites = new Array();
export const favoritesHTML = document.getElementById('favorites')

export const initializeStorage = () => {
    if (localStorage.getItem("favorites")) {
        favorites = JSON.parse(localStorage.getItem("favorites"))
    }
}

import { getImage } from "./lookups";

export const refreshFavorites = () => {
    if (favorites.length != 0) {
        //Create favorites table
        favoritesHTML.innerHTML = ""
        let table = document.createElement('table')
        let row
        table.innerHTML = "<thead><th>ID</th><th>Pokemon</th><th>Name</th><th>Remove</th></thead>"
        for (let favorite of favorites) {
            row = document.createElement('tr');
            row.innerHTML += `<td>${favorite.ID}</td>`
            const image = getImage(favorite.ID)
            row.append(image)
            row.innerHTML += `<td>${favorite.name}</td>`

            table.appendChild(row)
        }
        favoritesHTML.appendChild(table)
    }
}

export const addToFavorites = (id, name) => {
    let pokemon = {
        ID: id,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        name: name
    }
    if (favorites.length <= 10) {
        favorites.push(pokemon)
        refreshFavorites()
    }
    else (alert("You already have 10 favorites! Remove one before you add another one"))
}

export const saveFavorites = (favorites) => {
    console.log(localStorage.getItem("favorites"))    
    //If no favorites are saved, don't save anything
    if (favorites.length == 0) {
        //If there were favorites, but were removed, remove Item from LocalStorage
        if (localStorage.getItem("favorites")) {
            localStorage.removeItem("favorites")
        }
        return 0;
    }
    try {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    } catch (err) {
        console.error(err)
    }
}
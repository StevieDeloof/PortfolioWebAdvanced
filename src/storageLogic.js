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

            //Add button to remove from favorites
            const remove = document.createElement("button")
            remove.innerHTML = "Remove from favorites"
            remove.classList = "btn-favorite remove";

            //add button code to remove
            remove.addEventListener("click", () => {
                //get index of favorite, then remove
                const index = favorites.indexOf(favorite)
                favorites.splice(index, 1)
                saveFavorites()
                refreshFavorites()
            })
            const buttonColumn = document.createElement("td")
            buttonColumn.appendChild(remove);
            row.appendChild(buttonColumn)

            table.appendChild(row)
        }
        favoritesHTML.appendChild(table)
    }
    else {
        favoritesHTML.innerHTML = "No favorites yet"
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

export const saveFavorites = () => {
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
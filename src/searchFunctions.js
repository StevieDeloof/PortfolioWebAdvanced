import {getImage, filterName} from "./lookups.js"
const poketable = document.getElementById('poketable')
const current = document.getElementById('current')

export const table = document.querySelector('table')
export const notFound = document.getElementById('404')

//function import from storageLogic
import {favorites, addToFavorites, saveFavorites} from "./storageLogic.js"


export const searchPokemon = async (amount = 10, search = "") => {
    return new Promise(async (resolve, reject) => {
        table.style.display = "none"
        const start_amount = amount;
        poketable.innerHTML = ""
        let i = 1;
        while (amount > 0) {
        current.innerHTML = i
        //search Pokemon based on ID
        try {
            //Get the pokemon, and turn it into an object
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(data => data.json())
            //If the name is accepted by the filter
            if (filterName(search, pokemon.forms[0].name)) {
                //remove any possible error display
                table.style.display = "inline-block"
                notFound.style.display = "none"
                //Set vars 
                const id = i;
                const name = pokemon.forms[0].name
                const newPokemon = document.createElement("tr")
                let data = document.createElement("td")
                data.innerHTML = i
                newPokemon.appendChild(data);
                poketable.appendChild(newPokemon)

                //add image
                const image = getImage(id)
                newPokemon.appendChild(image)

                //add name
                data = document.createElement("td")
                data.innerHTML = name
                newPokemon.appendChild(data);
                poketable.appendChild(newPokemon)

                //add height
                data = document.createElement("td")
                data.innerHTML = pokemon.height
                newPokemon.appendChild(data);
                poketable.appendChild(newPokemon)

                //add weight
                data = document.createElement("td")
                data.innerHTML = pokemon.weight
                newPokemon.appendChild(data);
                poketable.appendChild(newPokemon)

                //Button to save a pokemon
                data = document.createElement("td")
                const btn = document.createElement('button')
                btn.innerHTML = "Favorite"
                btn.className = "btn-favorite"

                //eventlistener
                btn.addEventListener('click', () => {
                    for (let favorite of favorites) {
                        if (favorite.ID == id) {
                            alert("Pokemon already a favorite")
                            return 0;
                        }
                    }
                    addToFavorites(id, name, pokemon.height, pokemon.weight)
                    saveFavorites()
                })

                data.append(btn)
                newPokemon.appendChild(data)
                //lower amount of pokemon to be added
                amount--;
            }
            //Raise ID of the pokemon
            i++
        } catch (err) {
            if (amount == start_amount) {
                reject("not found")
                return 0
            }
        }
    }
    resolve()
})
}
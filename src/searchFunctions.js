import {getImage, filterName} from "./lookups"

const poketable = document.getElementById('poketable')

//function import from storageLogic
import {favorites, favoritesHTML, initializeStorage, refreshFavorites, addToFavorites} from "./storageLogic"


export const searchPokemon = async (amount = 10, search = "") => {
    const start_amount = amount;
    poketable.innerHTML = ""
    let i = 1;
    while (amount > 0) {
        //search Pokemon based on ID
        try {
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(data => data.json())
            if (filterName(search, pokemon.forms[0].name)) {
                //Set vars 
                const id = i;
                const name = pokemon.forms[0].name
                const newPokemon = document.createElement("tr")
                let data = document.createElement("td")
                data.innerHTML = i
                newPokemon.appendChild(data);
                poketable.appendChild(newPokemon)

                const image = getImage(id)
                newPokemon.appendChild(image)

                data = document.createElement("td")
                data.innerHTML = name
                newPokemon.appendChild(data);
                poketable.appendChild(newPokemon)

                //Button to save a pokemon
                data = document.createElement("td")
                const btn = document.createElement('button')
                btn.innerHTML = "Favorite"
                btn.className = "btn-favorite"
                btn.addEventListener('click', () => {
                    for (let favorite of favorites) {
                        if (favorite.ID == id) {
                            alert("Pokemon already a favorite")
                            return 0;
                        }
                    }
                    addToFavorites(id, name)
                })
                data.append(btn)
                newPokemon.appendChild(data)

                amount--;
            }
            i++
        } catch (err) {
            amount = 0;
            //Checks if any pokemon were found at all. If no pokemon were found period, this message is sendt
            if (amount == start_amount) poketable.innerHTML = "No pokemon found"
        }
    }
}
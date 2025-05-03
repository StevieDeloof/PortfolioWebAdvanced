//2 subFunctions of searchPokemon
 const getImage = (i) => {
    //code borrowed from https://stackoverflow.com/questions/7802744/adding-an-img-element-to-a-div-with-javascript
    const image = document.createElement('img');
    image.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)
    image.setAttribute("height", "100px")
    image.setAttribute("width", "100px")
    image.setAttribute("alt", "Pokemon image")
    const imageColumn = document.createElement("td")
    imageColumn.appendChild(image)
    return imageColumn
}
 const filterName = (search, name) => {
    if (search.length == 0) {
        return true
    }
    if (search == name.substring(0, search.length)) return true
    return false
}

const poketable = document.querySelector("tbody")

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
                const name = pokemon.forms[0].name
                const newPokemon = document.createElement("tr")
                let data = document.createElement("td")
                data.innerHTML = i
                newPokemon.appendChild(data);
                poketable.appendChild(newPokemon)

                const image = getImage(i)
                newPokemon.appendChild(image)

                data = document.createElement("td")
                data.innerHTML = name
                newPokemon.appendChild(data);
                poketable.appendChild(newPokemon)

                data = document.createElement("td")
                const btn = document.createElement('button')
                btn.innerHTML = "Favorite"
                btn.className = "btn-favorite"
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
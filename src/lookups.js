//2 subFunctions of searchPokemon
export const getImage = (i) => {
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
export const filterName = (search, name) => {
    if (search.length == 0) {
        return true
    }
    if (search == name.substring(0, search.length)) return true
    return false
}
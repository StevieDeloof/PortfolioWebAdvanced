export const getImage = (i) => {
    //code borrowed from https://stackoverflow.com/questions/7802744/adding-an-img-element-to-a-div-with-javascript
    const image = document.createElement('img');
    image.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)
    image.setAttribute("height", "100px")
    image.setAttribute("width", "100px")
    image.setAttribute("alt", "Pokemon image")
    return image
}
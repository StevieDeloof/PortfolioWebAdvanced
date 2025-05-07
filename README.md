This is my project made for Web Advanced

I made a Pokemon table, where the user can also look up their own Pokemon, filter based on names, choose how many pokemon they want to see, how they want to sort them, and choose to sert by ascending or descending order.
I also allowed the user to save these pokemon to their favorites (10 in total), which will be saved in between sessions.

I made use of these sources:
For this project I made use of https://pokeapi.co/, to search for certain pokemon.

I added the following required technical aspects:
1. Dom manipulation
  a. I made use of selectors to select elements for change:
    main.js: line 6-9
    searchFunctions.js: line 2-8
    storageLogic.js: line 2

  b. I manipulated these elements, to change the innerHTML and some style elements.
    main.js:
      Line 17, 18, 20, 22, 23 change the style property (specifically the display) of an element.
    searchFunctions.js:
      Line 19, 29, 35, 41, 48, 103, 108 change the innerHTML of an element.
      Line 101, 118, 119 change the style property (specifically the display) of an element.
    storageLogic.js: 
      Line 18, 21, 24-26, 30 and 50 change the innerHTML of an element.
      Line 31 for giving classes to an element    .
    lookup.js:
      Line 5-8 change some attributes of an image element.  

  c. I added actions to some elements, set to be executed when a certain event (for example, a buttonpress) happens.
    main.js:
      Line 13 searches for pokemon when the document loaded.
      Line 16 searches for pokemon when a buttoon is pressed, using the filter values given by the user.
    searchFunctions.js:
      Line 52 adds an action to add a pokemon to the users personal favorites, provided it isn't already a favorite and there aren't more than 10 already.
    storageLogic.js:
      Line 34 adds an action to remove a pokemon from the users personal favorites, and then refreshes the page.
2. Modern javascript
  a. All variables which refer to an HTML element are constants, as well as variables which won't be changed.
    storageLogic.js: on line 55 is a constant object, as that variable will not be changed after declaration in the function. 
  b. I made use of template literals to inject variables inside a string in an appealing way.
    searchFunctions.js: 
      Line 112 inserts the index of a pokemon directly inside the string.
    storageLogic.js:
      Line 21, 24-26 use template literals when creating HTML elements.
      Line 57 uses template literals for the string referring to the image.
    lookup.js:
      Line 5 uses template literals for the string referring to the image.
  c. I iterated over arrays making use of the "for (let element of elements)" notation.
    searchFunctions.js:
      Line 52 loops over all the pokemon, to find if the pokemon the user is trying to add is already added to the favorites.
    storageLogic.js:
      Line 19 loops over all the currently saved favorites and adds them to the table, anything the site refreshes the favorites table.
  d. I used array methods like sort and forEach
    searchFunctions.js:
      Lines 71-94 sort the array of pokemon depending on the variables the user gave. For the name I used the localeComparefunction.
      Line 134 I used the forEach function to go over every pokemon and add them to the table.
  e. I made use of arrow functions too write clean javascript code
    searchFunctions.js
      Line 113, 134 uses an arrow function to write the code on 1 line

  f. I used the Conditional operator to check the value of a variable.
    searchFunctions.js:
      Line 68 checks the value of the checkbox (if it's on), and changes it to true if it's on.
  g. I made use of callback functions
    searchFunctions.js:
      Line 134 uses addPokemon as callback for the forEach
  h. I made use of promises
    searchFunctions.js:
      Line 100 adds a promise while searching for the pokemon. If no pokemon were found, a reject is sent, which is caught on line 19 in main.js to message the user.
  i. I made use of async and await when the site had to wait.
    main.js:
      Line 19 waits untill the search is fully completed, then hides the response and shows the filter button again.
    searchFunctions.js:
      line 112 waits untill the pokemon has been found and fully assigned to the variable before continuing.
  j. I made use of an api (pokeapi) to fetch data.

3. Data & API
  a. I made use of fetch to aqquire the necessary data.
    searchFunction.js:
      Line 112 gets the pokemon based on the current ID, then converts it from JSON to an object.
  b. I manipulated JSON and used it for saving data and getting it.
    searchFunctions.js:
      Line 113 takes the JSON string and converts it to an object.
    storageLogic.js:
      Line 6 takes the JSON string from localStorage, and converts it to an object.
      Line 79 does the opposite, and takes an object, and turns it into a JSON string. This string is then saved to LocalStorage.

4. Storage and validation
  a. I validated the form, specifically if the pokemon is not found in the database
    searchFunctions.js
      On line 126-130 the site will tell the user that no pokemon were found if all the pokemon were looked through but none were found. 
  b. I made use of LocalStorage to save user favorites.
    storageLogic.js
      Line 69-83 turn the array of favorites into a string, and save into the localStorage
        (it's converted to a string because that's the only thing that can be saved).
      Line 4-8 take the JSON string from localStorage, and converts it to an object

5. Styling and layout
  I made a fairly simple site, using basic HTML and CSS. It was a pretty big priority that both mobile and dekstop screens could render the site nicely
  The field for user input and the two tables are put apart via a flexbox. 

  On a bigger screen, the flex direction goes via row, but via a smaller (for example mobile) screen, it goes via column. 
  These screens also have some differences, to make it easier for the site to fit on a smaller screen. I made the images and buttons smaller

  I made sure the tables have a similar styling, and 
  The buttons are round and visible, and I made the delete button red to differentiate it from the others.

6. Tools
  I made this project using Vite. I made the folder structure coherent and logical, and differentiated the style and javascript files from the HTML

This site can be buildt using this npm command (works on both Windows and Linux): 

npm run build
npm run preview

The site can then be visited on localhost:4173 in the web browser

Sources:
https://pokeapi.co/docs/v2
https://www.geeksforgeeks.org/how-to-sort-an-array-of-objects-based-on-a-key-in-javascript/ for the sort function on line 73-74
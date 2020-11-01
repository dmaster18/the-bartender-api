function fetchRecipes() {
  const recipes_url = "http://127.0.0.1:3000/recipes"
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(json => renderRecipes(json))
}

function renderRecipes(json) {
  json["data"].forEach(recipe => {
    const p = document.createElement('p')
    const main = document.querySelector('main')
    p.innerHTML = `<p>${recipe.attributes.name}</p>`
    main.appendChild(p)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  fetchRecipes();
})


function recipeCard(json){
  json["data"].forEach(recipe => {
    const main = document.querySelector('main')
    const liquorsElement = `<p><b><u>Liquors:</u></b><ol>${liquors}</ol></p>`
    const liquors = recipe.attributes.liquors.forEach(liquor => `<li.liquor>${liquor}</li>`)
    const liqueursElement = `<p><b><u>Liqueurs:</u></b><ol>${liqueurs}</ol></p>`
    const liqueurs = recipe.attributes.liqueurs.forEach(liqueur => `<li.liqueur>${liqueur}</li>`)
    const mixersElement = `<p><b><u>Mixers:</u></b><ol>${mixers}</ol></p>`
    const mixers = recipe.attributes.mixers.forEach(mixer => `<li.mixer>${mixer}</li>`)
    const garnishesElement = `<p><b><u>Garnishes:</u></b><ol>${garnishes}</ol></p>`
    const garnishes = recipe.attributes.garnishes.forEach(garnish => `<li.garnish>${garnish}</li>`)
    const recipeCard = document.createElement("div.card")
    recipeCard.innerHTML = `<div.container><h2><b>${recipe.name}</b></h2><p>${liquorsElement}</p><p>liqueursElement</p><p>mixersElement</p><p>garnishesElement</p></div>`

  })
}

function liquorCorrect?(question) {
  const recipeCard = document.querySelector("div.card")
  liquorElement = document.querySelector("li.liquor")
  if (recipe.attributes.liquors.includes(user_input) {
    liquorElement.style.backgroundColor = "green"
  } else {
    liquorElement.style.backgroundColor = "red"
  }
}

function liqueurCorrect?(question) {
  const recipeCard = document.querySelector("div.card")
  liqueurElement = document.querySelector("li.liqueur")
  if (recipe.attributes.liqueurs.includes(user_input) {
    liqueurElement.style.backgroundColor = "green"
  } else {
    liqueurElement.style.backgroundColor = "red"
  }
}}*/

function fetchRecipes() {
  const recipes_url = "http://127.0.0.1:3000/recipes"
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(json => renderRecipeCards(json))
}

function renderRecipeCards(json){
  json["data"].forEach(recipe => {
    const main = document.querySelector('main')
    const recipeCard = document.createElement("div.card")
    recipeCard.innerHTML = `<div.container><h2><b>${recipe.attributes.name}</b></h2></div>`
    if (recipe.attributes.liquors) {
      const liquors = recipe.attributes.liquors.forEach(liquor => `<li.liquor>${liquor}</li>`)
      const liquorsElement = `<p><b><u>Liquors:</u></b><ol>${liquors}</ol></p>`
      recipeCard.appendChild(liquorsElement)
    }
    if (recipe.attributes.liqueurs) {
      const liqueurs = recipe.attributes.liqueurs.forEach(liqueur => `<li.liqueur>${liqueur}</li>`)
      const liqueursElement = `<p><b><u>Liqueurs:</u></b><ol>${liqueurs}</ol></p>`
      recipeCard.appendChild(liqueursElement)
    }
    if (recipe.attributes.mixers) {
      const mixers = recipe.attributes.mixers.forEach(mixer => `<li.mixer>${mixer}</li>`)
      const mixersElement = `<p><b><u>Mixers:</u></b><ol>${mixers}</ol></p>`
      recipeCard.appendChild(mixersElement)
    }
    if (recipe.attributes.garnishes) {
      const garnishes = recipe.attributes.garnishes.forEach(garnish => `<li.garnish>${garnish}</li>`)
      const garnishesElement = `<p><b><u>Garnishes:</u></b><ol>${garnishes}</ol></p>`
      recipeCard.appendChild(garnishesElement)
    }
    main.appendChild(recipeCard)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  fetchRecipes();
})

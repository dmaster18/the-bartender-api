function fetchRecipes() {
  const recipes_url = "http://127.0.0.1:3000/recipes"
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(json => renderRecipeCards(json))
}

function renderRecipeCards(json){
  json["data"].forEach(recipe => {
    const main = document.querySelector('main');
    const recipeCard = document.createElement('div.card');
    recipeCard.innerHTML = `<div.container><h2><b>${recipe.attributes.name}</b></h2></div>`;
    if (recipe.attributes.liquors) {
      const liquors = recipe.attributes.liquors.forEach(liquor => `<li.liquor>${liquor.name}</li>`);
      const liquorsElement = document.createElement('p.liquors')
      liquorsElement.innerHTML = `<b><u>Liquors:</u> </b><ol>${liquors}</ol>`;
      recipeCard.appendChild(liquorsElement);
    }
    if (recipe.attributes.liqueurs) {
      const liqueur = recipe.attributes.liqueurs.forEach(liqueur => `<li.liqueur>${liqueur.name}</li>`);
      const liqueursElement = document.createElement('p.liqueurs')
      liqueursElement.innerHTML = `<b><u>Liqueurs:</u> </b><ol>${liqueurs}</ol>`;
      recipeCard.appendChild(liqueursElement);
    }
    if (recipe.attributes.mixers) {
      const mixers = recipe.attributes.mixers.forEach(mixer => `<li.mixer>${mixer.name}</li>`);
      const mixersElement = document.createElement('p.mixers')
      mixersElement.innerHTML = `<b><u>Mixers:</u> </b><ol>${mixers}</ol>`;
      recipeCard.appendChild(mixersElement);
    }
    if (recipe.attributes.garnishes) {
      const garnishes = recipe.attributes.garnishes.forEach(garnish => `<li.garnish>${garnish.name}</li>`);
      const garnishesElement = document.createElement('p.garnishes')
      liquorsElement.innerHTML = `<b><u>Garnishes:</u> </b><ol>${garnishes}</ol>`;
      recipeCard.appendChild(garnishesElement);
    }
    main.appendChild(recipeCard);
  })
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  fetchRecipes();
})

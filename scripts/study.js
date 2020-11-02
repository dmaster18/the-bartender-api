/*function fetchIngredientCards() {
  const recipes_url = "http://127.0.0.1:3000/recipes"
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(json => renderIngredientCards(json))
}

function renderIngredientCards(json) {
  json["data"].forEach(recipe =>
    {const main = document.querySelector('main')
    const ingredientCard = document.createElement('div.card')
    ingredientCard.innerHTML = `<div.container><h2><b>${recipe.attributes.name}</b></h2></div>`
    if (recipe.attributes.liquors.length > 0) {
      const liquorsTitle = document.createElement('h4.liquorsTitle')
      liquorsTitle.innerHTML = '<b><u>Liquors</u></b>'
      ingredientCard.appendChild(liquorsTitle)
      const liquorsElement = document.createElement('ul.liquors')
      const liquors = recipe.attributes.liquors.forEach( liquor =>
        {const liquor_line = document.createElement('li.liquor')
        liquor_line.innerHTML = `<li>${liquor.name}</li>`
        liquorsElement.appendChild(liquor_line)
      })
      ingredientCard.appendChild(liquorsElement);
    }
    if (recipe.attributes.liqueurs.length > 0) {
      const liqueursTitle = document.createElement('h4.liqueursTitle')
      liqueursTitle.innerHTML = '<b><u>Liqueurs</u></b>'
      ingredientCard.appendChild(liqueursTitle)
      const liqueursElement = document.createElement('ul.liqueurs')
      const liqueurs = recipe.attributes.liqueurs.forEach( liqueur =>
        {const liqueur_line = document.createElement('li.liqueur')
        liqueur_line.innerHTML = `<li>${liqueur.name}</li>`
        liqueursElement.appendChild(liqueur_line)
      })
      ingredientCard.appendChild(liqueursElement);
    }
    if (recipe.attributes.mixers.length > 0) {
      const mixersTitle = document.createElement('h4.mixersTitle')
      mixersTitle.innerHTML = '<b><u>Mixers</u></b>'
      ingredientCard.appendChild(mixersTitle)
      const mixersElement = document.createElement('ul.mixers')
      const mixers = recipe.attributes.mixers.forEach( mixer =>
        {const mixer_line = document.createElement('li.mixer')
        mixer_line.innerHTML = `<li>${mixer.name}</li>`
        mixersElement.appendChild(mixer_line)
      })
      ingredientCard.appendChild(mixersElement);
    }
    if (recipe.attributes.garnishes.length > 0) {
      const garnishesTitle = document.createElement('h4.garnishesTitle')
      garnishesTitle.innerHTML = '<b><u>Garnishes</u></b>'
      ingredientCard.appendChild(garnishesTitle)
      const garnishesElement = document.createElement('ul.garnishes')
      const garnishes = recipe.attributes.garnishes.forEach( garnish =>
        {const garnish_line = document.createElement('li.garnish')
        garnish_line.innerHTML = `<li>${garnish.name}</li>`
        garnishesElement.appendChild(garnish_line)
      })
      ingredientCard.appendChild(garnishesElement);
    }
    main.appendChild(ingredientCard);
  })
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  fetchIngredientCards();
})*/

function fetchRandomIngredientCard() {
  const recipes_url = "http://127.0.0.1:3000/recipes"
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(json => renderRandomIngredientCard(json))
}

function renderRandomIngredientCard(json) {
  const randomNumber = Math.floor(Math.random() * 508);
  const recipe = json["data"][randomNumber];
  const main = document.querySelector('main')
  const ingredientCard = document.createElement('div.card')
  ingredientCard.innerHTML = `<div.container><h2><b>${recipe.attributes.name}</b></h2></div>`
  if (recipe.attributes.liquors.length > 0) {
    const liquorsTitle = document.createElement('h4.liquorsTitle')
    liquorsTitle.innerHTML = '<b><u>Liquors</u></b>'
    ingredientCard.appendChild(liquorsTitle)
    const liquorsElement = document.createElement('ul.liquors')
    const liquors = recipe.attributes.liquors.forEach( liquor =>
      {const liquor_line = document.createElement('li.liquor')
      liquor_line.innerHTML = `<li>${liquor.name}</li>`
      liquorsElement.appendChild(liquor_line)
    })
    ingredientCard.appendChild(liquorsElement);
  }
  if (recipe.attributes.liqueurs.length > 0) {
    const liqueursTitle = document.createElement('h4.liqueursTitle')
    liqueursTitle.innerHTML = '<b><u>Liqueurs</u></b>'
    ingredientCard.appendChild(liqueursTitle)
    const liqueursElement = document.createElement('ul.liqueurs')
    const liqueurs = recipe.attributes.liqueurs.forEach( liqueur =>
      {const liqueur_line = document.createElement('li.liqueur')
      liqueur_line.innerHTML = `<li>${liqueur.name}</li>`
      liqueursElement.appendChild(liqueur_line)
    })
    ingredientCard.appendChild(liqueursElement);
  }
  if (recipe.attributes.mixers.length > 0) {
    const mixersTitle = document.createElement('h4.mixersTitle')
    mixersTitle.innerHTML = '<b><u>Mixers</u></b>'
    ingredientCard.appendChild(mixersTitle)
    const mixersElement = document.createElement('ul.mixers')
    const mixers = recipe.attributes.mixers.forEach( mixer =>
      {const mixer_line = document.createElement('li.mixer')
      mixer_line.innerHTML = `<li>${mixer.name}</li>`
      mixersElement.appendChild(mixer_line)
    })
    ingredientCard.appendChild(mixersElement);
  }
  if (recipe.attributes.garnishes.length > 0) {
    const garnishesTitle = document.createElement('h4.garnishesTitle')
    garnishesTitle.innerHTML = '<b><u>Garnishes</u></b>'
    ingredientCard.appendChild(garnishesTitle)
    const garnishesElement = document.createElement('ul.garnishes')
    const garnishes = recipe.attributes.garnishes.forEach( garnish =>
      {const garnish_line = document.createElement('li.garnish')
      garnish_line.innerHTML = `<li>${garnish.name}</li>`
      garnishesElement.appendChild(garnish_line)
    })
    ingredientCard.appendChild(garnishesElement);
  }
  main.appendChild(ingredientCard);
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  fetchRandomIngredientCard();
})




/*function fetchRecipes() {
  const recipes_url = "http://127.0.0.1:3000/recipes"
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(json => renderRecipeCards(json))
}


function renderRecipeCards(json) {
  json["data"].forEach(recipe =>
    {const main = document.querySelector('main')
    const recipeCard = document.createElement('div.card')
    recipeCard.innerHTML = `<div.container><h2><b>${recipe.attributes.name}</b></h2></div>`
    if (recipe.attributes.liquors) {
      const liquorsTitle = document.createElement('h4.liquorsTitle')
      liquorsTitle.innerHTML = '<b><u>Liquors</u></b>'
      recipeCard.appendChild(liquorsTitle)
      const liquorsElement = document.createElement('ul.liquors')
      const liquors = recipe.attributes.liquors_string.forEach( liquor =>
        {const liquor_line = document.createElement('li.liquor')
        liquor_line.innerHTML = `<li>${liquor}</li>`
        liquorsElement.appendChild(liquor_line)
      })
      recipeCard.appendChild(liquorsElement);
    }
    if (recipe.attributes.liqueurs) {
      const liqueursTitle = document.createElement('h4.liqueursTitle')
      liqueursTitle.innerHTML = '<b><u>Liqueurs</u></b>'
      recipeCard.appendChild(liqueursTitle)
      const liqueursElement = document.createElement('ul.liqueurs')
      const liqueurs = recipe.attributes.liqueurs_string.forEach( liqueur =>
        {const liqueur_line = document.createElement('li.liqueur')
        liqueur_line.innerHTML = `<li>${liqueur}</li>`
        liqueursElement.appendChild(liqueur_line)
      })
      recipeCard.appendChild(liqueursElement);
    }
    if (recipe.attributes.mixers) {
      const mixersTitle = document.createElement('h4.mixersTitle')
      mixersTitle.innerHTML = '<b><u>Mixers</u></b>'
      recipeCard.appendChild(mixersTitle)
      const mixersElement = document.createElement('ul.mixers')
      const mixers = recipe.attributes.mixers_string.forEach( mixer =>
        {const mixer_line = document.createElement('li.mixer')
        mixer_line.innerHTML = `<li>${mixer}</li>`
        mixersElement.appendChild(mixer_line)
      })
      recipeCard.appendChild(mixersElement);
    }
    if (recipe.attributes.garnishes) {
      const garnishesTitle = document.createElement('h4.garnishesTitle')
      garnishesTitle.innerHTML = '<b><u>Garnishes</u></b>'
      recipeCard.appendChild(garnishesTitle)
      const garnishesElement = document.createElement('ul.garnishes')
      const garnishes = recipe.attributes.garnishes_string.forEach( garnish =>
        {const garnish_line = document.createElement('li.garnish')
        garnish_line.innerHTML = `<li>${garnish}</li>`
        garnishesElement.appendChild(garnish_line)
      })
      recipeCard.appendChild(garnishesElement);
    }
    main.appendChild(recipeCard);
  })
}

document.addEventListener('click', function() {
  console.log('DOM fully loaded and parsed');
  fetchRecipes();
})*/

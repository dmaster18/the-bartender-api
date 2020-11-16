window.addEventListener('DOMContentLoaded', function() {fetchCards()});

class Study {
  constructor() {}

  fetchCards() {
      const recipes_url = "http://127.0.0.1:3000/recipes";
      return fetch(recipes_url)
      .then(resp => resp.json());
  }

  renderStudy() {
    const main = document.querySelector('main');
    this.renderLoadingState();
    main.innerHTML = '';
    let i = 0;
    const randomNumbers = this.randomNumberGenerator();
    this.fetchCards().then(json => this.randomRecipeCard(json, i, randomNumbers))
  }

  renderLoadingState() {
    const gifElement = document.createElement('img');
    gifElement.src = '../gifs/dog_bartender.gif'
    main.appendChild(gifElement);
  }

}


}



function createButtons(json, i, main, randomNumbers) {
  const buttons = document.createElement('div');
  buttons.classList.add('buttons');
  const nextCardButton = document.createElement('button');
  nextCardButton.classList.add('next-card');
  nextCardButton.innerText = 'Next';
  const previousCardButton = document.createElement('button');
  previousCardButton.classList.add('previous-card');
  previousCardButton.innerText = 'Previous';
  buttons.innerHTML = '<br><br>';
  buttons.appendChild(previousCardButton);
  buttons.appendChild(nextCardButton);
  main.appendChild(buttons);
  nextCardButton.addEventListener('click', function(){console.log(i);nextRecipeCard(json, i, randomNumbers)});
  previousCardButton.addEventListener('click', function(){console.log(i);previousRecipeCard(json, i, randomNumbers)});
}

function randomRecipeCard(json, i, randomNumbers) {
  const main = document.querySelector('main');
  main.innerHTML = '';
  const recipeCards = generateCards(json);
  const randomNumber = randomNumbers[i];
  const recipeCard = recipeCards[randomNumber];
  main.appendChild(recipeCard);
  createButtons(json, i, main, randomNumbers);
}

function nextRecipeCard(json, i, randomNumbers) {
  if (i < 498) {i++;}
  randomRecipeCard(json, i, randomNumbers);
}

function previousRecipeCard(json, i, randomNumbers) {
  if (i > 0) {i--;}
  randomRecipeCard(json, i, randomNumbers);
}


const randomNumberGenerator = function() { //Create limit paramter to return fewer recipes (to decrease load times)
  const randomNumbers = []
  for(let i = 1; i <= 498; i++) {
    randomNumbers.push(i);
  }
  return shuffle(randomNumbers);
}

function shuffle(randomNumbers) {
  return randomNumbers.sort(() => Math.random() - 0.5);
}

function generateCards(json) { //Renders all Cocktail Recipe Ingredient Index Cards
  const recipeData = json["data"]
  const recipeCards = recipeData.map(recipe => generatecard(recipe))
  return recipeCards;
}

function generatecard(recipe) { //To generated Cocktail Recipe Ingredient Index Card in HTML
  const card = document.createElement('div');
  card.classList.add('card')
  const cardFront = document.createElement('div');
  cardFront.classList.add('card-front');
  cardFront.innerHTML = `<div.card-front><h2><b>${recipe.attributes.name}</b></h2></div>`
  const revealAnswer = document.createElement('div');
  revealAnswer.classList.add('reveal-answer');
  const revealIngredientsButton = document.createElement('button');
  revealIngredientsButton.classList.add('reveal-ingredients');
  revealIngredientsButton.innerText = 'Reveal Ingredients Only'
  const revealFullRecipeButton = document.createElement('button');
  revealFullRecipeButton.classList.add('reveal-full-recipe');
  revealFullRecipeButton.innerText = 'Reveal Ingredients + Measurements';
  revealAnswer.appendChild(revealIngredientsButton);
  revealAnswer.appendChild(revealFullRecipeButton);
  cardFront.appendChild(revealAnswer);

  const cardBackIngredients = document.createElement('div');
  cardBackIngredients.innerHTML = `<div.card-back-title><h2><b>${recipe.attributes.name}</b></h2></div>`
  cardBackIngredients.classList.add('card-back-ingredients');
  if (recipe.attributes.liquors.length > 0) {
    const liquorsTitle = document.createElement('h4.liquorsTitle')
    liquorsTitle.innerHTML = '<b><u>Liquors</u></b>'
    cardBackIngredients.appendChild(liquorsTitle)
    const liquorsElement = document.createElement('ul.liquors')
    const liquors = recipe.attributes.liquors.forEach( liquor =>
      {const liquor_line = document.createElement('li.liquor')
      liquor_line.innerHTML = `<li>${liquor.name}</li>`
      liquorsElement.appendChild(liquor_line)
    })
    cardBackIngredients.appendChild(liquorsElement);
  }
  if (recipe.attributes.liqueurs.length > 0) {
    const liqueursTitle = document.createElement('h4.liqueursTitle')
    liqueursTitle.innerHTML = '<b><u>Liqueurs</u></b>'
    cardBackIngredients.appendChild(liqueursTitle)
    const liqueursElement = document.createElement('ul.liqueurs')
    const liqueurs = recipe.attributes.liqueurs.forEach( liqueur =>
      {const liqueur_line = document.createElement('li.liqueur')
      liqueur_line.innerHTML = `<li>${liqueur.name}</li>`
      liqueursElement.appendChild(liqueur_line)
    })
    cardBackIngredients.appendChild(liqueursElement);
  }
  if (recipe.attributes.mixers.length > 0) {
    const mixersTitle = document.createElement('h4.mixersTitle')
    mixersTitle.innerHTML = '<b><u>Mixers</u></b>'
    cardBackIngredients.appendChild(mixersTitle)
    const mixersElement = document.createElement('ul.mixers')
    const mixers = recipe.attributes.mixers.forEach( mixer =>
      {const mixer_line = document.createElement('li.mixer')
      mixer_line.innerHTML = `<li>${mixer.name}</li>`
      mixersElement.appendChild(mixer_line)
    })
    cardBackIngredients.appendChild(mixersElement);
  }
  if (recipe.attributes.garnishes.length > 0) {
    const garnishesTitle = document.createElement('h4.garnishesTitle')
    garnishesTitle.innerHTML = '<b><u>Garnishes</u></b>'
    cardBackIngredients.appendChild(garnishesTitle)
    const garnishesElement = document.createElement('ul.garnishes')
    const garnishes = recipe.attributes.garnishes.forEach( garnish =>
      {const garnish_line = document.createElement('li.garnish')
      garnish_line.innerHTML = `<li>${garnish.name}</li>`
      garnishesElement.appendChild(garnish_line)
    })
    cardBackIngredients.appendChild(garnishesElement);
  }

  const cardBackIngredientsButtons = document.createElement('div');
  cardBackIngredientsButtons.classList.add('back-ingredients-buttons');
  const showRecipeNameButton = document.createElement('button');
  showRecipeNameButton.classList.add('show-recipe-name');
  showRecipeNameButton.innerText = 'Show Cocktail Name';
  const backRevealFullRecipeButton = document.createElement('button');
  backRevealFullRecipeButton.classList.add('reveal-full-recipe');
  backRevealFullRecipeButton.innerText = 'Reveal Ingredients + Measurements';
  cardBackIngredientsButtons.appendChild(showRecipeNameButton);
  cardBackIngredientsButtons.appendChild(backRevealFullRecipeButton);
  cardBackIngredients.appendChild(cardBackIngredientsButtons);

  const cardBackFullRecipe = document.createElement('div');
  cardBackFullRecipe.innerHTML = `<div.card-back-title><h2><b>${recipe.attributes.name}</b></h2></div>`
  cardBackFullRecipe.classList.add('card-back-full-recipe');
  if (recipe.attributes.liquors_array.length > 0) {
    const liquorsTitle = document.createElement('h4.liquorsTitle')
    liquorsTitle.innerHTML = '<b><u>Liquors</u></b>'
    cardBackFullRecipe.appendChild(liquorsTitle)
    const liquorsElement = document.createElement('ul.liquors')
    const liquors = recipe.attributes.liquors_array.forEach( liquor =>
      {const liquor_line = document.createElement('li.liquor')
      liquor_line.innerHTML = `<li>${liquor}</li>`
      liquorsElement.appendChild(liquor_line)
    })
    cardBackFullRecipe.appendChild(liquorsElement);
  }
  if (recipe.attributes.liqueurs_array.length > 0) {
    const liqueursTitle = document.createElement('h4.liqueursTitle')
    liqueursTitle.innerHTML = '<b><u>Liqueurs</u></b>'
    cardBackFullRecipe.appendChild(liqueursTitle)
    const liqueursElement = document.createElement('ul.liqueurs')
    const liqueurs = recipe.attributes.liqueurs_array.forEach( liqueur =>
      {const liqueur_line = document.createElement('li.liqueur')
      liqueur_line.innerHTML = `<li>${liqueur}</li>`
      liqueursElement.appendChild(liqueur_line)
    })
    cardBackFullRecipe.appendChild(liqueursElement);
  }
  if (recipe.attributes.mixers_array.length > 0) {
    const mixersTitle = document.createElement('h4.mixersTitle')
    mixersTitle.innerHTML = '<b><u>Mixers</u></b>'
    cardBackFullRecipe.appendChild(mixersTitle)
    const mixersElement = document.createElement('ul.mixers')
    const mixers = recipe.attributes.mixers_array.forEach( mixer =>
      {const mixer_line = document.createElement('li.mixer')
      mixer_line.innerHTML = `<li>${mixer}</li>`
      mixersElement.appendChild(mixer_line)
    })
    cardBackFullRecipe.appendChild(mixersElement);
  }
  if (recipe.attributes.garnishes_array.length > 0) {
    const garnishesTitle = document.createElement('h4.garnishesTitle')
    garnishesTitle.innerHTML = '<b><u>Garnishes</u></b>'
    cardBackFullRecipe.appendChild(garnishesTitle)
    const garnishesElement = document.createElement('ul.garnishes')
    const garnishes = recipe.attributes.garnishes_array.forEach( garnish =>
      {const garnish_line = document.createElement('li.garnish')
      garnish_line.innerHTML = `<li>${garnish}</li>`
      garnishesElement.appendChild(garnish_line)
    })
    cardBackFullRecipe.appendChild(garnishesElement);
  }
  const cardBackFullRecipeButtons = document.createElement('div');
  cardBackFullRecipeButtons.classList.add('back-full-recipe-buttons');
  const secondShowRecipeNameButton = document.createElement('button');
  secondShowRecipeNameButton.classList.add('show-recipe-name');
  secondShowRecipeNameButton.innerText = 'Show Cocktail Name';
  const backRevealIngredientsButton = document.createElement('button');
  backRevealIngredientsButton.classList.add('reveal-ingredients');
  backRevealIngredientsButton.innerText = 'Reveal Ingredients Only';
  cardBackFullRecipeButtons.appendChild(secondShowRecipeNameButton);
  cardBackFullRecipeButtons.appendChild(backRevealIngredientsButton);
  cardBackFullRecipe.appendChild(cardBackFullRecipeButtons);

  card.appendChild(cardFront);
  revealIngredientsButton.addEventListener('click', function() {revealIngredients(card, cardBackIngredients)})
  backRevealIngredientsButton.addEventListener('click', function() {revealIngredients(card, cardBackIngredients)})

  showRecipeNameButton.addEventListener('click', function() {showRecipeName(card, cardFront)})
  secondShowRecipeNameButton.addEventListener('click', function() {showRecipeName(card, cardFront)})

  revealFullRecipeButton.addEventListener('click', function() {revealFullRecipe(card, cardBackFullRecipe)})
  backRevealFullRecipeButton.addEventListener('click', function() {revealFullRecipe(card, cardBackFullRecipe)})
  return card;
}

function revealIngredients(card, cardBackIngredients) {
  card.innerHTML = '';
  card.appendChild(cardBackIngredients);
}

function revealFullRecipe(card, cardBackFullRecipe) {
  card.innerHTML = '';
  card.appendChild(cardBackFullRecipe);
}

function showRecipeName(card, cardFront) {
  card.innerHTML = '';
  card.appendChild(cardFront);
}

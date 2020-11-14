window.addEventListener('DOMContentLoaded', function() {fetchCards()});

function fetchCards() {
  let i = 0;
  const randomNumbers = randomNumberGenerator();
  generateGIF();
  const recipes_url = "http://127.0.0.1:3000/recipes"
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(json => randomRecipeCard(json, i, randomNumbers))
}

const generateGIF = function() {
  const main = document.querySelector('main');
  main.innerHTML = ''
  const gifElement = document.createElement('img');
  gifElement.src = '../gifs/shaker.gif'
  main.appendChild(gifElement);
}

let i;

function createButtons(json, i, main, randomNumbers) {
  const buttons = document.createElement('div');
  buttons.classList.add('buttons');
  const nextCardButton = document.createElement('button');
  nextCardButton.classList.add('next-card');
  nextCardButton.innerText = 'Next';
  const previousCardButton = document.createElement('button');
  previousCardButton.classList.add('previous-card');
  previousCardButton.innerText = 'Previous';
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
  if (i < 508) {i++;}
  randomRecipeCard(json, i, randomNumbers);
}

function previousRecipeCard(json, i, randomNumbers) {
  if (i > 0) {i--;}
  randomRecipeCard(json, i, randomNumbers);
}


const randomNumberGenerator = function() {
  const randomNumbers = []
  for(let i = 1; i <= 508; i++) {
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
  //const main = document.querySelector('main');
  const card = document.createElement('div');
  card.classList.add('card')
  const cardInner = document.createElement('div');
  cardInner.classList.add('card-inner')
  const cardFront = document.createElement('div');
  cardFront.classList.add('card-front');
  const cardBack = document.createElement('div');
  cardBack.classList.add('card-back');
  cardFront.innerHTML = `<div.card-front><h2><b>${recipe.attributes.name}</b></h2></div>`
  if (recipe.attributes.liquors.length > 0) {
    const liquorsTitle = document.createElement('h4');
    liquorsTitle.classList.add('liquors-title');
    liquorsTitle.innerHTML = '<b><u>Liquors</u></b>';
    cardBack.appendChild(liquorsTitle)
    const liquorsElement = document.createElement('ul')
    liquorsElement.classList.add('liquors');
    const liquors = recipe.attributes.liquors.forEach( liquor =>
      {const liquor_line = document.createElement('li');
      liquor_line.classList.add('liquor');
      liquor_line.innerHTML = `<li>${liquor.name}</li>`
      liquorsElement.appendChild(liquor_line)
    })
    cardBack.appendChild(liquorsElement);
  }
  if (recipe.attributes.liqueurs.length > 0) {
    const liqueursTitle = document.createElement('h4.liqueursTitle')
    liqueursTitle.innerHTML = '<b><u>Liqueurs</u></b>'
    cardBack.appendChild(liqueursTitle)
    const liqueursElement = document.createElement('ul.liqueurs')
    const liqueurs = recipe.attributes.liqueurs.forEach( liqueur =>
      {const liqueur_line = document.createElement('li.liqueur')
      liqueur_line.innerHTML = `<li>${liqueur.name}</li>`
      liqueursElement.appendChild(liqueur_line)
    })
    cardBack.appendChild(liqueursElement);
  }
  if (recipe.attributes.mixers.length > 0) {
    const mixersTitle = document.createElement('h4.mixersTitle')
    mixersTitle.innerHTML = '<b><u>Mixers</u></b>'
    cardBack.appendChild(mixersTitle)
    const mixersElement = document.createElement('ul.mixers')
    const mixers = recipe.attributes.mixers.forEach( mixer =>
      {const mixer_line = document.createElement('li.mixer')
      mixer_line.innerHTML = `<li>${mixer.name}</li>`
      mixersElement.appendChild(mixer_line)
    })
    cardBack.appendChild(mixersElement);
  }
  if (recipe.attributes.garnishes.length > 0) {
    const garnishesTitle = document.createElement('h4.garnishesTitle')
    garnishesTitle.innerHTML = '<b><u>Garnishes</u></b>'
    cardBack.appendChild(garnishesTitle)
    const garnishesElement = document.createElement('ul.garnishes')
    const garnishes = recipe.attributes.garnishes.forEach( garnish =>
      {const garnish_line = document.createElement('li.garnish')
      garnish_line.innerHTML = `<li>${garnish.name}</li>`
      garnishesElement.appendChild(garnish_line)
    })
    cardBack.appendChild(garnishesElement);
  }
  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner)
  return card;
  //main.appendChild(card);
}

const button = function() {return document.querySelector('button');}

const inputListener = function() {button().addEventListener("click", function() {
  const values = [].slice.call(document.querySelectorAll('input'));
  const selectedValues = values.filter(value => value.checked);
  selectedValueNames = selectedValues.map(selectedValue => selectedValue.value);
  alert(selectedValueNames);
  //return selectedValueNames;
})}

window.addEventListener('DOMContentLoaded', inputListener);

/*
const fetchQuiz = function() {
  const recipes_url = 'http://127.0.0.1:3000/recipes';
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(json => quizEvent(json, selectedValueNames));
}

const buttonListener = function() {button().addEventListener('submit', fetchQuiz)}

window.addEventListener('DOMContentLoaded', buttonListener);

*/
const quizEvent = function(json, selectedValueNames) {
  const recipes = json['data']
  const quizDifficulty = selectedValueNames[0];
  const quizLength = selectedValueNames[1];
  randomRecipes = randomRecipeGenerator(recipes, quizDifficulty, quizLength);
  let i = 0;
  let quizScore = 0;
  runQuestion(i, randomRecipes, quizScore);
}

let allIngredients = [];
let correctIngredients = [];
let correctIngredientNames = [];

function generateQuestion(recipe) {
  const correctIngredients = recipe.attributes.correct_ingredients.flat().flat();
  correctIngredientNames = correctIngredients.flat().map(correctIngredient => correctIngredient.name);
  const main = document.querySelector('main');
  const recipeName = document.createElement('h1');
  recipeName.classList.add('recipe-name');
  recipeName.innerHTML = `<b><u>${recipe.attributes.name}</u></b>`
  main.appendChild(recipeName);
  const ingredientCardsContainer = document.createElement('div');
  ingredientCardsContainer.classList.add('ingredient-cards-container');
  let i = 1;
  recipe.attributes.all_ingredients.flat().flat().forEach(ingredient => {
    const ingredientCard = document.createElement('div');
    ingredientCard.classList.add('ingredient-card');
    ingredientCard.setAttribute('id', `item${i}`);
    ingredientCard.innerText = `${ingredient.name}`
    ingredientCardsContainer.appendChild(ingredientCard);
    i++;
  })
  main.appendChild(ingredientCardsContainer);
}

const evaluateResponse = function(i, randomRecipes, quizScore, questionScore, incorrect, questionStatus) {
  const main = document.querySelector('main')
  const feedback = document.createElement('h1');
  if (correctIngredientNames.includes(this.innerText) && document.getElementById(this.id).style.backgroundColor !== 'green' && document.getElementById(this.id).style.backgroundColor !== 'red') {
    document.getElementById(this.id).style.backgroundColor = 'green';
    feedback.innerText = '✓';
    this.appendChild(feedback);
    questionScore.push('✓');
    if (questionScore.length === correctIngredientNames.length) {
      questionStatus.innerText = 'CORRECT!'
      questionStatus.style.textAlign = 'center'
      main.appendChild(questionStatus);
      i++;
      quizScore += 1;
      runQuestion(i, randomRecipes, quizScore);
      //user.quizScore += 1;
    }
  }
  else if (document.getElementById(this.id).style.backgroundColor !== 'green' && document.getElementById(this.id).style.backgroundColor !== 'red'){
    document.getElementById(this.id).style.backgroundColor = 'red';
    feedback.innerText = 'X';
    this.appendChild(feedback);
    incorrect.push('X');
    if (incorrect.length === 3) {
      questionStatus.innerText = 'WRONG!'
      questionStatus.style.textAlign = 'center'
      main.appendChild(questionStatus);
      i++;
      quizScore +=0;
      runQuestion(i, randomRecipes, quizScore);
      //user.quizScore += 0;
    }
  }
}

const cardEventListener = function(i, randomRecipes, quizScore, questionScore, incorrect, questionStatus) {[].slice.call(document.getElementsByClassName('ingredient-card')).map(card => {
    card.addEventListener('click', function() {
      evaluateResponse.call(card, i, randomRecipes, quizScore, questionScore, incorrect, questionStatus)
    })}
)}

const randomlyGenerateQuestion = function(recipes, quizLength) {
  const questions = []
  for (let i = 0; i < quizLength; i++) {
    const randomNumber = Math.floor(Math.random() * recipes.length);
    const recipe = recipes[randomNumber];
    const question = generateQuestion(recipe);
    if(!questions.includes(recipe)) {
      questions.push(recipe);
    }
  }
}

const randomRecipeGenerator = function(recipes, quizDifficulty, quizLength) {
  let randomRecipes;
  const questions = [];
  const main = document.querySelector('main');

  const easyQuestions = recipes.filter(recipe => recipe.attributes.complexity === 'Easy');
  const mediumQuestions = recipes.filter(recipe => recipe.attributes.complexity === 'Medium');
  const hardQuestions = recipes.filter(recipe => recipe.attributes.complexity === 'Hard');
  const varyHardQuestions = recipes.filter(recipe => recipe.attributes.complexity === 'Very Hard');

  switch(quizDifficulty) {
    case 'Random':
      randomRecipes = randomlyGenerateQuestion(recipes, quizLength);
      break;
    case 'Easy':
      randomRecipes = randomlyGenerateQuestion(easyQuestions, quizLength);
      break;
    case 'Medium':
      randomRecipes = randomlyGenerateQuestion(mediumQuestions, quizLength);
      break;
    case 'Hard':
      randomRecipes = randomlyGenerateQuestion(hardQuestions, quizLength);
      break;
    case 'Very Hard':
      randomRecipes = randomlyGenerateQuestion(mediumQuestions, quizLength);
      break;
  }
  return randomRecipes;
}


const questionEvent = function(i, randomRecipes, quizScore, questionScore, incorrect, questionStatus) {
  generateQuestion(randomRecipes[i]);
  cardEventListener(i, randomRecipes, quizScore, questionScore, incorrect, questionStatus);
}

const runQuestion = function(i, randomRecipes, quizScore) {
  const main = document.querySelector('main');
  main.innerHTML = ''
  let questionScore = [];
  let incorrect = [];
  const questionStatus = document.createElement('h1');
  questionStatus.classList.add('question-status');
  if (i !== randomRecipes.length) {
    questionEvent(i, randomRecipes, quizScore, questionScore, incorrect, questionStatus);
  } else {
    main.innerHTML = '';
    myQuizScore = document.createElement('h1');
    //totalQuizScore = quizScore.reduce(function(accumulator, currentValue) {accumulator + currentValue});
    myQuizScore.innerText = `Your Quiz Score Is: ${quizScore}!`;
    myQuizScore.style.textAlign = 'center';
    main.appendChild(myQuizScore);
    myQuizPercentage = document.createElement('h1');
    percentage = 100*(quizScore/randomRecipes.length);
    myQuizPercentage.innerText = `Your Quiz Score Percentage Is: ${percentage}%!`;
    myQuizPercentage.style.textAlign = 'center';
    main.appendChild(myQuizPercentage);
  }
}

const button = function() {return document.querySelector('button');}

const inputListener = function() {button().addEventListener("click", function(event) {
  event.preventDefault()
  const values = [].slice.call(document.querySelectorAll('input'));
  const selectedValues = values.filter(value => value.checked);
  selectedValueNames = selectedValues.map(selectedValue => selectedValue.value);
  console.log(selectedValueNames)
  return selectedValueNames;
})}

window.addEventListener('DOMContentLoaded', function() {inputListener(); buttonListener();});

const fetchQuiz = function(event) {
  event.preventDefault();
  generateGIF();
  const recipes_url = 'http://127.0.0.1:3000/recipes';
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(json => quizEvent(json, selectedValueNames));
}

const generateGIF = function() {
  const main = document.querySelector('main');
  main.innerHTML = ''
  const gifElement = document.createElement('img');
  gifElement.src = '../../gifs/animated_bartender.gif'
  main.appendChild(gifElement);
}

const buttonListener = function() {button().addEventListener('click', fetchQuiz)}

//window.addEventListener('DOMContentLoaded', buttonListener);


const quizEvent = function(json, selectedValueNames) {
  const recipes = json['data']
  const quizDifficulty = selectedValueNames[0];
  const quizLength = parseInt(selectedValueNames[1]);
  const randomRecipes = randomRecipeGenerator(recipes, quizDifficulty, quizLength);
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
  const randomizedIngredients = shuffle(recipe.attributes.all_ingredients.flat().flat())
  randomizedIngredients.forEach(ingredient => {
    const ingredientCard = document.createElement('div');
    ingredientCard.classList.add('ingredient-card');
    ingredientCard.setAttribute('id', `item${i}`);
    ingredientCard.innerText = `${ingredient.name}`
    ingredientCardsContainer.appendChild(ingredientCard);
    i++;
  })
  main.appendChild(ingredientCardsContainer);
}

function shuffle(allIngredients) {
  return allIngredients.sort(() => Math.random() - 0.5);
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
    randomNumber = Math.floor(Math.random() * recipes.length);
    recipe = recipes[randomNumber];
    const question = generateQuestion(recipe);
    if(!questions.includes(recipe)) {
      questions.push(recipe);
    }
  }
  return questions;
}

const randomRecipeGenerator = function(recipes, quizDifficulty, quizLength) {
  let randomRecipes;
  const questions = [];
  const main = document.querySelector('main');
  switch(quizDifficulty) {
    case 'Random':
      randomRecipes = randomlyGenerateQuestion(recipes, quizLength);
      return randomRecipes;
      break;
    case 'Easy':
      const easyQuestions = recipes.filter(recipe => recipe.attributes.complexity === 'Easy');
      randomRecipes = randomlyGenerateQuestion(easyQuestions, quizLength);
      return randomRecipes;
      break;
    case 'Medium':
      const mediumQuestions = recipes.filter(recipe => recipe.attributes.complexity === 'Medium');
      randomRecipes = randomlyGenerateQuestion(mediumQuestions, quizLength);
      return randomRecipes;
      break;
    case 'Hard':
      const hardQuestions = recipes.filter(recipe => recipe.attributes.complexity === 'Hard');
      randomRecipes = randomlyGenerateQuestion(hardQuestions, quizLength);
      return randomRecipes;
      break;
    case 'Very Hard':
      const varyHardQuestions = recipes.filter(recipe => recipe.attributes.complexity === 'Very Hard');
      randomRecipes = randomlyGenerateQuestion(mediumQuestions, quizLength);
      return randomRecipes;
      break;
  }
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
    myQuizScore.style.color = 'white';
    main.appendChild(myQuizScore);
    myQuizPercentage = document.createElement('h1');
    percentage = 100*(quizScore/randomRecipes.length);
    myQuizPercentage.innerText = `Your Quiz Score Percentage Is: ${percentage}%!`;
    myQuizPercentage.style.textAlign = 'center';
    myQuizPercentage.style.color = 'white';
    main.appendChild(myQuizPercentage);
    const appLinks = document.createElement('div');
    appLinks.classList.add('app-links');
    appLinks.innerHTML = '<a href="../app/home.html">Home</a><br><a href="../app/quiz_with_params.html">Retake Quiz</a><br>';
    appLinks.style.color = 'white';
    appLinks.style.textAlign = 'center';
    main.appendChild(appLinks);
    const submitScore = document.createElement('button');
    submitScore.classList.add('submit-results');
    submitScore.innerText = 'Submit Score';
    submitScore.style.textAlign = 'center';
    main.appendChild(submitScore);
    submitScore.addEventListener('click', function() {createLeaderboardForm()});
    const submitName = document.querySelector('button');
    //submitName.addEventListener('click', )
  }
}

 const createLeaderboardForm = function(){
    const main = document.querySelector('main');
    main.innerHTML = '';
    const leaderboardForm = document.createElement('div');
    leaderboardForm.innerHTML = '<form action="http://localhost:3000/users/create" method="POST"><input type="text" name="user[name]" value="name"> <button type="submit" value="Submit">Submit</button></form?'
    main.appendChild(leaderboardForm);
  }

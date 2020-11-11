const buttonListener = function() {document.querySelector('button').addEventListener("click", function() {
  const values = [].slice.call(document.querySelectorAll('input'));
  const selectedValues = values.filter(value => value.checked);
  selectedValueNames = selectedValues.map(selectedValue => selectedValue.value);
  alert(selectedValueNames);
})}

window.addEventListener('DOMContentLoaded', buttonListener);


function fetchQuizNoParams() {
  const recipes_url = 'http://127.0.0.1:3000/recipes'
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(json => quizEvent(json))//generateQuizNoParams(json));
}

//window.addEventListener('DOMContentLoaded', function() {fetchQuizNoParams()});

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

const randomRecipeGenerator = function(recipes, questionNumber = 10) {
  const randomRecipes = [];
  for(let i = 1; i <= questionNumber; i++) {
    const randomNumber = Math.floor(Math.random()*508);
    const randomRecipe = recipes[randomNumber];
    //if (!randomRecipes.includes(randomRecipe)) {
      randomRecipes.push(randomRecipe);
    //}
  }
  return randomRecipes;
}


const questionEvent = function(i, randomRecipes, quizScore, questionScore, incorrect, questionStatus) {
  generateQuestion(randomRecipes[i])
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

const quizEvent = function(json) {
  const recipes = json['data']
  randomRecipes = randomRecipeGenerator(recipes);
  let i = 0;
  let quizScore = 0;
  runQuestion(i, randomRecipes, quizScore);
}


/*
let points = 0;
let questionStatus;
let userIncorrectResponses = [];
let userCorrectResponses = [];
let userResponses = [];
/*



function questionResponse(question) {
  questionStatus = 'Incomplete'
  allIngredients = question.allIngredients;
  correctIngredients = question.correctIngredients;
  correctIngredientNames = correctIngredients.map(correctIngredient => {return correctIngredient.id});
  while (userCorrectResponses.length < correctIngredients.length && userIncorrectResponses < 3) {
    if (userIncorrectResponses.length === 3) {
      points += 0;
      alert = 'Wrong!';
    }
    if (userCorrectResponses.length === correctIngredients.length) {
      points += 1;
      alert = 'Correct!';
    }
  }
  questionStatus = 'Complete';
  return questionStatus;
}



/*function calculateQuizScore(json) {

  questionResponse(recipe);
  [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue
  })

}











/*

let difficulty;
let length;

const difficulty_input = document.querySelector('difficulty_button').addEventListener('click', function {difficulty = `${this.innerText}`});
const length_input = document.querySelector('length_button').addEventListener('click'), function {length = `${this.innerText}`});
function fetchQuiz(difficulty, length) {
  const recipes_url = 'http://127.0.0.1:3000/recipes'
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(json => renderQuiz(json, difficulty, length))
}


function renderQuiz(json, difficulty, length) {
  json['data'].forEach(recipe => generateQuiz(recipe, difficulty, length))
}

function generateQuiz(recipe, difficulty, length) {
  questions = [];
  const main = document.querySelector('main');
  const easyQuestions = json.filter(recipe => recipe.attributes.complexity === 'Easy');
  const mediumQuestions = json.filter(recipe => recipe.attributes.complexity === 'Medium');
  const hardQuestions = json.filter(recipe => recipe.attributes.complexity === 'Hard');
  const varyHardQuestions = json.filter(recipe => recipe.attributes.complexity === 'Very Hard');
  switch(length) {
    case '5':
      length = 5;
      break;
    case '10':
      length = 10;
      break;
    case '25':
      length = 25;
      break;
    case '50':
      length = 50;
      break;
    case '100':
      length = 100;
      break;
  }
  switch(difficulty) {
    case 'Random':
      while (questions.length < length) {
        const randomNumber = Math.floor(Math.random() * 508);
        const recipe = json[randomNumber];
        const question = generateQuestion(recipe);
        if(!questions.includes(recipe)) {
            questions.push(recipe);
          }
      }
      break;
    case 'Easy':
      while (questions.length < length) {
        const randomNumber = Math.floor(Math.random() * 86);
        const recipe = easyQuestions[randomNumber];
        const question = generateQuestion(recipe);
        if(!questions.includes(recipe)) {
            questions.push(recipe);
          }
      }
      break;
    case 'Medium':
      while (questions.length < length ) {
        const randomNumber = Math.floor(Math.random() * 234);
        const recipe = mediumQuestions[randomNumber];
        const question = generateQuestion(recipe);
        if(!questions.includes(recipe)) {
            questions.push(recipe);
          }
      }
      break;
    case 'Hard':
      while (questions.length < length) {
        const randomNumber = Math.floor(Math.random() * 138);
        const recipe = hardQuestions[randomNumber];
        const question = generateQuestion(recipe);
        if(!questions.includes(recipe)) {
            questions.push(recipe);
          }
      }
      break;
    case 'Very Hard':
      while (questions.length < length) {
        const randomNumber = Math.floor(Math.random() * 53);
        const recipe = veryHardQuestions[randomNumber];
        const question = generateQuestion(recipe);
        if(!questions.includes(recipe)) {
            questions.push(recipe)
          }
      }
      break;
  }
}

*/

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
  recipeName.innerText = `${recipe.attributes.name}`
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

const cards = function(){[].slice.call(document.getElementsByClassName('ingredient-card'));}

const cardEventListener = function(questionScore, incorrect) {[].slice.call(document.getElementsByClassName('ingredient-card')).map(card => {
    const main = document.querySelector('main')
    const feedback = document.createElement('h1');
    questionStatus = document.querySelector('h1.question-status');
    card.addEventListener('click', function() {  //userResponses.push(currentIngredient);
      if (correctIngredientNames.includes(this.innerText)) {
        //userCorrectResponses.push(currentIngredient);
        document.getElementById(this.id).style.backgroundColor = 'green';
        feedback.innerText = '✓';
        this.appendChild(feedback);
        questionScore += 1;
        if (questionScore === correctIngredientNames.length) {
          questionStatus.innerText = 'CORRECT!'
          questionStatus.style.textAlign = 'center'
          main.appendChild(questionStatus);
          //user.quizScore += 1;
        }
    } else {
        //userIncorrectResponses.push(currentIngredient);
        document.getElementById(this.id).style.backgroundColor = 'red';
        feedback.innerText = 'X';
        this.appendChild(feedback);
        incorrect.push('X');
        if (incorrect.length === 3) {
          questionStatus.innerText = 'WRONG!'
          questionStatus.style.textAlign = 'center'
          main.appendChild(questionStatus);
          //user.quizScore += 0;
        }
    }}
)})}

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



const checkQuestionStatus = function(i) {
  let findQuestionStatus = document.querySelector('h1.question-status');
  if (findQuestionStatus !== null) {
    i++;
    return true;
     }
  else {
    setTimeout(checkQuestionStatus, 200000);
  }
}

const questionEvent = function(recipe, questionScore, incorrect) {
  generateQuestion(recipe)
  cardEventListener(questionScore, incorrect);
}

const runQuestion = function(recipe) {
  let questionScore = 0;
  let incorrect = [];
  const main = document.querySelector('main');
  let questionStatus = document.createElement('h1');
  questionStatus.classList.add('question-status');
  questionEvent(recipe, questionScore, incorrect);
}

const quizEvent = function(json) {
  const recipes = json['data']
  randomRecipes = randomRecipeGenerator(recipes);
  let i = 0;
  if (!checkQuestionStatus(i)) {
    runQuestion(randomRecipes[i]);
  }
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

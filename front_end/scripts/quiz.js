function fetchQuizNoParams() {
  const recipes_url = 'http://127.0.0.1:3000/recipes'
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(json => generateQuizNoParams(json));
}

let allIngredients = [];
let correctIngredients = [];
let correctIngredientIds = [];

function generateQuizNoParams(json) { //Generates quiz with no user parameters
  const randomRecipes = [];
  const recipes = json["data"]
  for(let i = 1; i <= 2; i++) {
    const randomNumber = Math.floor(Math.random()*508);
    const randomRecipe = recipes[randomNumber];
    //if (!randomRecipes.includes(randomRecipe)) {

      randomRecipes.push(randomRecipe);
    //}
  }
  const questions = randomRecipes.map(recipe =>
    {
      //allIngredients = [];
      //correctIngredients = [];
      generateQuestion(recipe);
    });
  return questions;
}

/*function renderQuestionsNoParams(questions) {
  for(let i = 0; i < questions.length; i++)
  {
    if (questions[i] === 'Incomplete')
    {
      questions[i]();
    }
  }
}*/

function generateQuestion(recipe) {
  allIngredients = recipe.attributes.all_ingredients;
  correctIngredients = recipe.attributes.correct_ingredients;
  const main = document.querySelector('main');
  const recipeName = document.createElement('h1');
  recipeName.classList.add('recipe-name');
  recipeName.innerText = `${recipe.attributes.name}`
  main.appendChild(recipeName);
  const ingredientCardsContainer = document.createElement('div');
  ingredientCardsContainer.classList.add('ingredient-cards-container');
  let i = 1;
  recipe.attributes.all_ingredients.flat().forEach(ingredient => {
    const ingredientCard = document.createElement('div');
    ingredientCard.classList.add('ingredient-card');
    ingredientCard.setAttribute('id', `item${i}`);
    const ingredientCardDetail = document.createElement('div');
    ingredientCardDetail.classList.add('ingredient-card-detail');
    ingredientCardDetail.innerText = `${ingredient.name}`
    ingredientCard.appendChild(ingredientCardDetail);
    ingredientCardsContainer.appendChild(ingredientCard);
    i++;
  })
  main.appendChild(ingredientCardsContainer);
  //return ingredients = {allIngredients: recipe.attributes.all_ingredients, correctIngredients: recipe.attributes.correct_ingredients}
}


document.querySelectorAll('div.ingredient-card').forEach(ingredientCard => {ingredientCard.addEventListener('click', responseHandler())});

function responseHandler() {
  //userResponses.push(currentIngredient);
  if (correctIngredientIds.includes(this.id)) {
    alert = 'Correct!'
    //userCorrectResponses.push(currentIngredient);
    this.style.color = 'green';
  } else {
    alert = 'Wrong!'
    //userIncorrectResponses.push(currentIngredient);
    this.style.color = 'red';
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
  correctIngredientIds = correctIngredients.map(correctIngredient => {return correctIngredient.id});
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
  json["data"].forEach(recipe => generateQuiz(recipe, difficulty, length))
}

function generateQuiz(recipe, difficulty, length) {
  questions = [];
  const main = document.querySelector('main');
  const easyQuestions = json.filter(recipe => recipe.attributes.complexity === "Easy");
  const mediumQuestions = json.filter(recipe => recipe.attributes.complexity === "Medium");
  const hardQuestions = json.filter(recipe => recipe.attributes.complexity === "Hard");
  const varyHardQuestions = json.filter(recipe => recipe.attributes.complexity === "Very Hard");
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

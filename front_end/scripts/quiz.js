function fetchQuizNoParams() {
  const recipes_url = 'http://127.0.0.1:3000/recipes'
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(recipes => generateQuizNoParams(recipes))
}

function generateQuizNoParams(recipes) { //Generates quiz with no user parameters
  const randomRecipes = []
  for(let i = 0; i < 10; i++) {
    randomNumber = Math.floor(Math.random()*508);
    randomRecipe = recipes[randomNumber];
    if !randomRecipes.includes(randomRecipe) {
      randomRecipes.push(randomRecipe);
    }
  }
  const questions = randomRecipes.map(recipe => generateQuestion(recipe));
  questions.forEach(question => questionResponse(renderQuestion(question));
}

function generateQuestion(recipe) {
  const main = document.querySelector('main');
  const recipeName = document.createElement('h1');
  recipeName.classList.add('recipe-name');
  main.appendChild(recipeName);
  const ingredientCardsContainer = document.createElement('div');
  ingredientCardsContainer.classList.add('ingredient-cards-container');
  let i = 0;
  recipe.attributes.all_ingredients.forEach(ingredient => {
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
}

function renderQuestion(question) {


}

const userIncorrectIngredients = [];
const userCorrectIngredients = [];
const userIngredients = [];
const points = 0;

function questionResponse(recipe) {
  const correctIngredients = recipe.attributes.correct_ingredients;
  while (userCorrectIngredients.length < correctIngredients.length && userIncorrectIngredients < 3) {
    if (userIncorrectIngredients.length === 3) {
      points += 0;
      alert = 'Wrong!';
    }
    if (userCorrectIngredients.length === correctIngredients.length) {
      points += 1;
      alert = 'Correct!';
    }
  }
}

function calculateQuizScore(recipes) {

  questionResponse(recipe);
  [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue
  })

}



const ingredientCardContainers = document.getElementsByClassName('ingredient-card-container');


ingredientCardContainers.addEventListener("click", responseHandler(recipe));

function responseHandler(recipe) {
  const correctIngredients = recipe.attributes.correct_ingredients;
  correctIngredientIds = correctIngredients.map(correctIngredient = > {return correctIngredient.id});
  userIngredients.push(currentIngredient);
  if correctIngredientIds.include(this.id) {
    alert = 'Correct!'
    userCorrectIngredients.push(currentIngredient);
    this.background.color = 'green';
  } else {
    alert = 'Wrong!'
    userIncorrectIngredients.push(currentIngredient);
    this.background.color = 'red';
  }
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
  .then(recipes => renderQuiz(recipes, difficulty, length))
}


function renderQuiz(recipes, difficulty, length) {
  recipes["data"].forEach(recipe => generateQuiz(recipe, difficulty, length))
}

function generateQuiz(recipe, difficulty, length) {
  questions = [];
  const main = document.querySelector('main');
  const easyQuestions = recipes.filter(recipe => recipe.attributes.complexity === "Easy");
  const mediumQuestions = recipes.filter(recipe => recipe.attributes.complexity === "Medium");
  const hardQuestions = recipes.filter(recipe => recipe.attributes.complexity === "Hard");
  const varyHardQuestions = recipes.filter(recipe => recipe.attributes.complexity === "Very Hard");
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
        const recipe = recipes[randomNumber];
        const question = generateQuestion(recipe);
        if(!questions.include(recipe)) {
            questions.push(recipe);
          }
      }
      break;
    case 'Easy':
      while (questions.length < length) {
        const randomNumber = Math.floor(Math.random() * 86);
        const recipe = easyQuestions[randomNumber];
        const question = generateQuestion(recipe);
        if(!questions.include(recipe)) {
            questions.push(recipe);
          }
      }
      break;
    case 'Medium':
      while (questions.length < length ) {
        const randomNumber = Math.floor(Math.random() * 234);
        const recipe = mediumQuestions[randomNumber];
        const question = generateQuestion(recipe);
        if(!questions.include(recipe)) {
            questions.push(recipe);
          }
      }
      break;
    case 'Hard':
      while (questions.length < length) {
        const randomNumber = Math.floor(Math.random() * 138);
        const recipe = hardQuestions[randomNumber];
        const question = generateQuestion(recipe);
        if(!questions.include(recipe)) {
            questions.push(recipe);
          }
      }
      break;
    case 'Very Hard':
      while (questions.length < length) {
        const randomNumber = Math.floor(Math.random() * 53);
        const recipe = veryHardQuestions[randomNumber];
        const question = generateQuestion(recipe);
        if(!questions.include(recipe)) {
            questions.push(recipe)
          }
      }
      break;
  }
}

*/

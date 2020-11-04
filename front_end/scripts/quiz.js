function fetchQuiz(difficulty_input, length_input) {
  const recipes_url = 'http://127.0.0.1:3000/recipes'
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(recipes => renderQuiz(recipes, difficulty_input, length_input))
}

function renderQuiz(recipes, difficulty_input, length_input) {
  recipes["data"].forEach(recipe => generateQuiz(recipe, difficulty_input, length_input))
}

function generateQuiz(recipe, difficulty_input, length_input) {
  questions = [];
  const main = document.querySelector('main');
  const easyQuestions = recipes.filter(recipe => recipe.attributes.complexity === "Easy");
  const mediumQuestions = recipes.filter(recipe => recipe.attributes.complexity === "Medium");
  const hardQuestions = recipes.filter(recipe => recipe.attributes.complexity === "Hard");
  const varyHardQuestions = recipes.filter(recipe => recipe.attributes.complexity === "Very Hard");
  switch(length_input) {
    case '5':
      length_input = 5;
      break;
    case '10':
      length_input = 10;
      break;
    case '15':
      length_input = 15;
      break;
    case '20':
      length_input = 20;
      break
    case '25':
      length_input = 25;
      break;
    case '50':
      length_input = 50;
      break;
    case '100':
      length_input = 100;
      break;
  }
  switch(difficulty_input) {
    case 'Random':
      while (questions.length < length_input) {
        const randomNumber = Math.floor(Math.random() * 508);
        const recipe = recipes[randomNumber];
        const question = generateQuestion(recipe);
        if(!questions.include(recipe)) {
            questions.push(recipe);
          }
      }
      break;
    case 'Easy':
      while (questions.length < length_input) {
        const randomNumber = Math.floor(Math.random() * 86);
        const recipe = easyQuestions[randomNumber];
        const question = generateQuestion(recipe);
        if(!questions.include(recipe)) {
            questions.push(recipe);
          }
      }
      break;
    case 'Medium':
      while (questions.length < length_input ) {
        const randomNumber = Math.floor(Math.random() * 234);
        const recipe = mediumQuestions[randomNumber];
        const question = generateQuestion(recipe);
        if(!questions.include(recipe)) {
            questions.push(recipe);
          }
      }
      break;
    case 'Hard':
      while (questions.length < length_input) {
        const randomNumber = Math.floor(Math.random() * 138);
        const recipe = hardQuestions[randomNumber];
        const question = generateQuestion(recipe);
        if(!questions.include(recipe)) {
            questions.push(recipe);
          }
      }
      break;
    case 'Very Hard':
      while (questions.length < length_input) {
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

function generateQuestion(recipe) {
  const main = document.querySelector('main');
  const recipeName = document.createElement('h1');
  recipeName.classList.add('recipe-name');
  main.appendChild(recipeName);
  const ingredientCards = document.createElement('div');
  ingredientCards.classList.add('ingredient-cards');
  let i = 0;
  recipe.attributes.all_ingredients.forEach(ingredient => {
    const ingredientCard = document.createElement('div');
    ingredientCard.classList.add('ingredient-card-container');
    ingredientCard.setAttribute('id', `${i}`);
    const ingredientCardDetail = document.createElement('div');
    ingredientCardDetail.classList.add('ingredient-card-detail');
    ingredientCardDetail.innerText = `${ingredient.name}`
    ingredientCard.appendChild(ingredientCardDetail);
    ingredientCards.appendChild(ingredientCard);
    i++;
  })
  main.appendChild(ingredientCards);
}

function renderQuestion(recipes) { //Renders Cocktail Recipe Question
  recipes["data"].forEach(recipe => generateQuestion(recipe))
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

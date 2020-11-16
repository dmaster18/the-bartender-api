class Quiz {
  constructor() {}

  inputListener() {button().addEventListener("click", function(event) {
    event.preventDefault()
    const values = [].slice.call(document.querySelectorAll('input'));
    const selectedValues = values.filter(value => value.checked);
    selectedValueNames = selectedValues.map(selectedValue => selectedValue.value);
    console.log(selectedValueNames)
    return selectedValueNames;
  })}

  fetchQuiz() {
    const recipes_url = 'http://127.0.0.1:3000/recipes';
    return fetch(recipes_url)
    .then(resp => resp.json())
  }

  render(event) {
    const main = document.querySelector('main');
    event.preventDefault();
    generateGIF();
    this.renderLoadingState(main);
    let i = 0;
    const randomNumbers = this.randomNumberGenerator();
    this.fetchQuiz().then(json => quizEvent(json, selectedValueNames));
  }

  quizEvent(json, selectedValueNames) {
    const recipes = json['data']
    const quizDifficulty = selectedValueNames[0];
    const quizLength = parseInt(selectedValueNames[1]);
    const randomRecipes = randomRecipeGenerator(recipes, quizDifficulty, quizLength);
    let i = 0;
    let quizScore = 0;
    runQuestion(i, randomRecipes, quizScore);
  }

  generateGIF() {
    const main = document.querySelector('main');
    main.innerHTML = ''
    const gifElement = document.createElement('img');
    gifElement.src = '../gifs/animated_bartender.gif'
    main.appendChild(gifElement);
  }

  buttonListener() {button().addEventListener('click', fetchQuiz)}



  let allIngredients = [];
  let correctIngredients = [];
  let correctIngredientNames = [];

  generateQuestion(recipe) {
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

  shuffle(allIngredients) {
    return allIngredients.sort(() => Math.random() - 0.5);
  }

  evaluateResponse(i, randomRecipes, quizScore, questionScore, incorrect, questionStatus) {
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
      }
    }
  }

  cardEventListener(i, randomRecipes, quizScore, questionScore, incorrect, questionStatus) {[].slice.call(document.getElementsByClassName('ingredient-card')).map(card => {
      card.addEventListener('click', () => {
        evaluateResponse.call(card, i, randomRecipes, quizScore, questionScore, incorrect, questionStatus)
      })}
  )}

  randomlyGenerateQuestion(recipes, quizLength) {
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

  randomRecipeGenerator(recipes, quizDifficulty, quizLength) {
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


  questionEvent(i, randomRecipes, quizScore, questionScore, incorrect, questionStatus) {
    generateQuestion(randomRecipes[i]);
    cardEventListener(i, randomRecipes, quizScore, questionScore, incorrect, questionStatus);
  }

  runQuestion(i, randomRecipes, quizScore) {
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
      myQuizScore.innerText = `Your Quiz Score Is: ${quizScore} Points!`;
      myQuizScore.style.textAlign = 'center';
      myQuizScore.style.color = 'white';
      main.appendChild(myQuizScore);
      myQuizPercentage = document.createElement('h1');
      percentage = 100*(quizScore/randomRecipes.length);
      myQuizPercentage.innerText = `Your Quiz Score Percentage Is: ${percentage}%!`;
      myQuizPercentage.style.textAlign = 'center';
      myQuizPercentage.style.color = 'white';
      main.appendChild(myQuizPercentage);
      const submitScoreButtonContainer = document.createElement('div');
      submitScoreButtonContainer.style.textAlign = 'center';
      const submitScore = document.createElement('button');
      submitScore.classList.add('submit-results');
      submitScore.innerText = 'Submit Score';
      submitScore.style.textAlign = 'center';
      submitScoreButtonContainer.appendChild(submitScore);
      main.appendChild(submitScoreButtonContainer);
      submitScore.addEventListener('click', () => {submitUserData(quizScore, percentage)});
    }
  }

   submitUserData(quizScore, percentage){
      const main = document.querySelector('main');
      main.innerHTML = '';
      const leaderboardForm = document.createElement('div');
      leaderboardForm.innerHTML = '<form><label for="user[name]">Enter your name:</label><input type="text" name="user[name]" id="user[name]"><input type="hidden" id="user[score]" name="user[score]"><input type="hidden" id="user[percentage]" name="user[percentage]"><button type="submit" value="Submit" id="form-submit-button">Submit</button></form>'
      main.appendChild(leaderboardForm);

      const formSubmitButton = document.getElementById('form-submit-button');
      formSubmitButton.addEventListener('click', function(event)
      {
        event.preventDefault();
        const name = document.getElementById("user[name]").value;
        const data = {user: {name, score: quizScore, percentage}}
        const users_url = 'http://127.0.0.1:3000/users'
        return fetch(users_url, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)})
        .then(() => {window.location.href = 'leaderboard.html'})
      });
    }


}

const quiz = new Quiz();

window.addEventListener('DOMContentLoaded', () => {quiz.render()});



window.addEventListener('DOMContentLoaded', function() {inputListener(); buttonListener();});

const button = function() {return document.querySelector('button');}

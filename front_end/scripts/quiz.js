let correctIngredientNames = [];
/*let randomRecipes = [];
let i = 0;
let quizScore;*/

class Quiz {
  constructor(i, quizScore, randomRecipes) {
    this.i = 0;
    this.quizScore = 0;
    this.randomRecipes = [];
    //this.correctIngredientNames = [];
    this.selectedValueNames = [];
  }

  button() {
    return document.querySelector('button');
  }

  inputListener() {
    this.button().addEventListener('click', (event) => {
      event.preventDefault()
      const values = [].slice.call(document.querySelectorAll('input'));
      const selectedValues = values.filter(value => value.checked);
      this.selectedValueNames = (selectedValues.map(selectedValue => selectedValue.value));
      console.log(this.selectedValueNames)
      return this.selectedValueNames;
    }
  )}

  buttonListener() {
    this.button().addEventListener('click', () => {this.renderQuiz()});
  }

  initiateQuiz() {
    this.inputListener();
    this.buttonListener();
  }

  fetchQuiz() {
    const recipes_url = 'http://127.0.0.1:3000/recipes';
    return fetch(recipes_url)
    .then(resp => resp.json())
  }

  renderQuiz() {
    const main = document.querySelector('main');
    this.renderLoadingState(main);
    this.fetchQuiz().then(json => this.quizEvent(json));
  }

  renderLoadingState(main) {
    main.innerHTML = ''
    const gifElement = document.createElement('img');
    gifElement.src = '../gifs/animated_bartender.gif'
    main.appendChild(gifElement);
  }

  quizEvent(json) {
    const recipes = json['data']
    const quizDifficulty = this.selectedValueNames[0];
    const quizLength = parseInt(this.selectedValueNames[1]);
    this.randomRecipes = this.randomRecipeGenerator(recipes, quizDifficulty, quizLength);
    this.runQuestion();
  }

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
    let j = 1;
    const randomizedIngredients = this.shuffle(recipe.attributes.all_ingredients.flat().flat())
    randomizedIngredients.forEach(ingredient => {
      const ingredientCard = document.createElement('div');
      ingredientCard.classList.add('ingredient-card');
      ingredientCard.setAttribute('id', `item${j}`);
      ingredientCard.innerText = `${ingredient.name}`
      ingredientCardsContainer.appendChild(ingredientCard);
      j++;
    })
    main.appendChild(ingredientCardsContainer);
  }

  shuffle(allIngredients) {
    return allIngredients.sort(() => Math.random() - 0.5);
  }

  evaluateResponse(questionScore, incorrect, questionStatus) {
    const main = document.querySelector('main');
    const feedback = document.createElement('h1');
    if (correctIngredientNames.includes(this.innerText) && document.getElementById(this.id).style.backgroundColor !== 'green' && document.getElementById(this.id).style.backgroundColor !== 'red') {
      document.getElementById(this.id).style.backgroundColor = 'green';
      feedback.innerText = '✓';
      this.appendChild(feedback);
      questionScore.push('✓');
      if (questionScore.length === correctIngredientNames.length) {
        questionStatus.innerText = 'CORRECT!';
        questionStatus.style.color = 'green';
        main.innerHTML = '';
        main.appendChild(questionStatus);
        this.quizScore += 1;
        const nextQuestionButtonContainer = document.createElement('div');
        nextQuestionButtonContainer.id = 'next-question-container';
        const nextQuestionButton = document.createElement('button');
        nextQuestionButton.id = 'next-question';
        nextQuestionButton.innerHTML = 'Next Question';
        nextQuestionButtonContainer.appendChild(nextQuestionButton);
        main.appendChild(nextQuestionButtonContainer);
        return questionScore;
      }
    }
    else if (document.getElementById(this.id).style.backgroundColor !== 'green' && document.getElementById(this.id).style.backgroundColor !== 'red'){
      document.getElementById(this.id).style.backgroundColor = 'red';
      feedback.innerText = 'X';
      this.appendChild(feedback);
      incorrect.push('X');
      if (incorrect.length === 3) {
        questionStatus.innerText = 'WRONG!';
        questionStatus.style.color = 'red';
        main.innerHTML = '';
        main.appendChild(questionStatus);
        this.quizScore +=0;
        const nextQuestionButtonContainer = document.createElement('div');
        nextQuestionButtonContainer.id = 'next-question-container';
        const nextQuestionButton = document.createElement('button');
        nextQuestionButton.id = 'next-question';
        nextQuestionButton.innerHTML = 'Next Question';
        nextQuestionButtonContainer.appendChild(nextQuestionButton);
        main.appendChild(nextQuestionButtonContainer);
        return incorrect;
      }
    }
  }

  cardEventListener(questionScore, incorrect, questionStatus) {[].slice.call(document.getElementsByClassName('ingredient-card')).map(card => {
      card.addEventListener('click', () => {
        this.evaluateResponse.call(card, questionScore, incorrect, questionStatus);
      })}
  )
      if (questionScore.length === 3 || incorrect.length === 3){
        this.nextQuestionButtonListener();
      }
  }

  randomlyGenerateQuestion(recipes, quizLength) {
    const questions = []
    for (let k = 0; k < quizLength; k++) {
      const randomNumber = Math.floor(Math.random() * recipes.length);
      const recipe = recipes[randomNumber];
      const question = this.generateQuestion(recipe);
      if(!questions.includes(recipe)) {
        questions.push(recipe);
      }
    }
    return questions;
  }

  randomRecipeGenerator(recipes, quizDifficulty, quizLength) {
    const questions = [];
    const main = document.querySelector('main');
    switch(quizDifficulty) {
      case 'Random':
        this.randomRecipes = this.randomlyGenerateQuestion(recipes, quizLength);
        return this.randomRecipes;
        break;
      case 'Easy':
        const easyQuestions = recipes.filter(recipe => recipe.attributes.complexity === 'Easy');
        this.randomRecipes = this.randomlyGenerateQuestion(easyQuestions, quizLength);
        return this.randomRecipes;
        break;
      case 'Medium':
        const mediumQuestions = recipes.filter(recipe => recipe.attributes.complexity === 'Medium');
        this.randomRecipes = this.randomlyGenerateQuestion(mediumQuestions, quizLength);
        return this.randomRecipes;
        break;
      case 'Hard':
        const hardQuestions = recipes.filter(recipe => recipe.attributes.complexity === 'Hard');
        this.randomRecipes = this.randomlyGenerateQuestion(hardQuestions, quizLength);
        return this.randomRecipes;
        break;
      case 'Very Hard':
        const varyHardQuestions = recipes.filter(recipe => recipe.attributes.complexity === 'Very Hard');
        this.randomRecipes = this.randomlyGenerateQuestion(mediumQuestions, quizLength);
        return this.randomRecipes;
        break;
    }
  }

  questionEvent(questionScore, incorrect, questionStatus) {
    this.generateQuestion(this.randomRecipes[this.i]);
    this.cardEventListener.call(thisQuiz, questionScore, incorrect, questionStatus);
  }

  nextQuestionButton() {
    const nextQuestionButtonContainer = document.createElement('div');
    nextQuestionButtonContainer.id = 'next-question-container';
    const nextQuestionButton = document.createElement('button');
    nextQuestionButton.id = 'next-question';
    nextQuestionButton.innerHTML = 'Next Question';
    nextQuestionButtonContainer.appendChild(nextQuestionButton);
    main.appendChild(nextQuestionButtonContainer);
  }

  nextQuestionButtonFinder() {
    return document.getElementById('next-question');
  }

  nextQuestionButtonListener() {
    this.nextQuestionButtonFinder().addEventListener('click', () => {
      this.i++;
      this.runQuestion();
    })
  }

  runQuestion() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    let questionScore = [];
    let incorrect = [];
    const questionStatus = document.createElement('h1');
    questionStatus.classList.add('question-status');
    if (this.i !== this.randomRecipes.length) {
      this.questionEvent(questionScore, incorrect, questionStatus);
    } else {
      main.innerHTML = '';
      const myQuizScore = document.createElement('h1');
      myQuizScore.innerText = `Your Quiz Score Is: ${this.quizScore} Points!`;
      main.appendChild(myQuizScore);
      const myQuizPercentage = document.createElement('h1');
      const percentage = 100*(this.quizScore/this.randomRecipes.length);
      myQuizPercentage.innerText = `Your Quiz Score Percentage Is: ${percentage}%!`;
      main.appendChild(myQuizPercentage);
      const submitScoreButtonContainer = document.createElement('div');
      submitScoreButtonContainer.classList.add('submit-button-container')
      const submitScore = document.createElement('button');
      submitScore.classList.add('submit-results');
      submitScore.innerText = 'Submit Score';
      submitScoreButtonContainer.appendChild(submitScore);
      main.appendChild(submitScoreButtonContainer);
      submitScore.addEventListener('click', () => {this.submitUserData(percentage)});
    }
  }

   submitUserData(percentage){
      const main = document.querySelector('main');
      main.innerHTML = '';
      const leaderboardForm = document.createElement('div');
      leaderboardForm.innerHTML = '<form><label for="user[name]">Enter your name:</label><input type="text" name="user[name]" id="user[name]"><input type="hidden" id="user[score]" name="user[score]"><input type="hidden" id="user[percentage]" name="user[percentage]"><button type="submit" value="Submit" id="form-submit-button">Submit</button></form>'
      main.appendChild(leaderboardForm);
      const formSubmitButton = document.getElementById('form-submit-button');
      formSubmitButton.addEventListener('click', (event) =>
      {
        event.preventDefault();
        const name = document.getElementById('user[name]').value;
        const data = {user: {name, score: this.quizScore, percentage}}
        const users_url = 'http://127.0.0.1:3000/users'
        return fetch(users_url, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)})
        .then(() => {window.location.href = 'leaderboard.html'})
      });
    }
}

const quiz = new Quiz(0, 0, []);

window.addEventListener('DOMContentLoaded', () => {quiz.initiateQuiz()});

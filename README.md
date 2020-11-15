# The Bartender App

The Bartender App is intended to teach users, ranging from the casual cocktail maker to the experienced bartender, how to make new and exciting drinks. It contains study and quiz modules that, respectively, instruct and test users on hundreds of cocktails. Those who feel they have performed particularly well on the quiz can show off their drink-making knowledge by submitting their names on the app's leaderboard.

## Installation

The Bartender App can be downloaded from https://github.com/dmaster18/the-bartender-api. Once the program is downloaded, go to the program's directory from your local Terminal/Command Line and then run bundle install or bundle exec install to ensure all the dependencies are installed. After, run rails (or rake) db:migrate to set up the database. In order to populate the database with approximately 500 drink cocktails, subsequently run rails (or rake) db:seed.

Once all the dependencies have been installed and deals have been created, run the rails s command from your machine to run the rails server.

## Usage

Once the server is up and running, open a separate terminal window and go to the following directory of the application: "the-bartender-api/front_end/htmls". From this directory, run the "home.html" in your terminal window. On Windows machines, type "home.html" into Command Prompt. On Mac and Linux machines, enter "open home.html" into Terminal.

The user should be taken directly to the app's homepage on his or her local machine's default web browser. From there, the user can click a link to study cocktails, a link to take a quiz, or view the leaderboard.

In the study module, the user is presented with cocktails on index cards that have the name of the cocktail on the front-facing side. When the user wants to know the answer, he or she can press one of two buttons, either the "Reveal Ingredients Only" button or the "Reveal Ingredients + Measurements" button. As the names of these buttons suggest, the former simply shows the cocktail's ingredients, and the latter shows the cocktail's ingredients and respective portions. When done learning a particular cocktail, the user can move on to the next on by pressing the "Next" button below. If the user would like to review a particular recipe again, he or she can return to it by pressing the "Previous" button.

In the app's quiz feature, the user can choose the difficulty and length of the quiz. A quiz can have one of the following difficulties: "Easy", "Medium", "Hard", "Very Hard", or "Random". The app evaluates a given cocktail's difficulty by the number of ingredients it contains. "Easy" cocktails have three or fewer ingredients. "Medium" cocktails have five or fewer ingredients. "Hard" cocktails have seven or fewer ingredients, and "Very Hard" cocktail have eight or more ingredients. The "Random" difficulty can contain cocktails from any of these categories, ranging from "Easy" to "Very Hard". Additionally, the user can choose the length of the quiz, which can have either 5, 10, 25, 50, or 100 questions.

After setting the difficulty and length parameters, the user can begin the quiz. In each question, the user must select all the ingredients that belong to the cocktail recipe. If the user correctly selects an ingredient card, it will turn green and have a checkmark on it. However, if the user chooses an incorrect ingredient card, it will become red and bear an X on it. If the user selects three wrong ingredients for any given question, the answer will be considered incorrect and the user will be rewarded zero points. If the user correctly selects all the ingredients before receiving three X's, he or she will receive one point. Upon completing all the quiz's questions, the user will see both his or her final raw point score and percentage score. From this point, if feeling confident, the quiz taker can submit these results to the leaderboard, for the rest of the world to see.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/dmaster18/the-bartender-api/pulls. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

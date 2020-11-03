function fetchcards() {
  const recipes_url = 'http://127.0.0.1:3000/recipes'
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(json => rendercards(json))
}

function rendercards(json) { //Renders all Cocktail Recipe Ingredient Index Cards
  json["data"].forEach(recipe => generatecard(recipe))
}


Promise.all([
  fetch('http://127.0.0.1:3000/recipes'),
  fetch('http://127.0.0.1:3000/liquors'),
  fetch('http://127.0.0.1:3000/liqueurs'),
  fetch('http://127.0.0.1:3000/mixers'),
  fetch('http://127.0.0.1:3000/garnishes')
]).then(allResponses => {
  const recipes = allResponses[0]
  const liquors = allResponses[1]
  const liqueurs = allResponses[2]
  const mixers = allResponses[3]
  const garnishes = allResponses[4]
}
  ...

})
function generateQuestion(json) {
  card = renderRandomcard(json);
  liquors = [];
  liqueurs = [];
  mixers = [];
  garnishes = [];
  correctLiquors = card.querySelectorAll('.liquor');
  correctLiqueurs = card.querySelectorAll('.liqueur');
  correctMixers = card.querySelectorAll('.mixer');
  correctGarnishes = card.querySelectorAll('.garnish');
  liquors.push(correctLiquors.flat());
  liqueurs.push(correctLiqueurs.flat());
  mixers.push(correctMixers.flat());
  garnishes.push(correctGarnishes.flat());
  while (liquors.length <= 7) {
    randomLiquor = Math.random

  }
  while (liqueurs.length <= 7) {


  }

  while (mixers.length <= 7) {


  }

  while (garnishes.length <= 7) {


  }
}






/*

constructor(props) {
        super(props);
        this.state = { World: [], Afghanistan: [], USA: [], Australia: [] };
    }

 const urls = [
            'https://corona.lmao.ninja/v2/all',
            'https://corona.lmao.ninja/v2/countries/afghanistan',
            'https://corona.lmao.ninja/v2/countries/usa',
            'https://corona.lmao.ninja/v2/countries/australia'
        ];

    Promise.all(urls.map(url =>
                fetch(url)
                    .then(checkStatus)  // check the response of our APIs
                    .then(parseJSON)    // parse it to Json
                    .catch(error => console.log('There was a problem!', error))
            ))
                .then(data => {
                    // assign to requested URL as define in array with array index.
                    const data_world = data[0];
                    const data_af = data[1];
                    const data_usa = data[2];
                    const data_aus = data[3];
                    this.setState({
                      World: data_world,
                                Afghanistan: data_af,
                                USA: data_usa,
                                Australia: data_aus
                            })
                })
   function checkStatus(response) {
            if (response.ok) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(new Error(response.statusText));
            }
        }

    function parseJSON(response) {
        return response.json();
    }*/

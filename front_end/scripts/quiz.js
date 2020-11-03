Promise.all([
  fetch("http://localhost:3000/items/get1"),
  fetch("http://localhost:3000/items/get2"),
  fetch("http://localhost:3000/items/get3")
]).then(allResponses => {
  const response1 = allResponses[0]
  const response2 = allResponses[1]
  const response3 = allResponses[2]

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

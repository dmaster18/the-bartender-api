function fetchRecipes() {
  const recipes_url = "http://localhost:3000/recipes"
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(json => renderRecipes(json))
}

function renderRecipes(json) {
  const recipes = JSON.parse(json.querySelector('pre').innerText)
  json.forEach(recipe => {
    const p = document.createElement('p')
    p.innerHTML = `<p>${recipe.name}</p>`
    main.appendChild(p)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed')
  fetchRecipes();
})

const recipeCard(json){

  json.forEach(recipe=> {
    const recipeCard = document.createElement()



  })

  <div class="card">
    <img src="img_avatar.png" alt="Avatar" style="width:100%">
    <div class="container">
      <h4><b>John Doe</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>



}

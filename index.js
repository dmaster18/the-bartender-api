function fetchRecipes() {
  const recipes_url = "http://localhost:3000/recipes"
  return fetch(recipes_url)
  .then(resp => resp.json())
  .then(json => renderRecipes(json))
}

function renderRecipes(json) {
  const recipes = document.querySelector('pre').innerText
  json.forEach(recipe => {
    const p = document.createElement('p')
    p.innerHTML = `<p>${recipe.name}</p>`
    main.appendChild(p)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
})

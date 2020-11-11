const button = document.querySelector("button");

button.addEventListener("click", function() {
  const values = document.querySelectorAll('input');
  const selectedValues = values.filter(value => value.checked);
  console.log(selectedValues);
})

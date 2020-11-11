const buttonListener = function() {document.querySelector('button').addEventListener("click", function() {
  const values = document.querySelectorAll('input');
  const selectedValues = values.filter(value => value.checked);
  console.log(selectedValues);
})}

buttonListener();

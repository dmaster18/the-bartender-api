const buttonListener = function() {document.querySelector('button').addEventListener("click", function() {
  const values = [].slice.call(document.querySelectorAll('input'));
  const selectedValues = values.filter(value => value.checked);
  alert(selectedValues);
})}

window.addEventListener('DOMContentLoaded', buttonListener);


const fetchUsers = function() {
  generateGIF();
  const users_url = 'http://127.0.0.1:3000/users';
  return fetch(users_url)
  .then(resp => resp.json())
  .then(json => console.log(json)); //generateLeaderboard
}

const generateGIF = function() {
  const main = document.querySelector('main');
  main.innerHTML = ''
  const gifElement = document.createElement('img');
  gifElement.src = '../gifs/old_bartender.gif'
  main.appendChild(gifElement);
}

const generateLeaderboard(json) = function() {
  const userData = json['data'];
  const users = userData.map(user => user.name = )



}


window.addEventListener('DOMContentLoaded', function() {fetchUsers()});

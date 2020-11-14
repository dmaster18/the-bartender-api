window.addEventListener('DOMContentLoaded', function() {fetchUsers()});

const fetchUsers = function() {
  generateGIF();
  const users_url = 'http://127.0.0.1:3000/users';
  return fetch(users_url)
  .then(resp => resp.json())
  .then(json => generateLeaderboard(json)); //generateLeaderboard(json)
}

const generateGIF = function() {
  const main = document.querySelector('main');
  main.innerHTML = ''
  const gifElement = document.createElement('img');
  gifElement.src = '../gifs/old_bartender.gif'
  main.appendChild(gifElement);
}

const generateLeaderboard = function(json) {
  const userData = json['data'];
  const main = document.querySelector('main');
  const leaderboard = document.createElement('table');
  leaderboard.classList.add('leaderboard')
  const leaderboardHeader = '<tr><th>Name</th><th>Score</th><th>Percentage</th></tr><tr>'
  const arrayOfUserData = userData.map(user => `<tr><td>${user.attributes.name}</td> <td>${user.attributes.score}</td> <td>${user.attributes.percentage}</td></tr>`);
  const leaderboardData = arrayOfUserData.join(' ');
  leaderboard.innerHTML = `${leaderboardHeader} ${leaderboardData}`
  main.appendChild(leaderboard);
}

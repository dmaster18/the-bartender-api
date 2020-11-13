
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
  const leaderboard = document.createElement('table');
  const leaderboardHeader = '<tr><th>Name</th><th>Score</th><th>Percentage</th></tr><tr>'
  const leaderboardData = use
  const arrayOfUserData = userData.map(user => `<tr><td>${user.name}</td> <td>${user.score}</td> <td>${user.percentage}</td></tr>`);


      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>80</td>
    </tr>
  </table>

}


window.addEventListener('DOMContentLoaded', function() {fetchUsers()});

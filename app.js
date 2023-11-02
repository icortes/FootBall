'use strict';

window.onload = () => {
  loadFootballTeams();
  document.getElementById('footballForm').onsubmit = function (event) {
    event.preventDefault();
    showTeamInfo();
  };
};

let teams = [
  { code: 'DAL', name: 'Dallas Cowboys', plays: 'Arlington, TX' },
  { code: 'DEN', name: 'Denver Broncos', plays: 'Denver, CO' },
  { code: 'HOU', name: 'Houston Texans', plays: 'Houston, TX' },
  { code: 'KAN', name: 'Kansas City Chiefs', plays: 'Kansas City, MO' },
];

function loadFootballTeams() {
  const teamList = document.getElementById('teamList');

  teamList.appendChild(new Option('Select a Team', ''));

  teams.forEach((team) => {
    let theOption = new Option(team.name, team.code);
    teamList.appendChild(theOption);
  });
}

function showTeamInfo() {
  const teamInfo = getTeamInfo();
  if (!teamInfo) {
    document.getElementById('selectedTeam').textContent = ``;
    return;
  }
  document.getElementById(
    'selectedTeam'
  ).textContent = `You selected the ${teamInfo.name} (${teamInfo.code}) who play in ${teamInfo.plays}.`;
}

function getTeamInfo() {
  const teamSelected = document.querySelector('#teamList option:checked').value;
  let selectedTeam;
  teams.forEach((team) => {
    if (teamSelected == team.code) {
      selectedTeam = team;
    }
  });
  return selectedTeam;
}

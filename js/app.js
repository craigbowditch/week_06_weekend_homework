document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  renderList();

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteAll);
});

const getList = function(){
  if (JSON.parse(localStorage.getItem('players')) !== null){
    return JSON.parse(localStorage.getItem('players'));
  } else {
    return [];
  }
};

const handleDeleteAll = function() {
  const deleteList = document.querySelector('#player-list');
  deleteList.textContent = "";

  localStorage.clear();
};

const handleFormSubmit = function(event){
  event.preventDefault();
  playerList = getList();
  const newPlayer = {
    name: event.target.name.value,
    club: event.target.club.value,
    nationality: event.target.nationality.value,
    position: event.target.position.value,
    foot: event.target.foot.value
  };

  playerList.push(newPlayer);

  localStorage.setItem('players', JSON.stringify(playerList));
  renderList();
  event.target.reset();
};

const buildList = function(player){
  const playerUl = document.createElement('ul');
  const nameLi = document.createElement('li');
  const clubLi = document.createElement('li');
  const nationalityLi = document.createElement('li');
  const positionLi = document.createElement('li');
  const footLi = document.createElement('li');

  nameLi.textContent = `Name: ${player.name}`;
  clubLi.textContent = `Club: ${player.club}`;
  nationalityLi.textContent = `Nationality: ${player.nationality}`;
  positionLi.textContent = `Position: ${player.position}`;
  footLi.textContent = `${player.foot}`

  playerUl.appendChild(nameLi);
  playerUl.appendChild(clubLi);
  playerUl.appendChild(nationalityLi);
  playerUl.appendChild(positionLi);
  playerUl.appendChild(footLi);

  return playerUl;
}

const renderList = function(){
  const playerDiv = document.querySelector('#player-list');
  playerDiv.innerHTML = "";
  const playerList = getList();
  playerList.forEach((player) => {
    playerUl = buildList(player);
    playerDiv.appendChild(playerUl);

  });


}

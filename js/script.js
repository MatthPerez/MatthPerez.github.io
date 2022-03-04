
// Aide
const helpbutton = document.getElementById('newGame');
function help() {
  alert("Bienvenue dans mon jeu de dés !\n\nPour commencer une partie, cliquez sur NEW GAME.\nVous pouvez renommer les joueurs en passant votre curseur sur PLAYER1 et PLAYER2.\nLes règles sont les suivantes : Le premier joueur qui arrive à cumuler 100 points gagne la partie. Un joueur peut lancer le dé autant de fois qu\'il le souhaite et appuyer sur HOLD pour enregistrer le résultat quand il lui convient. Mais attention ! Si le résultat du dé vaut 1, il ne gagne qu\'un point et doit passer la main.\n\nBonne chance à vous !");
  helpbutton.removeEventListener('mouseenter', help);
}
helpbutton.addEventListener('mouseenter', help);

// Nouvelle partie
const button1 = document.getElementById('newGame');
function newGame() {
  score1.innerHTML = '0';
  score2.innerHTML = '0';
  current1.innerHTML = '0';
  current2.innerHTML = '0';
  document.getElementById('dice').innerHTML = '';
  document.getElementById('currentPlayer1').innerHTML = '▼';
  let player1 = document.getElementById('player1').innerText;
  alert('Les scores ont été remis à zéro. A votre tour de lancer le dé ' + player1 + ' !');
}
button1.addEventListener('click', newGame);

// Nombre aléatoire entre min et max
function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Lancer le dé
const button2 = document.getElementById('rollDice');

function myGoal() {
  const goal = parseInt(prompt('Quel objectif de points souhaitez-vous atteindre ?'));
  button2.removeEventListener('mouseenter', myGoal);
  document.getElementById('diceValue').innerHTML = goal;
}
button2.addEventListener('mouseenter', myGoal);

let dice = document.getElementById('dice');
function rollDice() {
  let entier = parseInt(entierAleatoire(1, 6));  
  dice.innerHTML = entier;

  let score1value;
  let score2value;
  let total1;
  let total2;
  if (entier == 1) {
    if (document.getElementById('currentPlayer1').innerHTML == '▼') {
      document.getElementById('currentPlayer1').innerHTML = '';
      document.getElementById('currentPlayer2').innerHTML = '▼';
      score1value = parseInt(document.getElementById('current1').innerHTML);
      total1 = score1value + 1;
      document.getElementById('current1').innerHTML = total1;
    } else {
      document.getElementById('currentPlayer1').innerHTML = '▼';
      document.getElementById('currentPlayer2').innerHTML = '';
      score2value = parseInt(document.getElementById('current2').innerHTML);
      total2 = score2value + 1;
      document.getElementById('current2').innerHTML = total2;
    }
    document.getElementById('dice').innerHTML = '';
  }
  endGame();
}
button2.addEventListener('click', rollDice);

// Retenir le score et passer la main
const button3 = document.getElementById('hold');

function hold() {
  let diceValue = parseInt(document.getElementById('dice').innerHTML);
  let player;
  if (document.getElementById('currentPlayer1').innerHTML == '▼') {
    let score1value = parseInt(document.getElementById('current1').innerHTML);
    let total1 = score1value + diceValue;
    document.getElementById('current1').innerHTML = total1;
    document.getElementById('currentPlayer1').innerHTML = '';
    document.getElementById('currentPlayer2').innerHTML = '▼';
  } else {
    let score2value = parseInt(document.getElementById('current2').innerHTML);
    let total2 = score2value + diceValue;
    document.getElementById('current2').innerHTML = total2;
    document.getElementById('currentPlayer1').innerHTML = '▼';
    document.getElementById('currentPlayer2').innerHTML = '';
  }
  document.getElementById('dice').innerHTML = '0';
  endGame();
}
button3.addEventListener('click', hold);

// Changer le nom des joueurs
let player1 = document.getElementById("player1");
function changeName1() {
  player1.innerHTML = prompt('Nouveau nom pour player 1 :');
  player1.removeEventListener('mouseenter', changeName1);
}
player1.addEventListener('mouseenter', changeName1);

let player2 = document.getElementById("player2");
function changeName2() {
  player2.innerHTML = prompt('Nouveau nom pour player 2 :');
  player2.removeEventListener('mouseenter', changeName2);
}
player2.addEventListener('mouseenter', changeName2);

// Terminer la partie
function endGame() {
  let limit = document.getElementById('diceValue').innerHTML;
  let total1 = parseInt(document.getElementById('current1').innerHTML);
  let total2 = parseInt(document.getElementById('current2').innerHTML);
  let player1 = document.getElementById('player1').innerHTML;
  let player2 = document.getElementById('player2').innerHTML;

  if (total1 >= limit || total2 >= limit) {
    document.getElementById('score1').innerHTML = '0';
    document.getElementById('score2').innerHTML = '0';
    document.getElementById('current1').innerHTML = '0';
    document.getElementById('current2').innerHTML = '0';
    document.getElementById('dice').innerHTML = '0';
    if (total1 >= 100) {
      alert(player2 + ' a gagné !')
    } else {
      alert(player1 + ' a gagné !')
    }
  }
}
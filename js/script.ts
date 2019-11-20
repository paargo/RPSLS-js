var text = document.getElementsByTagName("P");
text = text[0];
var userLives = 0;
var botLives = 0;

function game(choice: { id: any; style: { background: string; }; }) {
  var result: string;
  var computerChoice = Math.random();
  var userChoice = choice.id;
  computerChoice = Math.floor((computerChoice * 5) + 1);
  if (computerChoice == 1) { computerChoice = "Piedra"; }
  else if (computerChoice == 2) { computerChoice = "Papel"; }
  else if (computerChoice == 3) { computerChoice = "Tijera"; }
  else if (computerChoice == 4) { computerChoice = "Lagarto"; }
  else { computerChoice = "Spock"; }
  var userWins = 'Bot: ' + computerChoice + '<span> TU GANAS !!</span>';
  var botWins = 'Bot: ' + computerChoice + '<span> TU PIERDES !!</span>';
  var draw = 'Bot: ' + computerChoice + '<span> EMPATE</span>';
  if (computerChoice == "Piedra") {
    if (userChoice == "papel" || userChoice == "spock") {
      result = userWins;
    }
    else if (userChoice == "piedra") {
      result = draw;
    }
    else {
      result = botWins;
    }
  }
  else if (computerChoice == "Papel") {
    if (userChoice == "tijera" || userChoice == "lagarto") {
      result = userWins;
    }
    else if (userChoice == "papel") {
      result = draw;
    }
    else {
      result = botWins;
    }
  }
  else if (computerChoice == "Tijera") {
    if (userChoice == "spock" || userChoice == "piedra") {
      result = userWins;
    }
    else if (userChoice == "tijera") {
      result = draw;
    }
    else {
      result = botWins;
    }
  }
  else if (computerChoice == "Lagarto") {
    if (userChoice == "piedra" || userChoice == "tijera") {
      result = userWins;
    }
    else if (userChoice == "lagarto") {
      result = draw;
    }
    else {
      result = botWins;
    }
  }
  else if (computerChoice == "Spock") {
    if (userChoice == "lagarto" || userChoice == "papel") {
      result = userWins;
    }
    else if (userChoice == "spock") {
      result = draw;
    }
    else {
      result = botWins;
    }
  }

  if (result == userWins) {
    text.style.color = "green";
    choice.style.background = "green";
    text.innerHTML = result;
    setTimeout(function () { choice.style.background = ""; }, 1000);
  }
  else if (result == botWins) {
    text.style.color = "red";
    choice.style.background = "red";
    text.innerHTML = result;
    setTimeout(function () { choice.style.background = ""; }, 1000);
  }
  else if (result == draw) {
    text.style.color = "white";
    choice.style.background = "white";
    text.innerHTML = result;
    setTimeout(function () { choice.style.background = ""; }, 1000);
  }
  score(result, userWins, botWins);
};

function score(result: any, userWins: string, botWins: string) {
  var life = document.getElementsByClassName("icon-heart");
  if (result == userWins) {
    life[(botLives++) + 3].style.color = "black";
  }
  else if (result == botWins) {
    life[(userLives++)].style.color = "black";
  }
  if (botLives == 3 || userLives == 3) {
    if (userLives == 3) {
      text.innerHTML += "<span>No eres rival digno, yo gano!</span>";
    }
    else {
      text.innerHTML += "<span>Suerte de principiante!</span>";
    }
    for (var i = life.length - 1; i >= 0; i--) {
      life[i].style.color = "rgb(255,0,0)";
      botLives = 0
      userLives = 0
    }
  }
};

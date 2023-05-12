// getComputerChoice qui retourne le choix de l'ordinateur
function getComputerChoice() {
  const numberRandom = Math.floor(Math.random() * 3) + 1;

  if (numberRandom === 1) {
    return "Pierre";
  } else if (numberRandom === 2) {
    return "Papier";
  } else {
    return "Ciseaux";
  }
}
// console.log(getComputerChoice(1));
// console.log(getComputerChoice(2));
// console.log(getComputerChoice(3));

// 2 fonction playRound

const playerSelection = "pierre";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "papier" && computerSelection === "pierre") ||
    (playerSelection === "pierre" && computerSelection === "ciseaux") ||
    (playerSelection === "ciseaux" && computerSelection === "papier")
  ) {
    return "Vous avez gagné!";
  } else if (
    (playerSelection === "pierre" && computerSelection === "papier") ||
    (playerSelection === "ciseaux" && computerSelection === "pierre") ||
    (playerSelection === "papier" && computerSelection === "ciseaux")
  ) {
    return "Vous avez perdu";
  } else {
    return "égalité";
  }
}

// 4 fonction game

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundResult = playRound(playerSelection, computerSelection);

  for (i = 1; i <= 5; i++) {
    let playerSelection = prompt(
      "Choissisez entre Pierre, Papier et Ciseaux"
    ).toLowerCase();
    //   console.log("votre choix est:" + playerSelection);

    if (
      playerSelection == "Pierre" ||
      playerSelection == "Paper" ||
      playerSelection == "Ciseaux"
    ) {
      return roundResult;
    }

    if ((roundResult = "Vous avez gagné")) {
      playerScore++;
      console.log("Félicitations! vous avez gagné ce tour.");
    } else if ((roundResult = "Vous avez perdu")) {
      computerScore++;
      console.log("Désolé, vous avez perdu.");
    } else {
      return "égalité";
    }
  }
  // fin de la boucle
  if (playerScore > computerScore) {
    console.log(
      `Félicitations! vous remportez le jeu avec un score ${playerScore} sur 5.`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `Oh désolé, vous avez perdu, votre adversaire gagne avec un score de ${computerScore} sur 5.`
    );
  } else {
    console.log("le jeu est fini, vous êtes à égalité");
  }
}
console.log(game());

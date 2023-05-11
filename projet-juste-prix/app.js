// 1.Initialiser un nombre aléatoire entre 1 et 500
const getRandonNumber = Math.floor(Math.random() * 500) + 1;

// 2. Demander à l'utilisateur de saisir un un chiffre max 10 fois
let userImput;
let i = 0;
for (i = 1; i <= 10; i++) {
  userImput = prompt("donnez un chiffre:");

  // 3. Vérifier si le nombre est le juste prix et lui afficher un adéquat
  if (userImput === getRandonNumber) {
    alert("Bravo, vous avez gagné!");
    break;
  }
  if (userImput > getRandonNumber) {
    alert("trop grand, essayes encore!");
  }
  if (userImput < getRandonNumber) {
    alert("trop petit, essayes encore!");
  } else {
    alert("ce n'est pas un chiffre");
    i -= 1;
  }
}
alert("c'est fini. le chiffre cherché est : " + getRandonNumber);

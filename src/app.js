const type = ["B", "S", "R"];
const color = ["R", "Y", "G"];
var yourScore = 0;
var playerScore = 0;
var yourShot = 0;
var playerShot = 0;
var yourRun = 0;
var playerRun = 0;
var table;


// képek generálása egy tömbbe
table = [];
for (let i = 0; i < color.length; i++) {
  for (let j = 0; j < type.length; j++) {
    table.push(color[i] + "-" + type[j]);
  }
}

console.log(table + " deck tartalma és hossza: " + table.length);

// Képek megjelenítése
// for (let i in table) {
//   let imgCard = document.createElement("img");
//   // valamiért nem megy végig az egész tömbön
//   // let card = deck.pop();
//   let card = table[i];
//   imgCard.src = "./images/dices/" + card + ".jpg";
//   document.write("<br>");
//   document.body.appendChild(imgCard);
// }

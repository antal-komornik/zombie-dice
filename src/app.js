// TODO eredményjelző kiirása
// gombok deklarálása
// kockák cserélye
// játéktér frissitése, kockák kezelése

// ez mutatja meg hogy egy színből hány kocka van.
let green = 6;
let yellow = 4;
let red = 3;
const colors = ["R", "Y", "G"];

// ezek mutatják meg hogy az egyes színeken milyen szinbólum található
const g = ["B", "B", "B", "S", "R", "R"];
const y = ["B", "B", "S", "S", "R", "R"];
const r = ["B", "S", "S", "S", "R", "R"];
// ezek fognak megjelenni a Stat mezőben 
let your_score = 0;
let player_score = 0;
let your_shot = 0;
let player_shot = 0;
let your_ran = 0;
let player_ran = 0;


function hitLuck() {
  // kihúz 3-at a zsákból
  for (let i = 0; i < 3; i++) {
    pullCube();
  }

}

function pullCube() {
  let imgCard = document.createElement("img");
  // ez a változó adja meg hogy milyen szinű a kocka
  let n = Math.floor(Math.random() * 3);
  // ezzel a változóval lehet majd szinekn belül, szimbólumot kapni
  let k = Math.floor(Math.random() * 5);
  let card = "";

  if (colors[n] == "G" && green != 0) {
    green -= 1;
    card = colors[n] + "-" + g[k];
  }
  else if (colors[n] == "Y" && yellow != 0) {
    yellow -= 1;
    card = colors[n] + "-" + y[k];
  }
  else if (colors[n] == "R" && red != 0) {
    red -= 1;
    card = colors[n] + "-" + r[k];
  }
  else {
    return;
  }
  imgCard.src = "../img/dices/" + card + ".jpg";
  document.getElementById("card-container").appendChild(imgCard);
}

console.log(green + " green");
console.log(yellow + " yellow");
console.log(red + " red");
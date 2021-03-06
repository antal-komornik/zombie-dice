/*  TODO 
    újrahúzáskijavítása
    stay gomb
    stat kijelzése
*/



// létrehozom a kockák tulajdonságaikat
// a három színű kockák darabszáma
let green = 6;
let yellow = 4;
let red = 3;
const colors = ["G", "Y", "R"];
// az egyes kockákok megtalálható szimbólumok
const g = ["B", "B", "B", "R", "R", "S"];
const y = ["B", "B", "R", "R", "S", "S"];
const r = ["B", "R", "R", "S", "S", "S"];
// ez mutatja meg, hogy hány darab kocka van kihúzva
let dices = 0;

// ez mutatja meg hogy, mik lettek kihúzva
let pulled = [];

function pullDice() {

  // létrehozom a képet és elérési helyét 
  let imgDice = document.createElement("img");
  let imgPulled = document.createElement("img");
  imgDice.setAttribute("id", "diceID");
  let card = "";

  // a színek és szímbólumok random változója
  let n = Math.floor(Math.random() * 3);
  let k = Math.floor(Math.random() * 6);

  // random kiválasztom a kockákat, addig amíg a kockák száma el nem éri a hármat
  if (dices < 3) {
    if (colors[n] == "G" && green != 0) {
      dices += 1;
      green -= 1;
      card = colors[n] + "-" + g[k];
      pulled.push(card);
    }
    else if (colors[n] == "Y" && yellow != 0) {
      dices += 1;
      yellow -= 1;
      card = colors[n] + "-" + y[k];
      pulled.push(card);
    }
    else if (colors[n] == "R" && red != 0) {
      dices += 1;
      red -= 1;
      card = colors[n] + "-" + r[k];
      pulled.push(card);
    }
    else {
      console.log("valami hiba");
      return;
    }
  }
  else {
    removeDice();
  }

  imgDice.src = "../img/dices/" + card + ".jpg";
  imgPulled.src = "../img/dices/" + card + ".jpg";
  const parent = document.getElementById("dice-img");
  const parent2 = document.getElementById("pulled-dice");
  parent2.appendChild(imgPulled);
  parent.appendChild(imgDice);

  console.log("Green: " + green + " , Yellow: " + yellow + " , Red: " + red);
  // console.log("a kockák száma " + dices);
}

function pushLuck() {
  pullDice();
  console.log(pulled);

  // a pulled array betöltődik pulled dice div-be
  let imgDice = document.createElement("img");
  imgDice.setAttribute("id", "pulledDiceID");
  let lastItem = pulled[pulled.length - 1];


  // ha a kép nem létezik, de megjelenik egy üres img
  const parent = document.getElementById("dice-img");
  let imgTags = parent.getElementsByTagName("img").length;
  if (dices == 0 && imgTags == 1) {
    removeDice();
  }
  else {
    return;
  }
}

function removeDice() {
  // kitörlöm a kockákat a tábláról
  const parentElement = document.querySelector("#dice-img");
  let allChildren = parentElement.querySelectorAll("img");
  // végigmegyek az összes képen
  allChildren.forEach((item) => item.parentNode.removeChild(item));

  // lenullázom a kockák számát a táblán
  dices = 0;
}
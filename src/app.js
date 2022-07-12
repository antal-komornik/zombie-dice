// TODO 
// kocka húzás => kirakás, pontbeírása
// lövés, futás kezelése
// gombok kezelése
//  pulled [] ot átalakítani ugy hogy a lábakat beleszamitsa


// a zsákban 13 kocka van, 3 szinben, 6 zöld,4 sárga, 3 piros
// a bag tömböt feltöltöm véletlenszerűen
let bag = ["G", "G", "G", "Y", "Y", "G", "R", "Y", "Y", "R", "G", "G", "R"];
const colors = ["G", "Y", "R"];

// az egyes színeken, milyen szimGólumok vannak.
const green = ["B", "B", "B", "R", "R", "S"];
const yellow = ["B", "B", "R", "R", "S", "S"];
const red = ["B", "R", "R", "S", "S", "S"];
let symbol = "";
let pulled_dice = 0;
let pulled = [];



function pullDice() {
  // szinek alapján, melyik szmbólum legyen
  let k = Math.floor(Math.random() * 6);
  // ez a változó adja meg hogy melyik szín legyen
  let n = Math.floor(Math.random() * 13);
  let img_dice = document.createElement("img");
  img_dice.setAttribute("id", "imgDice");
  let card = "";

  if (bag[n] == "G") {
    card = bag[n] + "-" + green[k];
    pulled.push(bag[n]);
    bag.splice(n, 1);
  }
  else if (bag[n] == "Y") {
    card = bag[n] + "-" + yellow[k];
    pulled.push(bag[n]);
    bag.splice(n, 1);
  }
  else if (bag[n] == "R") {
    card = bag[n] + "-" + red[k];
    pulled.push(bag[n]);
    bag.splice(n, 1);
  }
  else {
    return;
  }
  console.log(card);
  img_dice.src = "../img/dices/" + card + ".jpg";
  document.getElementById("card-container").appendChild(img_dice);
}

function hitLuck() {
  for (let i = 0; i < 4; i++) {
    pullDice();
  }
  console.log(bag);
  console.log(pulled);
}

// function Stay() {
//   const delete = document.getElementById("imgDice");
//   delete.remove();
// }

function writeStat() {

}

function gameRule() {

}

function updateHand() {

}

// let bag = ["G", "G", "G", "G", "G", "G", "Y", "Y", "Y", "Y", "R", "R", "R"];
// let n = Math.floor(Math.random() * 13);
// let pulled = [];

// console.log(n);

// function hitLuck() {
//   pulled.push(bag[n]);
//   bag.splice(n, 1);
//   console.log(bag);
//   console.log(pulled);
// }

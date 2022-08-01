// randomizált tömb létrehozása
let colors = [];
generate(60, 40, 30, 4);
console.log(colors);

let pulled = [];
let shotted = 0
let dices = 0;
let green = 6;
let yellow = 4;
let red = 3;
const gSymbol = ["B", "B", "B", "R", "R", "S"];
const ySymbol = ["B", "B", "R", "R", "S", "S"];
const rSymbol = ["B", "R", "R", "S", "S", "S"];
let score = 0;
let savedScore = 0;
let runColor = [];


function pushLuck() {
  console.log("click");
  let imgDice = imgPulled = "";
  if (shotted != 3) {
    if (pulled.length < 13) {
      let n = Math.floor(Math.random() * colors.length);
      let k = Math.floor(Math.random() * 6);
      console.log("n: " + colors[n] + ", " + n + ", k: " + k);
      if (dices < 3) {
        imgDice = document.createElement("img");
        imgPulled = document.createElement("img");
        imgDice.setAttribute("id", "diceID");
        imgPulled.setAttribute("id", "dicePulled");
        let card = "";
        ifDiceNull();


        if (colors[n] == "G" && green != 0) {
          dices += 1;
          green -= 1;
          card = colors[n] + "-" + gSymbol[k];
          pulled.push(card);
          if (gSymbol[k] == "B") {
            score += 1;
          }
          else if (gSymbol[k] == "S") {
            shotted += 1;
          }
          else if (gSymbol[k] == "R") {
            runColor.push("G");
          }
        }
        else if (colors[n] == "Y" && yellow != 0) {
          dices += 1;
          yellow -= 1;
          card = colors[n] + "-" + ySymbol[k];
          pulled.push(card);
          if (ySymbol[k] == "B") {
            score += 1;
          }
          else if (ySymbol[k] == "S") {
            shotted += 1;
          }
          else if (ySymbol[k] == "R") {
            runColor.push("Y");
          }
        }
        else if (colors[n] == "R" && red != 0) {
          dices += 1;
          red -= 1;
          card = colors[n] + "-" + rSymbol[k];
          pulled.push(card);
          if (rSymbol[k] == "B") {
            score += 1;
          }
          else if (rSymbol[k] == "S") {
            shotted += 1;
          }
          else if (rSymbol[k] == "R") {
            runColor.push("R");
          }
        }
        imgDice.src = "../img/dices/" + card + ".jpg";
        imgPulled.src = imgDice.src;
      }
      else if (dices == 3) {
        reRoll(runColor, n, k);
        runColor = [];
        let location = "#dice-img";
        removeDice(location);
        return;
      }
      else {
        let location = "#dice-img";
        removeDice(location);
        return;
      }
    }
    else {
      console.log("%c Vége ", "background: red; color: yellow;font-size: 20px");
      let location = "#dice-img";
      removeDice(location);
    }
  }
  else {
    console.log("%c Meghaltál ", "background: black; color:yellow");
    let location = "#dice-img";
    removeDice(location);
    location = "#pulled-dice";
    removeDice(location);
    document.getElementById("error").innerHTML = "You died";
  }

  const parent = document.getElementById("dice-img");
  const parent2 = document.getElementById("pulled-dice");
  parent.appendChild(imgDice);
  parent2.appendChild(imgPulled);

  console.log("%c Green: " + green + " \n, Yellow: " + yellow + " ,\n Red: " + red, "background:blue; font-size: 15px");
  console.log("score: " + score + "\n puska: " + shotted + "\n lábacska: " + runColor);
  console.log(pulled);
  // console.log("A kockák száma: " + dices);
  console.log("VÉGE");
}

function removeDice(location) {
  // kitörlöm a kockákat a tábláról
  const parentElement = document.querySelector(location);
  let allChildren = parentElement.querySelectorAll("img");
  // végigmegyek az összes képen
  allChildren.forEach((item) => item.parentNode.removeChild(item));
  // lenullázom a kockák számát a táblán
  dices = 0;
}

function ifDiceNull() {
  if (green == 0 || yellow == 0 || red == 0) {
    for (let i = 0; i < colors.length; i++) {
      if (colors[i] === "G" && green == 0) {
        colors.splice(i, 1);
        i--;
      }
      else if (colors[i] === "Y" && yellow == 0) {
        colors.splice(i, 1);
        i--;
      }
      else if (colors[i] === "R" && red == 0) {
        colors.splice(i, 1);
        i--;
      }
    }
    console.log("%c Elfogyott valami", "background:grey");
    console.log(colors);
  }
}

function generate(g, y, r, s) {
  for (let i = 0; i < g; i++) {
    colors.push("G");
  }
  for (let i = 0; i < y; i++) {
    colors.push("Y");
  }
  for (let i = 0; i < r; i++) {
    colors.push("R");
  }
  for (let i = 0; i < s; i++) {
    shuffle(colors);
  }
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function reRoll(runColor, n, k) {
  console.log("reroll : " + runColor);
  for (let i = 0; i < runColor.length; i++) {
    if (runColor[i] == "G") {
      console.log("ha green : " + colors[n]);
      colors[n] = "G";
      card = colors[n] + "-" + gSymbol[k];
      console.log(card);
    }
    else if (runColor[i] == "Y") {
      console.log("ha yellow : " + colors[n]);
      colors[n] = "Y";

      card = colors[n] + "-" + ySymbol[k];
      console.log(card);
    }
    else if (runColor[i] == "R") {
      console.log("ha red : " + colors[n]);
      colors[n] = "R";

      card = colors[n] + "-" + rSymbol[k];
      console.log(card);
    }
  }
}

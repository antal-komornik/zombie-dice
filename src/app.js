// randomizált tömb létrehozása
let colors = [];
generate(60, 40, 30, 4);
console.log(colors);

let dices = 0;
let green = 6;
let yellow = 4;
let red = 3;
const gSymbol = ["B", "B", "B", "R", "R", "S"];
const ySymbol = ["B", "B", "R", "R", "S", "S"];
const rSymbol = ["B", "R", "R", "S", "S", "S"];
let pulled = [];
let score = 0;
let savedScore = 0;
let shotted = 0
let runColor = [];
let defgen = true;
let dicecount = 0;

function pushLuck() {
  let n, k, card;
  if (shotted < 30) {
    endofdices: if (dicecount < 13) {

      n = Math.floor(Math.random() * colors.length);
      k = Math.floor(Math.random() * 6);
      // console.log("szín : " + colors[n] + "\n szímbólum:\n" + "green: " + gSymbol[k] + "\n" + "yellow: " + ySymbol[k] + "\n" + "red: " + rSymbol[k]);
      ifDiceNull(n);

      if (dices < 3) {
        dicecount++;

        if (defgen) {
          imgDice = document.createElement("img");
          imgPulled = document.createElement("img");
          imgDice.setAttribute("id", "diceID");
          imgPulled.setAttribute("id", "dicePulled");

          dices++;
          if (colors[n] == "G" && green != 0) {
            green--;
            card = colors[n] + "-" + gSymbol[k];
            pulled.push(card);

            if (gSymbol[k] == "B") {
              score++;
            } else if (gSymbol[k] == "S") {
              shotted++;
            } else {
              runColor.push("G");
              pulled.pop();
            }
          }
          else if (colors[n] == "Y" && yellow != 0) {
            yellow--;
            card = colors[n] + "-" + ySymbol[k];
            pulled.push(card);

            if (ySymbol[k] == "B") {
              score++;
            } else if (ySymbol[k] == "S") {
              shotted++;
            } else {
              runColor.push("Y");
              pulled.pop();
            }
          }
          else if (colors[n] == "R" && red != 0) {
            red--;
            card = colors[n] + "-" + rSymbol[k];
            pulled.push(card);

            if (rSymbol[k] == "B") {
              score++;
            } else if (rSymbol[k] == "S") {
              shotted++;
            } else {
              runColor.push("R");
              pulled.pop();
            }
          }
          imgDice.src = "../img/dices/" + card + ".jpg";
          imgPulled.src = imgDice.src;
        }


      } else {
        let location = "#dice-img";
        removeDice(location);
        if (runColor.length != 0) {

          defgen = false;
          reRoll(runColor, n, k);
          delete runColor;
          console.log("van láb")
        } else {
          console.log("nincs láb");
        }
        return;
      }

    } else {
      let location = "#dice-img";
      removeDice(location);
      console.log("%c Vége, elfogytak a kockák", "background:grey; color:red");
      document.getElementById("error").innerHTML = "A kockák elfogytak";
      return;
      break endofdices;
    }
  } else {
    console.log("%c Meghaltál ", "background:grey; color:red");
    let location = "#dice-img";
    removeDice(location);
    document.getElementById("error").innerHTML = "You died";
  }



  const parent = document.getElementById("dice-img");
  const parent2 = document.getElementById("pulled-dice");
  const footparent = document.getElementById("foot");
  parent.appendChild(imgDice);
  parent2.appendChild(imgPulled);
  // footparent.appendChild(imgFoot);
  console.log("%c Green: " + green + " \n Yellow: " + yellow + "\n Red: " + red, "background:blue; font-size: 15px; color:white");
  console.log("score: " + score + "\n puska: " + shotted + "\n lábacska: " + runColor);
  console.log(pulled);
  console.log("A kockák száma: " + dices);
}



function removeDice(location) {
  // kitörlöm a kockákat a tábláról
  const parentElement = document.querySelector(location);
  let allChildren = parentElement.querySelectorAll("img");
  // végigmegyek az összes képen
  allChildren.forEach((item) => item.parentNode.removeChild(item));
  // lenullázom a kockák számát a táblán
  dices = 0;
  console.log("%c Törlés ", "background: grey; color:red");
}

function ifDiceNull(n) {
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
    n = Math.floor(Math.random() * colors.length);
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
    let imgDice = document.createElement("img");
    imgDice.setAttribute("id", "diceID");
    if (runColor[i] == "G") {
      dices++;
      colors[n] = "G";
      k = Math.floor(Math.random() * gSymbol.length);
      card = colors[n] + "-" + gSymbol[k];

      // pushLuck(false, card);
      console.log("g");
      console.log(card);
    }
    else if (runColor[i] == "Y") {
      dices++;
      colors[n] = "Y";
      k = Math.floor(Math.random() * ySymbol.length);
      card = colors[n] + "-" + ySymbol[k];
      // pushLuck(false, card);
      console.log("y");
      console.log(card);
    }
    else if (runColor[i] == "R") {
      dices++;
      colors[n] = "R";
      k = Math.floor(Math.random() * rSymbol.length);
      card = colors[n] + "-" + rSymbol[k];
      // pushLuck(false, card);
      console.log("r");
      console.log(card);
    }
    imgDice.src = "../img/dices/" + card + ".jpg";
    const parent = document.getElementById("dice-img");
    parent.appendChild(imgDice);
  }
  delete runColor;
  defgen = true;
  console.log(defgen);

}

function stay() {
  savedScore = score;
  document.getElementById("brains").innerHTML = savedScore;
}


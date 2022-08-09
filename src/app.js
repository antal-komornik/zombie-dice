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
let n, k, card;

function pushLuck() {
  if (shotted <= 3) {
    endofdices: if (dicecount < 13) {
      if (defgen) {
        n = Math.floor(Math.random() * colors.length);
        k = Math.floor(Math.random() * 6);
      }
      ifDiceNull(n, k, card);

      if (dices < 3) {

        if (dicecount % 3 == 0) {
          if (runColor.length > 0) {
            console.log("%c reroll ", "background:black; color:white; font-size :13px");

            defgen = false;
            reRoll();
            console.log("reroll vége");
          }
        }


        ratingOfDice();


        imgDice = document.createElement("img");
        imgPulled = document.createElement("img");
        imgDice.setAttribute("id", "diceID");
        imgPulled.setAttribute("id", "dicePulled");
        imgDice.src = "../img/dices/" + card + ".jpg";
        imgPulled.src = imgDice.src;
        dicecount++;
        dices++;
      } else {
        // DICES == 3 VAGYIS KI LETT HÚZVA 3 KOCKA
        let location = "#dice-img";
        removeDice(location);
        dices = 0;
        return;
      }
    } else {
      // DICECOUNT == 13 VAGYIS ELFOGYOTTAK A KOCKÁK
      let location = "#dice-img";
      removeDice(location);
      console.log("%c Vége, elfogytak a kockák", "background:grey; color:red");
      document.getElementById("error").innerHTML = "A kockák elfogytak";
      break endofdices;
    }
  } else {
    // SHOTTED == 3 VAGYIS MEGHALTÁL
    console.log("%c Meghaltál ", "background:grey; color:red");
    let location = "#dice-img";
    removeDice(location);
    document.getElementById("error").innerHTML = "You died";
  }

  const parent = document.getElementById("dice-img");
  parent.appendChild(imgDice);
  undefinedcard: if (card == undefined) {
    break undefinedcard;
  } else {
    if (card.split("-").pop() != "R") {
      const parent2 = document.getElementById("pulled-dice");
      parent2.appendChild(imgPulled);
    }
  }
  console.log("%c Green: " + green + " \n Yellow: " + yellow + "\n Red: " + red, "background:blue ; color:white");
  console.log("score: " + score + "\n puska: " + shotted + "\n lábacska: " + runColor);
  console.log("pulled: " + pulled);
  console.log("A kockák száma: " + dices);
  console.log("dicecount: " + dicecount);



}

function ratingOfDice() {
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
      green++;
      let imgFoot = document.createElement("img")
      imgFoot.setAttribute("id", "foot");
      imgFoot.src = "../img/dices/G-R.jpg";
      const footparent = document.getElementById("foot");
      footparent.appendChild(imgFoot);
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
      yellow++;
      let imgFoot = document.createElement("img")
      imgFoot.setAttribute("id", "foot");
      imgFoot.src = "../img/dices/Y-R.jpg";
      const footparent = document.getElementById("foot");
      footparent.appendChild(imgFoot);
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
      red++;
      let imgFoot = document.createElement("img")
      imgFoot.setAttribute("id", "foot");
      imgFoot.src = "../img/dices/R-R.jpg";
      const footparent = document.getElementById("foot");
      footparent.appendChild(imgFoot);
    }
  }
}

function stay() {
  savedScore = score;
  document.getElementById("brains").innerHTML = savedScore;
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
        console.log("%c A zöld elfogyott", "background:grey; color:green");
      }
      else if (colors[i] === "Y" && yellow == 0) {
        colors.splice(i, 1);
        i--;
        console.log("%c A sárga elfogyott", "background:grey; color:yellow");
      }
      else if (colors[i] === "R" && red == 0) {
        colors.splice(i, 1);
        i--;
        console.log("%c A piros elfogyott", "background:grey; color:red");
      }
    }
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

function reRoll() {
  console.log("reroll által");
  console.log("%c reroll : " + runColor + " , " + runColor.length, "background:blueviolet; font-size:14px");
  for (let i = 0; i < runColor.length; i++) {
    if (runColor[0] == "G") {
      colors[n] = "G";
      k = Math.floor(Math.random() * gSymbol.length);
      card = colors[n] + "-" + gSymbol[k];
      console.log(card);
      runColor.shift();
    }
    else if (runColor[0] == "Y") {
      colors[n] = "Y";
      k = Math.floor(Math.random() * ySymbol.length);
      card = colors[n] + "-" + ySymbol[k];
      console.log(card);
      runColor.shift();
    }
    else if (runColor[0] == "R") {
      colors[n] = "R";
      k = Math.floor(Math.random() * rSymbol.length);
      card = colors[n] + "-" + rSymbol[k];
      console.log(card);
      runColor.shift();
    }
    pushLuck();

  }

  let location = "#foot";
  removeDice(location);
  console.log("%c A lábak törölve lettek", "background:yellow");
  defgen = true;
}

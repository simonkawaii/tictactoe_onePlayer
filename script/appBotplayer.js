const cell = document.querySelectorAll(".cell");
const container = document.querySelector("#container");
const cClass = "circle";
const xClass = "x";

const winComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [0, 3, 6],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

let state;

console.log(cell);
function switchTurns() {
  state = !state;
}
function botTurn(param) {
  const lelek = document.querySelectorAll(".cell");

  let rnd = Math.floor(Math.random() * 8);
  if (
    document.querySelectorAll(".x").length === 6 ||
    document.querySelectorAll(".circle").length === 6
  ) {
  } else {
    do {
      rnd = Math.floor(Math.random() * 8);
    } while (
      lelek[rnd].classList.contains("x") ||
      lelek[rnd].classList.contains("circle")
    );

    if (!lelek[rnd].classList.contains("x")) {
      lelek[rnd].classList.add("circle");
      lelek[rnd].setAttribute("disabled", "");
    }
  }
  console.log(rnd);
}
for (let o of cell) {
  o.addEventListener("click", (e) => {
    const cell = e.target;
    const currentClass = state ? cClass : xClass;
    if (e.target === cell) {
      o.classList.add(currentClass);
      console.log(cell.sia);
      if (!state && !isWinner(currentClass)) {
        botTurn();
      }
      if (isWinner(currentClass)) {
        console.log();
        console.log();
        console.log();
        makeDrawOrWin(currentClass, `player wins!`);
      } else if (
        document.querySelectorAll(".x").length === 6 ||
        document.querySelectorAll(".circle").length === 6
      ) {
        makeDrawOrWin();
      } else if (isWinner(cClass)) {
        makeDrawOrWin(cClass, `player wins!`);
      }

      hoverEffect();
    }
  });

  function hoverEffect() {
    container.classList.remove(xClass);
    container.classList.remove(cClass);
    if (state) {
      container.classList.add(cClass);
    } else {
      container.classList.add(xClass);
    }
  }

  function isWinner(win) {
    return winComb.some((combination) => {
      return combination.every((index) => {
        return cell[index].classList.contains(win);
      });
    });
  }
}

function draw(param) {
  param.addEventListener("click", () => {
    for (let a of cell) {
      a.classList.remove("circle");
      a.classList.remove("x");
    }
    document.querySelector(".overlay").remove();
  });
}
function makeDrawOrWin(a = "NOBODY", b = `WINS!!`) {
  let dooo = document.createElement("div");
  let wooo = document.createElement("h1");
  let buto = document.createElement("button");
  let whoo = document.createElement("h1");

  dooo.classList.add("overlay");
  document.body.appendChild(dooo);
  wooo.innerHTML = a;
  whoo.innerHTML = b;

  dooo.appendChild(wooo);

  buto.innerHTML = "RESET";
  dooo.appendChild(buto);
  dooo.appendChild(whoo);

  draw(buto);
}

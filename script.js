function generateDiv(x) {
  let el = document.createElement("div");
  let container = document.querySelector(".container");
  el.style.flexBasis = `${1000 / x}px`;
  el.style.height = `${500 / x }px`;
  container.insertAdjacentElement("afterbegin", el);
}

function generateGrid(size) {
  document.querySelector(".container").textContent = "";
  for (let i = 0; i < size; i++) {
    for (let i = 0; i < size; i++) {
      generateDiv(size);
    }
  }
  listening();
}

function listening() {
  let divs = document.querySelectorAll(".container div");
  for (let div of divs) {
    div.addEventListener("mouseenter", function () {
      this.classList.add("grid");
    });
  }
}

function generate() {
  let btn = document.querySelector("button");
  btn.addEventListener("click", function () {
    let size = prompt("Enter the size of the grid");
    generateGrid(size);
  });
}

generate();

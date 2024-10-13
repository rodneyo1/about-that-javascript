import { gossips } from "./gossip-grid.data.js";

export function grid() {
  let allChange = document.createElement("div");
  allChange.className = "ranges";
  let inputWidth = document.createElement("input");

  inputWidth.value = "";
  inputWidth.min = "200"; 
  inputWidth.className = "range";
  inputWidth.id = "inputWidth";
  inputWidth.type = "range";
 
  inputWidth.max = "800";
  inputWidth.addEventListener("input", function () {
    let gos = document.querySelectorAll(".gossip");
    gos.forEach((e) => {
      e.style.inputWidth = inputWidth.value + "px";
    });
  });

  let fontSize = document.createElement("input");

  fontSize.min = "20";
  fontSize.max = "40";
  fontSize.value = "";
  fontSize.className = "range";
  fontSize.id = "fontSize";
  fontSize.type = "range";
  
  fontSize.addEventListener("input", function () {
    let gos = document.querySelectorAll(".gossip");
    gos.forEach((e) => {
      e.style.fontSize = fontSize.value + "px";
    });
  });

  let background = document.createElement("input");
  background.type = "range";
  background.min = "20";
  background.className = "range";
  background.id = "background";
  background.max = "75";
  background.value = "";

  background.addEventListener("input", function () {
    let gos = document.querySelectorAll(".gossip");
    gos.forEach((e) => {
      e.style.background = " hsl(280, 50%," + background.value + "%)";
    });
    console.log(background.value);
  });

  allChange.appendChild(inputWidth);
  allChange.appendChild(fontSize);
  allChange.appendChild(background);
  document.body.appendChild(allChange);

  let share = document.createElement("form");
  share.className = "gossip";
  document.body.appendChild(share);
  let textarea = document.createElement("textarea");
  textarea.setAttribute("placeholder", "Got a gossip to share?");
  share.appendChild(textarea);
  let button = document.createElement("button");
  button.innerHTML = "Share gossip!";
  share.appendChild(button);
  button.addEventListener("click", function () {
    let val = textarea.value;
    let goss1 = document.createElement("div");
    goss1.className = "gossip";
    goss1.textContent = val;
    document.body.insertBefore(goss1, document.querySelectorAll(".gossip")[1]);
    textarea.value = "";
    event.preventDefault();
  });
  addGross(gossips);
}
function addGross(goss) {
    goss.forEach(elem => {
        let goss = document.createElement('div')
        goss.className = "gossip"
        goss.innerHTML = elem
        document.body.appendChild(goss)
    })
}

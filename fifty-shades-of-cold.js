import { colors } from "./fifty-shades-of-cold.data.js";

export const generateClasses = () => {
  const style = document.createElement("style");
  for (const color of colors) {
    style.innerHTML += `.${color} {\n   background: ${color};\n}\n`;
  }
  document.querySelector("head").append(style);
};

export const generateColdShades = () => {
  const cold = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"];
  for (const color of colors) {
    for (const coldColor of cold) {
      if (color.includes(coldColor)) {
        const div = document.createElement("div");
        div.classList.add(color);
        div.textContent = color;
        document.querySelector("body").append(div);
      }
    }
  }
};

export const choseShade = (color) => {
  const alldivs = [...document.querySelectorAll("div")];
  alldivs.map((div) => (div.className = color));
};

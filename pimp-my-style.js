import { styles } from "./pimp-my-style.data.js";
var count = 0;

function pimp() {
    let button = document.querySelector("button.button");
    if (!button.classList.contains("unpimp")) {
        button.classList.add(styles[count]);
        count++;
    } else {
        count--;
        button.classList.remove(styles[count]);
        if (count === 0) {
            button.classList.toggle("unpimp");
        }
    }
    if (count === styles.length) {
        button.classList.toggle("unpimp");
    }
}

export { pimp };
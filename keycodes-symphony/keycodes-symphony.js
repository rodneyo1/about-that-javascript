export const compose = () => {
    document.addEventListener('keydown', function(e) {
        console.log(e.key)
        const keyAscii = e.key.charCodeAt(0)
        if (keyAscii >= 97 && keyAscii <= 122) {
            const div = document.createElement('div')
            div.textContent = e.key
            div.classList.add("note")
            div.style.backgroundColor = colors[122-keyAscii]
            document.querySelector('body').append(div)
        }
        if (e.key === "Backspace") {
            const divs = document.getElementsByClassName("note")
            divs[divs.length-1]?.remove()
        }
        if (e.key === "Escape") {
            const divs = document.getElementsByClassName("note")
            for (let i = divs.length-1; i >= 0; i--) {
                divs[i].remove()
            }
        }
    })
}
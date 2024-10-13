export function createCircle() {
    document.addEventListener('mousedown', event => {
        const createCircle = document.createElement('div')
        createCircle.setAttribute('class', 'circle')
        createCircle.setAttribute('id', 'Tester')
        let a = event.clientX - 25
        let b = event.clientY - 25
        createCircle.setAttribute('style', 'left: ' + a.toString() + 'px; top: ' + b.toString() + 'px; background: white;')
        document.body.appendChild(createCircle);
    })
}

export function moveCircle() {
    document.addEventListener('mousemove', event => {
        const finalCircle = document.querySelector('div:last-child')
        finalCircle.style.left = `${event.clientX - 25}px`
        finalCircle.style.top = `${event.clientY - 25}px`
        document.body.append(finalCircle)
        let boxMid = document.querySelector('div.box')
        let size = boxMid.getBoundingClientRect()


        if (finalCircle.getAttribute('class') !== 'box') {
            if ((+finalCircle.style.left.replace('px', '') > (size.x)) && (+finalCircle.style.left.replace('px', '') < (size.right - 50)) && (+finalCircle.style.top.replace('px', '') > (size.top)) && (+finalCircle.style.top.replace('px', '') < (size.bottom - 50))) {
                finalCircle.style.background = 'var(--purple)'
            }
        }

        if (event.clientX - 25 < (size.x) && finalCircle.style.background === 'var(--purple)') {
            console.log(finalCircle.style.left)
            finalCircle.style.left = (size.x).toString() + 'px'

            if (event.clientY - 25 < (size.top)) {
                finalCircle.style.top = (size.y).toString() + 'px'
            }
            console.log(event.clientY - 25)
            console.log(size.bottom)

            if (event.clientY - 25 > (size.bottom - 50)) {
                finalCircle.style.top = (size.bottom - 50).toString() + 'px'
            }
        } else if (event.clientX - 25 > (size.right - 50) && finalCircle.style.background === 'var(--purple)') {
            finalCircle.style.left = (size.right - 50).toString() + 'px'

            if (event.clientY - 25 < (size.top)) {
                finalCircle.style.top = (size.y).toString() + 'px'
            }
            console.log(event.clientY - 25)
            console.log(size.bottom)

            if (event.clientY - 25 > (size.bottom - 50)) {
                finalCircle.style.top = (size.bottom - 50).toString() + 'px'
            }
        } else if ((event.clientY - 25 > (size.bottom - 50)) && finalCircle.style.background === 'var(--purple)') {
            finalCircle.style.top = (size.bottom - 50).toString() + 'px'

        } else if ((event.clientY - 25 < (size.top)) && finalCircle.style.background === 'var(--purple)') {
            finalCircle.style.top = (size.top).toString() + 'px'

        }

    })

}

export function setBox() {
    const boxMid = document.createElement('div')
    boxMid.setAttribute('class', 'box')
    document.body.append(boxMid)
}
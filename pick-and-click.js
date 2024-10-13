"use strict";

export const pick = () => {
    let hueNum = 0
    let lumVal = 0

    const divHsl = document.createElement('div')
    const body = document.querySelector('body')
    divHsl.classList.add("hsl")
    divHsl.textContent = "hsl"
    body.append(divHsl)

    const divHue = document.createElement('div')
    divHue.classList.add("text")
    divHue.classList.add("hue")
    divHue.textContent = hueNum
    body.append(divHue)

    const lumDiv = document.createElement('div')
    lumDiv.classList.add("luminosity")
    lumDiv.classList.add("text")
    lumDiv.textContent = lumVal
    body.append(lumDiv)

    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
    const lineX = document.createElementNS('http://www.w3.org/2000/svg','line')
    const lineY = document.createElementNS('http://www.w3.org/2000/svg','line')
    lineX.id = "axisX"
    lineY.id = "axisY"
    svg.append(lineX)
    svg.append(lineY)
    body.append(svg)

    document.addEventListener('click', function(e) {
        hueNum = Math.round((e.clientX / window.innerWidth) * 360)
        lumVal = Math.round((e.clientY / window.innerHeight) * 100)
        navigator.clipboard.writeText(`hsl(${hueNum}, 50%, ${lumVal}%)`)
    })

    document.addEventListener('mousemove', function(e) {
        lineX.setAttribute("y1", "0")
        lineX.setAttribute("y2", window.innerHeight)
        lineX.setAttribute("x1", e.clientX)
        lineX.setAttribute("x2", e.clientX)
        // lineY.setAttribute("y1", e.clientY)
        // lineY.setAttribute("y2", e.clientY)
        // lineY.setAttribute("x1", "0")
        lineY.setAttribute("x2", window.innerWidth)
        hueNum = Math.round((e.clientX / window.innerWidth) * 360)
        lumVal = Math.round((e.clientY / window.innerHeight) * 100)
        divHsl.textContent = `hsl(${hueNum}, 50%, ${lumVal}%)`
        divHue.textContent = `hue\n${hueNum}`
        lumDiv.textContent = `${lumVal}\nluminosity`
        body.style.background = `hsl(${hueNum}, 50%, ${lumVal}%)`
    })
}
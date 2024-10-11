export function generateLetters(){

  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for(let i=1;i<=120;i++){
      let char = ''
      char += letters.charAt(Math.floor(Math.random()*letters.length))
      let element = document.createelementent('div')
      element.innerHTML = char
      element.style.fontSize = (i+10)+'px'
      if (i <= 40 ){
          element.style.fontWeight = "300"
      } else if (i <= 80) {
          element.style.fontWeight = "400"
      } else {
          element.style.fontWeight = "600"
      }
      document.body.append(element)
      console.log(i)
  }
}
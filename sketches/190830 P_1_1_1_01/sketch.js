// "use strict"

/*
Generative Design :  Color
*/

let stepX
let stepY

function setup() {
  createCanvas(windowWidth, windowHeight)

  colorMode(HSB, width, height, 100)
  noStroke()
}

function draw() {
  stepX = mouseX + 2
  stepY = mouseY + 2

  for (let gridY = 0; gridY < height; gridY += stepY) {
    for (let gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100)
      rect(gridX, gridY, stepX, stepY)
    }
  }

  fill(0)
  textSize(200)
  textAlign(CENTER, CENTER)
  textStyle(BOLD)
  text('HVJA', width/2, height/2)
}

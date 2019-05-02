// "use strict"

function setup() {
  createCanvas(1080, 1080)
  frameRate(60)
  rectMode(CENTER)
  background(0)

}

function draw() {

  push()
    translate(width/2, height/2)
    stroke(0, 0)
    fill(255)
    ellipse(0, 0, 400, 160)
    fill(0, 0)
    stroke(0)
    ellipse(0, 0, 140, 140)
  pop()

  push()
    translate(mouseX, mouseY)
    stroke(255)
    fill(0)
    ellipse(0, 0, 20, 20)
  pop()

}

// function mousePressed() {
//   background(0)
// }

function keyPressed() {
  // tab key
  if (keyCode === TAB) {
    saveCanvas('190501', 'png')
  }
}

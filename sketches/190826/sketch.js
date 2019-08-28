// "use strict"

/*
This is a nice grid set up for gestalt sketching.
Where testBlip could be a dynamic object.
*/
const blipSize = 100

// layout
const MARGIN = blipSize / 2
const COLUMNS = 5
const ROWS = 5
const PADDING = blipSize * 0.2
const GRIDBOX = blipSize + PADDING
const START = (blipSize / 2) + MARGIN

let BLIPS = []

function setup() {
  const totalX = START + GRIDBOX * COLUMNS
  const totalY = START + GRIDBOX * ROWS
  createCanvas(totalX, totalY)
  frameRate(60)
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  background(0, 25) // white

  for (let x = 0; x < COLUMNS; x++){
    for (let y = 0; y < ROWS; y++){
      const posX = START + (x * GRIDBOX)
      const posY = START + (y * GRIDBOX)
      BLIPS.push(new testBlip(posX, posY))
    }
  }

  BLIPS.forEach(testblip => {
    testblip.render()
  })
}

function testBlip(x, y) {
  push()
    noFill()
    stroke('white')
    translate(x, y)
    ellipse(0, 0, blipSize, blipSize)
    rect(0, 0, blipSize, blipSize)
  pop()
}

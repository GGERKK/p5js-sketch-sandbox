// "use strict"

/*
This is a nice grid set up for gestalt sketching.
Where testBlip could be a dynamic object.
*/
const blipSize = 60
let angle = 0

// layout
const MARGIN = blipSize / 2
const COLUMNS = 5
const ROWS = 5
const PADDING = blipSize * 0.5
const GRIDBOX = blipSize + PADDING
const START = (blipSize / 2) + MARGIN

//define grid array
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
  background(0)



  // create grid using a 2D array
  for (let x = 0; x < COLUMNS; x++){
    for (let y = 0; y < ROWS; y++){
      const posX = START + (x * GRIDBOX)
      const posY = START + (y * GRIDBOX)
      // pulsing
      let d1 = (sin(angle - ((x) * (y))) * blipSize)
      // for each x position and y position put something into the grid
      BLIPS.push(new testBlip(posX, posY, d1))
      angle += 0.02
    }
  }
}

// the thing we put into the grid
function testBlip(x, y, grow) {
  push()
    noFill()
    stroke('white')
    translate(x, y)
    //ellipse(0, 0, blipSize, blipSize)
    ellipse(0,0, grow, grow)
    rotate(45 * grow/8)
    rect(0,grow/4, grow / 4, grow/4)
    push()
    for(i=0;i<grow;i++){
      ellipse(0,grow/6,2,2)
      translate(0,0+grow/15)
    }
    pop()
    rect(0, 0, blipSize, blipSize)
  pop()
}

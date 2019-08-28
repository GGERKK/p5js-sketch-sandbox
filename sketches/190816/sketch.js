// "use strict"

// Emmaus Church logo designed and coded by Gregory Gerken
// Commisioned by Nick Cunningham
// August 2019

let barWeight = 3
let barWidth = 5 + barWeight/2
let barLength = barWidth * 10 - barWeight*2
let rotDeg = 270

function debugEllipse() {
  push()
    strokeWeight(2)
    stroke(0,255,200,0)
    fill(0,0)
    ellipse(0,0,30,30)
  pop()
}

function emmausSwirl(swirls,thickness){
    strokeWeight(thickness)
    for(i=0;i<swirls;i++){
      line(0,0,10+thickness+(i*10),0)
      translate(thickness*i,thickness)
      rotate(-90)
    }
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(60)
  angleMode(DEGREES)
  // rectMode(CENTER)
}

function draw() {

  // background(10,45,40) // green
  // background(25,15,15) // red tint
  background(255) // white

  push()
    translate(width/2,height/2+barWidth)
    fill(180,5,30)
    noStroke()
    rect(-80, -80, 160, 160, 10)
  pop()

  // if (rotDeg < 268 || rotDeg > 272) {
  //   rotDeg = rotDeg + 2
  // } else {
  //   rotDeg = rotDeg + 0.04
  // }
  //
  // if (rotDeg > 360) {
  //   rotDeg = 0
  // }

  push()
    translate(width/2, height/4)
    stroke(0)
    strokeCap(PROJECT)
    emmausSwirl(10,7)
  pop()

  push()
    fill(255,150)
    // fill(170,150,50) // gold(?)
    strokeWeight(barWeight/2)
    // stroke(170,150,50) // gold
    stroke(255,50)
    strokeCap(ROUND)
    translate((width/2)-(barLength/2),(height/2)+(barLength/2))
      rotate(180)
    translate(-barLength,-barWidth)
    debugEllipse()

    rect(0,0,barLength,barWidth)
      rotate(-rotDeg)
    translate(0,-barLength)
    debugEllipse()
    rect(0,0,barLength,barWidth)
      rotate(-rotDeg)
    translate(0,-barLength)
    debugEllipse()
    rect(0,0,barLength,barWidth)
      rotate(-rotDeg)
    translate(0,-barLength)
    debugEllipse()

    rect(0,0,barLength-barWidth*2,barWidth)
      rotate(-rotDeg)
    translate(0,-barLength+barWidth*2)
    debugEllipse()
    rect(0,0,barLength-barWidth*2,barWidth)
      rotate(-rotDeg)
    translate(0,-barLength+barWidth*2)
    debugEllipse()

    rect(0,0,barLength-barWidth*4,barWidth)
      rotate(-rotDeg)
    translate(0,-barLength+barWidth*4)
    debugEllipse()
    rect(0,0,barLength-barWidth*4,barWidth)
      rotate(-rotDeg)
    translate(0,-barLength+barWidth*4)
    debugEllipse()

    rect(0,0,barLength-barWidth*6,barWidth)
      rotate(-rotDeg)
    translate(0,-barLength+barWidth*6)
    debugEllipse()
    rect(0,0,barLength-barWidth*6,barWidth)
  pop()

  // push()
  //   fill(0)
  //   noStroke()
  //   translate((width/2)-(barLength/2), (height/2)+(barLength+barWidth))
  //   rect(0,0,barLength,-barWidth)
  //   translate(-barWidth,-barLength)
  //   rect(barWidth,0,barWidth,barLength)
  //   translate(barWidth,0)
  //   rect(0,0,barLength,barWidth)
  //   translate(barLength-(barWidth),0)
  //   rect(0,0,barWidth,barLength-(barWidth*2))
  //   translate(barWidth,barLength-(barWidth*3))
  //   rect(0,0,-barLength+(barWidth*2),barWidth)
  //   translate(-barLength+(barWidth*2),-barLength+(barWidth*5))
  //   rect(0,0,barWidth,barLength-(barWidth*4))
  //   rect(0,0,barLength-(barWidth*4),barWidth)
  //   translate(barLength-(barWidth*5),0)
  //   rect(0,0,barWidth,barLength-(barWidth*6))
  //   translate(-barLength+(barWidth*7),barLength-(barWidth*7))
  //   rect(0,0,barLength-(barWidth*6),barWidth)
  //   //debugEllipse(0,0,20,20)
  // pop()

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

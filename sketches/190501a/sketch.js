// "use strict"
let diameter
let angle = 0
const lowEnd = -150
const highEnd = 150

function setup() {
    createCanvas(windowWidth, windowHeight)
    diameter = 150
    frameRate(60)
    rectMode(CENTER)
    background(19, 22, 23)

}

function draw() {

    translate(width/2, height/2)
    stroke(0, 0)
    fill(195, 195, 185)
    ellipse(0, 0, 400, 160)
    fill(0, 0)
    stroke(255)
    ellipse(0, 50, 160, 160)

}

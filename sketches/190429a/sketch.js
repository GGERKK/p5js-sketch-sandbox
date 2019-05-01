// "use strict"
let diameter
let angle = 0
const lowEnd = -150
const highEnd = 150

function setup() {
    createCanvas(720, 720)
    diameter = 150
    frameRate(60)
    rectMode(CENTER)
    noStroke()
    background(0, 0, 255)

}

function draw() {

    let breath = 10 + (sin(angle) * diameter) / 2 + diameter / 2;

    translate(width/2, height/2)
    ellipse(0, 0, breath, breath)

    angle += 0.02

    while(breath > lowEnd && breath < highEnd ) {
        angle -= 0.02
    }

}

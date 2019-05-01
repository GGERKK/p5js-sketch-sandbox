// "use strict"

let rotateAngle = 0

function setup() {
    createCanvas(720, 720)
    angleMode(DEGREES)

}

function draw() {
    background(0, 4)
    noFill()
    stroke(255)
    for(let i = 0; i < 60; i++) {
        translate(width/2, height/2)
        ellipse(i, 20 + i, 20, 20+i)
        rotate(rotateAngle)
        rotateAngle = rotateAngle + 100
    }
}

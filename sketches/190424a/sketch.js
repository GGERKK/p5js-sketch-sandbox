// "use strict"

let gray
let y
let wobble = 2

function setup() {
    createCanvas(720, 720)
    frameRate(60)
    angleMode(DEGREES)
    gray = color(150, 150, 150)
    y = height

    background(50)
}

function draw() {


    push()
        stroke(255)
        strokeWeight((10+wobble)/20)
        translate(0, 0)
        rotate(40)
        beginShape(POINTS)
        vertex(wobble, 24 + y * sin(wobble))
        vertex(wobble, y * sin(wobble / 2) + 10)
        vertex(wobble, y / sin(wobble))
        vertex(wobble, 400 / sin(y))
        vertex(wobble, 250 / sin(y))
        vertex(wobble -2, 30 / sin(y) + 20)
        vertex(wobble, 2 + (y * sin(y)))
        vertex(wobble, 300 / sin(y))
        endShape()
    pop()

    wobble = wobble + 1
    if (wobble > width + 400) {
        wobble = 0
    }

    push()
        background(0, 2)
        y = y - 1;
        if (y < 10) {
            y = height;
        }
        stroke(0)
        // line(0, y, width, y);
    pop()
}

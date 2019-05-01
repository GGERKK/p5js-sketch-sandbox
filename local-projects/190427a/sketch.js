// "use strict"


function setup() {
    createCanvas(720, 720)
    angleMode(DEGREES)
    rectMode(CENTER)
    noStroke()
    background(0, 0, 255)

}

function draw() {

    blurb(width, height, width, height)
    translate(width/4, height/2)
    blurb(width/2, height/2, width/2, height/2)
    translate(width/8, height/4)
    blurb(width/4, height/4, width/4, height/4)
    translate(width/16, height/8)
    blurb(width/8, height/8, width/8, height/8)


}


function blurb(posX, posY, x, y) {

    fill(0)
    rect(posX/2, posY/2, x, y)
    fill(255)
    rect(posX/2, posY/4, x, y/2)
    fill(0)
    rect(posX/8, posY/4, x/4, y/2)
    rect(posX/1.14, posY/4, x/4, y/2)
    ellipse(posX/4, posY/4, x/2, y/2)
    ellipse(posX/1.3333, posY/4, x/2, y/2)
    fill(255)
    rect(posX/2, posY/1.3333, x/2, y/2)
    ellipse(posX/4, posY/1.3333, x/2, y/2)
    ellipse(posX/1.3333, posY/1.3333, x/2, y/2)

}

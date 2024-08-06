'use strict'

// TODO: render the balloons + onload='init()'  
// TODO: onmouseover='speedUp
// TODO: createBalloons(count) , createBalloon()
// TODO: remove balloon1, balloon2 classes - move into inline style='bgcolor, left'

var gInterval 

//model:
var gBalloons = [
    { id: 1, speed: 10, bottom: 0 },
    { id: 2, speed: 15, bottom: 0 },
    { id: 3, speed: 15, bottom: 0 }
]

function onStart() {
    if(gInterval) clearInterval(gInterval)

    gInterval = setInterval(moveBalloons, 1000)
}

function moveBalloons() {
    const elBalloons = document.querySelectorAll('.balloon')

    for (var i = 0; i < gBalloons.length; i++) {
        // model
        const balloon = gBalloons[i]
        // dom
        const elBalloon = elBalloons[i]

        // update the model
        balloon.bottom += balloon.speed
        // update the dom
        elBalloon.style.bottom = balloon.bottom + 'px'
    }
}

function onBlowUp(elBalloon) {
    elBalloon.style.display = 'none'
    playSound()
}

function playSound() {
    const audioPop = new Audio('sound/pop.mp3')
    audioPop.play()
}

// Utility Functions

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min  // The maximum is exclusive and the minimum is inclusive
}

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    var color = '#'

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
var options = [ 'rock', 'paper', 'scissors']
var option = Math.floor(Math.random() * options.length)
var rock = $('#rock')
var paper = $('#paper')
var scissors = $('#scissors')
var reset = $('#reset')

function winner() {
    $('h1').text('You won. Yay! ')
}

function loser() {
    $('h1').text('You lost. Better luck next time...')
}

function draw() {
    $('h1').text('You drew. Try again.')
}

rock.on('click', function () {
    if (options[option] == 'rock') {
        draw();
    } else if (options[option] == 'paper') {
        loser()
    } else {
        winner()
    }
})

paper.on('click', function () {
    if (options[option] == 'paper') {
        draw()
    } else if (options[option] == 'scissors') {
        loser()
    } else {
        winner()
    }
})

scissors.on('click', function () {
    if (options[option] == 'scissors') {
        draw()
    } else if (options[option] == 'rock') {
        loser()
    } else {
        winner()
    }
})

reset.on('click', function () {
    window.location.reload();
})
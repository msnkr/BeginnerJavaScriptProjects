var number = 0
var add = $('#add')
var subtract = $('#subtract')
var reset = $('#reset')


add.on('click', function () {
    number++;
    $('h3').text(number);
    if (number > 0) {
        $('h3').css('color', 'lightgreen')
    } else if (number == 0) {
        $('h3').css('color', 'black');   
    }
})

subtract.on('click', function () {
    number--;
    $('h3').text(number);
    if (number < 0) {
        $('h3').css('color', 'red')
    } else if (number == 0) {
        $('h3').css('color', 'black')
    }
})

reset.on('click', function () {
    number = 0
    $('h3').text(number)
    $('h3').css('color', 'black')
})
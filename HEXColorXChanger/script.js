function changeColor() {
    colorValue = '#' + Math.random().toString(16).slice(2, 8)
    $('button').on('click',function () {
        $('h2').text('Hex value :' + colorValue);
        $('.background').css('background', colorValue);
        changeColor()
    })
}

changeColor()
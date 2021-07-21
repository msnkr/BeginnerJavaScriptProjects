function colorChanger() {
    var reset = $('#reset')
    var colorList = ['cyan', 'magenta', 'black', 'orange', 'yellow', 'coral', 'crimson', 'salmon', 'seagreen', 'red']

    var color = Math.floor(Math.random() * colorList.length)
    var value = colorList[color]

    $('button').on('click', function name(params) {
        $('.background').css('background', value)
        colorChanger()
    })
}

colorChanger()

function collectInput() {
    var collected = $('#input').val();
    printInput(collected);
    $("#input").val('');
}

function printInput(collected) {
    var listItem = $('ul').prepend('<li>' + collected + '</li>').append("<button>Delete</button>");
    listItem.toggleClass('#items');
}
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 400) {
        $('#buttons').fadeIn();
    } else {
        $('#buttons').fadeOut();
    }

});
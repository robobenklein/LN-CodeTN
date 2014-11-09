$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.buttons').fadeIn();
    } else {
        $('.buttons').fadeOut();
    }
});
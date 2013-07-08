$(function() {
    var $ratings = $('#rating-js, #rating-half-js');

    setTimeout(function () {
        $('li.current', $ratings).children().width('73%');
    }, 3000);

    $ratings.on('mouseover', function() {
        $(this).removeClass('show-current');
    }).on('mouseleave', function() {
        $(this).addClass('show-current');
    });

    $('li', $ratings).on('click', function() {
        alert('User selected ' + $(this).text());
    });
});
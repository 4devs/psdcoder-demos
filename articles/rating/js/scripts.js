$(function() {
    var $ratings = $('#rating-js, #rating-half-js'),
        changeCurrentRating = function () {
            var newValue = Math.floor(Math.random() * 100) + '%',
                $valueContainer = $ratings.next('p.current-value');
            $('li.current', $ratings).children().width(newValue);

            if ($valueContainer.length > 0) {
                $valueContainer.text(newValue);
            } else {
                $ratings.after($('<p/>', {
                    'class': 'current-value',
                    'text': newValue
                }));
            }

            setTimeout(changeCurrentRating, 3000);
        };


    setTimeout(changeCurrentRating, 3000);

    $ratings.on('mouseover', function() {
        $(this).removeClass('show-current');
    }).on('mouseleave', function() {
        $(this).addClass('show-current');
    });

    $('li', $ratings).on('click', function() {
        alert('User selected ' + $(this).text());
    });
});
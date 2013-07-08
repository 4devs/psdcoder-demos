(function($, undefined) {
    $(function () {
        var currentHash = window.location.hash,
            $tabs = $('.tabs-container');

        if (currentHash !== '') {
            var $link = $('a[href="' + currentHash + '"]', $tabs);

            if ($link.length > 0) {
                $link.tab('show');
            }
        }

        $tabs.on('click', 'a', function() {
            var hash = $(this).attr('href');

            if (hash !== '') {
                window.location.hash = hash;
            }
        });
    });
})(window.jQuery);
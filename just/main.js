 $(function() {
    $('.all-stuff > div').hide();
    $('.all-stuff > div:first').show();
    $('.yo a:first').addClass('active');

    $('.yo a').click(function() {
        if ($(this).hasClass('active') == true) {
            return false;
        }
        else {
            $('a.active').removeClass('active');
            $(this).addClass('active');

            $('.all-stuff > div').fadeOut();
            var contentToLoad = $(this).attr('href');
            $(contentToLoad).fadeIn();

            return false;
        }
    });
});

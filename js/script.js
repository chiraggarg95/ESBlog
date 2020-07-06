$(document).ready(function () {

    $(window).click(function () {
        $('.card').removeClass('visible2');
        $('.popup').css('opacity', '0');
        $('#navigation-bar').css('bottom', '-5vh');
        setTimeout(function () {
            $('.popup').css('display', 'none');
        }, 400);
    });

    $('#previous, #next').click(function (e) {
        e.stopPropagation();
    });

    $('.grid-card').click(function (e) {
        e.stopPropagation();
        $('.popup').css('display', 'initial');
        $('#navigation-bar').css('bottom', 0);
        setTimeout(function () {
            $('.popup').css('opacity', 1);
        }, 100);
        setTimeout(function () {
            $('.card').addClass('visible2');
        }, 400);
        setTimeout(function () {
            $('.card1-content').css('opacity', '1');
        }, 1000);
    });

    $('.card').click(function (e) {
        e.stopPropagation();
    });

    $('input[type=\'text\']').each(function () {
        if ($(this).val() !== '') $('#' + $(this).attr('id') + '_label').addClass('out');
        else $('#' + $(this).attr('id') + '_label').removeClass('out');
        $(this).focus(function () {
            $('#' + $(this).attr('id') + '_label').addClass('out');
        });
        $(this).blur(function () {
            if ($(this).val() === '') {
                $('#' + $(this).attr('id') + '_label').removeClass('out');
            }
        });
    });

    $('.nav-button').click(function () {
        $('nav ul, .nav-button').toggleClass('open');
    });
});

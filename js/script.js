$(document).ready(function () {
    $('.card').addClass('visible1');
    setTimeout(function () {
        $('.card').addClass('visible2');
    }, 600);

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

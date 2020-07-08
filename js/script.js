$(document).ready(function () {

    $(window).click(function () {
        $('.card').removeClass('visible2');
        $('.popup').css('opacity', '0');
        $('#navigation-bar').css('top', '100vh');
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
        $('#navigation-bar').css('top', '95vh');
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

    $('input[type=\'text\'], textarea').each(function () {
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

    const regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const regex2 = /^[a-zA-Z\s]+$/;
    const regex3 = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    $('#comments').submit(function (e) {
        if ($('#name').val() === '' || $('#email').val() === 0 || $('#comment').val() === '') {
            $('.text-danger').css('opacity', '1').css('visibility', 'visible');
            $('.text-danger').html('Please fill all * marked fields.');
            return false;
        }
        if (!regex2.test($('#name').val())) {
            $('.text-danger').css('opacity', '1').css('visibility', 'visible');
            $('.text-danger').html('Please enter a valid name.');
            return false;
        }
        if (!regex.test($('#email').val())) {
            $('.text-danger').css('opacity', '1').css('visibility', 'visible');
            $('.text-danger').html('Please enter a valid e-mail address.');
            return false;
        }
        if ($('#website').val() !== '' && !regex3.test($('#website').val())) {
            $('.text-danger').css('opacity', '1').css('visibility', 'visible');
            $('.text-danger').html('Please enter a valid website or leave it blank.');
            return false;
        }
        $('.text-danger').css('opacity', '0');
        return true;
    });
});

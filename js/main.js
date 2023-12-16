$(document).ready(function () {
    $(".logo-container").delay(1000).fadeOut(250);
    $(".main-content").delay(1000).fadeIn(250);
    $('.progress-container').each(function () {
        let getMark = parseFloat($(this).find('.mark').text());

        if (getMark === 12) {
            $(this).find('.progress-fill').css('width', '100%');
        } else {
            let getWidth = 8.33 * getMark;
            $(this).find('.progress-fill').css('width', getWidth + '%');
        }
    });

});
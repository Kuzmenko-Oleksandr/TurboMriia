$(document).ready(function () {
    $(".logo-container").delay(1000).fadeOut(250);
    $(".main-content").delay(1000).fadeIn(250);
    $('.progress-container').each(function () {
        let getMark = parseFloat($(this).find('.mark').text());
        if (getMark !== 12) {
            let getWidth = 8.33 * getMark;
            $(this).find('.progress-bar .progress-fill').css('width', getWidth + '%');
        }
        if ($(this).find('.emoji')){
            $emojiVal = $(this).find('.emoji').attr('value');
            if ($emojiVal === '1') {
            $(this).find('.progress-bar .progress-fill').css('width', '33%');
            $(this).find('.emoji').html('&#128546;');
            } else if ($emojiVal === '2') {
            $(this).find('.progress-bar .progress-fill').css('width', '66%');
            $(this).find('.emoji').html('&#128578;');
            } else if ($emojiVal === '3') {
            $(this).find('.progress-bar .progress-fill').css('width', '100%');
            $(this).find('.emoji').html('&#128513;');
        }
    }
});
    $.getJSON('http://18.117.74.112/get-grades')
        .done(function (data) {
            console.log(data);
            if (data && data.grade) {
                const grades = data.grade.join(', ');
                console.log('Grades:', grades);
            }
        })
        .fail(function (jqxhr, textStatus, error) {
            console.error('Error:', textStatus, error);
        });

})
;
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
    // Подключаем библиотеку axios
    const axios = require('axios');

// Выполняем GET-запрос к серверу
    axios.get('http://18.117.74.112/get-name')
        .then(response => {
            // Данные декодированы из JSON
            const data = response.data;

            // Если данные содержат строку в кодировке UTF-8, вы можете декодировать ее
            const utf8String = decodeURIComponent(escape(data.utf8EncodedString));
            console.log(utf8String);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
})
;
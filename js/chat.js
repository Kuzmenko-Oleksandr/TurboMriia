$(document).ready(function () {
    $(".logo-container").delay(1000).fadeOut(250);
    $(".main-content").delay(1000).fadeIn(250);
    function formatDateTime() {
        const daysOfWeek = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудня'];

        const now = new Date();

        const dayOfWeek = daysOfWeek[now.getDay()];
        const dayOfMonth = now.getDate();
        const month = months[now.getMonth()];

        const hours = ('0' + now.getHours()).slice(-2);
        const minutes = ('0' + now.getMinutes()).slice(-2);

        return `сьогодні ${dayOfMonth} ${month} ${hours}:${minutes}`;
    }

    const formattedDateTime = formatDateTime();
    $('.time').text(formattedDateTime);

    let clickCount = 0;

    $('.chat-send').on('click', function () {
        clickCount++;

        if (clickCount ===1) {
            $('.chat-img-2').show();
        } else if (clickCount === 2) {
            $('.chat-img-3').show();
        } else if (clickCount === 3) {
            $('.chat-img-4').show();
        }

    });
});
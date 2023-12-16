$(document).ready(function () {

    function formatDateTime() {
        const daysOfWeek = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        const months = ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'];

        const now = new Date();

        const dayOfWeek = daysOfWeek[now.getDay()];
        const dayOfMonth = now.getDate();
        const month = months[now.getMonth()];

        const hours = ('0' + now.getHours()).slice(-2);
        const minutes = ('0' + now.getMinutes()).slice(-2);

        return `сьогодні ${dayOfMonth}Ж${month} ${hours}:${minutes}`;
    }

    const formattedDateTime = formatDateTime();
    $('.time').text(formattedDateTime);
});
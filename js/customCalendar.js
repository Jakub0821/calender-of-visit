document.addEventListener('DOMContentLoaded', function () {
    const calendarElement = document.getElementById('custom-calendar');
    const daysElement = calendarElement.querySelector('.days');
    const monthYearElement = calendarElement.querySelector('#month-year');
    const prevMonthButton = calendarElement.querySelector('#prev-month');
    const nextMonthButton = calendarElement.querySelector('#next-month');

    let currentDate = new Date();

    function renderCalendar() {
        daysElement.innerHTML = '';
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
        const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
        const prevLastDay = new Date(currentYear, currentMonth, 0).getDate();

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        monthYearElement.textContent = currentDate.toLocaleString('default', {
            month: 'long',
            year: 'numeric',
        });

        // Populate days of the week
        const weekDaysRow = calendarElement.querySelector('.weekdays');
        weekDaysRow.innerHTML = '';
        for (let i = 0; i < daysOfWeek.length; i++) {
            const weekDay = document.createElement('div');
            weekDay.textContent = daysOfWeek[i];
            weekDaysRow.appendChild(weekDay);
        }

        for (let i = firstDayIndex; i > 0; i--) {
            const day = document.createElement('div');
            day.classList.add('prev-date');
            day.textContent = prevLastDay - i + 1;
            daysElement.appendChild(day);
        }

        for (let i = 1; i <= lastDay; i++) {
            const day = document.createElement('div');
            day.textContent = i;
            daysElement.appendChild(day);
        }
    }

    function changeMonth(direction) {
        currentDate.setMonth(currentDate.getMonth() + direction);
        renderCalendar();
    }

    prevMonthButton.addEventListener('click', function () {
        changeMonth(-1);
    });

    nextMonthButton.addEventListener('click', function () {
        changeMonth(1);
    });

    renderCalendar();
});

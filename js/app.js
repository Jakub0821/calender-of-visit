document.addEventListener("DOMContentLoaded", function() {
    const calendarElement = document.getElementById('calendar');
    calendarElement.innerHTML = "<p>Here will be your calendar</p>";

    document.addEventListener("DOMContentLoaded", function() {
        const daysElement = document.querySelector(".days");
        const formElement = document.getElementById("appointment-form");
        const currentDate = new Date();
        const monthDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    
        for (let day = 1; day <= monthDays; day++) {
            const dayElement = document.createElement("div");
            dayElement.textContent = day;
            dayElement.addEventListener("click", () => {
                // Tutaj pokazujemy formularz i możemy zapisać wybrany dzień
                formElement.style.display = "block";
                // Możesz dodać logikę do zapisania wybranego dnia w formularzu
                console.log(`Wybrany dzień: ${day}`);
            });
            daysElement.appendChild(dayElement);
        }
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        const daysElement = document.querySelector(".days");
        const formElement = document.getElementById("appointment-form");
        const currentDate = new Date();
        const monthDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    
        let selectedDay;
    
        for (let day = 1; day <= monthDays; day++) {
            const dayElement = document.createElement("div");
            dayElement.textContent = day;
            dayElement.addEventListener("click", () => {
                selectedDay = day;  // Zapisz wybrany dzień
                formElement.style.display = "block";
            });
            daysElement.appendChild(dayElement);
        }
    
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const time = document.getElementById("time").value;
            alert(`Wizyta umówiona!\nImię: ${name}\nDzień: ${selectedDay}\nCzas: ${time}`);
            formElement.style.display = "none";
        });
    });
    
    
});

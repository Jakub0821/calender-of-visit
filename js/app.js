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
        const appointmentList = document.getElementById("appointment-list");
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
            
            // Dodaj wizytę do listy
            const listItem = document.createElement("li");
            listItem.innerHTML = `Wizyta z ${name} o ${time} dnia ${selectedDay} 
                <button class="cancel-button">Anuluj</button>`;
            appointmentList.appendChild(listItem);
            
            // Resetuj formularz
            formElement.style.display = "none";
            formElement.reset();
    
            // Dodaj funkcjonalność anulowania wizyty
            listItem.querySelector(".cancel-button").addEventListener("click", () => {
                appointmentList.removeChild(listItem);
            });
    
            alert(`Wizyta umówiona!\nImię: ${name}\nDzień: ${selectedDay}\nCzas: ${time}`);
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        var calendarEl = document.getElementById('calendar');
    
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            events: [
                {
                    title: 'Umówiona wizyta',
                    start: '2024-08-28T14:00:00',
                    end: '2024-08-28T15:00:00',
                }
            ]
        });
    
        calendar.render();
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        const navLinks = document.querySelectorAll("aside nav ul li a");
        const sections = document.querySelectorAll("main > div");
    
        navLinks.forEach(link => {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                const targetId = link.getAttribute("href").substring(1);
                
                sections.forEach(section => {
                    if (section.id === targetId) {
                        section.style.display = "block";
                    } else {
                        section.style.display = "none";
                    }
                });
            });
        });
    
        // Pokaż kalendarz na start
        document.getElementById('calendar').style.display = "block";
    });
    
});

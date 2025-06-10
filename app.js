const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
console.log(urlParams.get('perfil'));
const listaAgenda = [2, 8, 11, 16, 17];

const daysContainer = document.querySelector(".days");
const monthYear = document.getElementById("month-year");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let date = new Date();

function renderCalendar(lista) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const today = new Date();
    const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    monthYear.textContent = `${monthNames[month]} ${year}`;
    daysContainer.innerHTML = "";

    for (let i = 1; i <= lastDate; i++) {
        const isToday = isCurrentMonth && i === today.getDate();
        const diaEstaNaLista = lista.includes(i);
        if(isToday && diaEstaNaLista){
            daysContainer.innerHTML += `<a href="agendaDiaPsi.html"><div class="today agenda-perfil">${i}</div></a>`;
        } else if (isToday){
            daysContainer.innerHTML += `<div class="today">${i}</div>`;
        } else if (diaEstaNaLista){
            daysContainer.innerHTML += `<a href="agendaDiaPsi.html"><div class="agenda-perfil">${i}</div></a>`;
        } else {
            daysContainer.innerHTML += `<div>${i}</div>`;
        }
    }

}

prevBtn.addEventListener("click", () => {
date.setMonth(date.getMonth() - 1);
renderCalendar(listaAgenda);
});

nextBtn.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar(listaAgenda);
});

renderCalendar(listaAgenda);
// parâmetros passados pelo url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const usuario = urlParams.get('perfil');
const agenda = urlParams.get('agenda');
// tags que serão manipulados
const daysContainer = document.querySelector(".days");
const monthYear = document.getElementById("month-year");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
// variáveis do mês
let date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const firstDay = new Date(year, month, 1).getDay();
const lastDate = new Date(year, month + 1, 0).getDate();
const today = new Date();
const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

const listaAgenda = procurarDias(usuario, agenda);

function renderCalendar(lista) {
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

function procurarDias(perfil, agenda){
    // perfis: psicologo, paciente
    let listaDias = [];
    if(perfil === 'psicologo' && agenda === 'psicologo'){
        listaDias = [2, 8, 11, 16, 17];
    } else if (perfil === 'paciente' && agenda === 'psicologo'){
        listaDias = diasUteis(date.getMonth());
    } else if (perfil === 'paciente' && agenda === 'paciente'){
        listaDias = [11];
    }
    return listaDias;
}

function diasUteis(mes){
    let lista = [];
    

    return lista;
}

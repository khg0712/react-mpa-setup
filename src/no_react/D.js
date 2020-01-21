import css from './D.css';

const table = document.querySelector("table[data-table");
const tbody = document.querySelector("tbody[data-tbody]");
table.className = css.table;

function init() {
    const rowTemplate = "<td>${num}</td><td>${num}</td><td><button data-button=\"${num}\">버튼</button></td>"
    for (let i = 0; i < 5; i++) {
        const row = document.createElement("tr");
        row.innerHTML = rowTemplate.split('${num}').join(String(i));
        tbody?.appendChild(row);
    }
}

function bind() {
    const buttons = Array.prototype.slice.call(document.querySelectorAll("button[data-button]"));
    buttons.forEach((el) => el.addEventListener('click', () => {
        console.log(el.dataset.button)
    }))
}

init();
bind();
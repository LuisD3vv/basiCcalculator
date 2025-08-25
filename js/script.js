let numeroAnterior;
let mostrar = document.querySelector('#showResult');
let resultadoAnterior = document.querySelector('#lastres');

// Funcion nueva conocida eval()


actualizarSalida()
function numeros(n) {
    if (mostrar.textContent === "0") {
        mostrar.textContent = "";
    }
    mostrar.textContent += n;
}

document.querySelector("#equal").addEventListener('click', () => {
    // eval es una funcion que convierte en su expresion matematica a un string
    resultadoAnterior.textContent = mostrar.textContent;
    mostrar.textContent = eval(mostrar.textContent);
})

function actualizarSalida() {
    // si no hay entrada, el contenido sera un 0
    if (!mostrar.textContent) {
        mostrar.textContent = '0';
    }
}

// Funciones extras relacionadas con la apariencia
let delee = document.querySelector('.del');
delee.addEventListener('click', () => {
    document.querySelector('#showResult').textContent = "0";
});
let tema1 = document.querySelector(".bg-normal")
tema1.addEventListener("click", () => {
    document.body.style.backgroundColor = "#3A4764FF";
    alert("Tema cambiado!");
});
let tema2 = document.querySelector(".bg-white")
tema2.addEventListener("click", () => {
    document.body.style.backgroundColor = "#E6E6E6FF";
    alert("Tema cambiado!");
});
let tema3 = document.querySelector(".bg-purple")
tema3.addEventListener("click", () => {
    document.body.style.backgroundColor = "#160628FF";
    alert("Tema cambiado!");
});

function del() {
    // al presionarse se elimina uno a uno de derecha a izquierda
    mostrar.textContent = mostrar.textContent.slice(0, -1);
    actualizarSalida();
}



let mostrar = document.querySelector('#showResult');
// para mostrar la operacion anterior en la parte de arriba
let resultadoAnterior = document.querySelector('#lastres');

// Funcion nueva conocida eval()
//La función Eval evalúa el expresión de cadena y devuelve su valor (en forma de expresion matematica). Por ejemplo, Eval("1 + 1") devuelve 2., solo funciona con operadores dentro del lenguaje

actualizarSalida();
function numeros(n) {
    // Funcion que toma como parametro el boton presionado y su argumento
    if (mostrar.textContent === "0") {
        mostrar.textContent = "";
    }
    // irle sumando al string un nuevo elemento para posteriormente
    // trasnformarlo en una operacion matematica
    mostrar.textContent += n;
}
document.querySelector("#equal").addEventListener('click', () => {
    //La función Eval evalúa el expresión de cadena y devuelve su valor. Por ejemplo, Eval("1 + 1") devuelve 2.
    resultadoAnterior.textContent = mostrar.textContent;
    mostrar.textContent = eval(mostrar.textContent);
})
function actualizarSalida() {
    // si no hay entrada, el contenido sera un 0, para evitar numeros erroneos
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
    document.querySelector('#showResult').style.color = '';
    document.querySelector(".bg-keypad").style.backgroundColor = 'hsl(223, 31%, 20%)';
    document.querySelector(".contenedor__display").style.backgroundColor = 'hsl(224, 36%, 15%)';
    document.querySelector("#lastres").style.color = 'white';
    document.querySelector("#showResult").style.color = 'white';
    document.querySelector("#title").style.color = 'hsl(60, 10%, 19%)';
    document.querySelector("#equal").style.backgroundColor = 'hsl(6, 63%, 50%)';
    document.querySelector("#reset").style.backgroundColor = 'hsl(225, 21%, 49%)';
    document.querySelector("#del").style.backgroundColor = 'hsl(225, 21%, 49%)';
    document.querySelector("#title").style.color = 'white';

    alert("Tema cambiado!");
});
let tema2 = document.querySelector(".bg-white");
tema2.addEventListener("click", () => {
    document.body.style.backgroundColor = "#E6E6E6FF";
    document.querySelector('#showResult').style.color = '';
    document.querySelector(".bg-keypad").style.backgroundColor = 'hsl(0, 5%, 81%)';
    document.querySelector(".contenedor__display").style.backgroundColor = 'hsl(0, 0%, 93%)';
    document.querySelector("#lastres").style.color = 'hsl(60, 10%, 19%)';
    document.querySelector("#showResult").style.color = 'hsl(60, 10%, 19%)';
    document.querySelector("#title").style.color = 'hsl(60, 10%, 19%)';
    document.querySelector("#equal").style.backgroundColor = 'hsl(25, 98%, 40%)';
    document.querySelector("#reset").style.backgroundColor = ' hsl(185, 42%, 37%)';
    document.querySelector("#del").style.backgroundColor = ' hsl(185, 42%, 37%)';

    alert("Tema cambiado!");
});
let tema3 = document.querySelector(".bg-purple")

tema3.addEventListener("click", () => {
    document.body.style.backgroundColor = "#160628FF";
    document.querySelector('#showResult').style.color = '';
    document.querySelector(".bg-keypad").style.backgroundColor = 'hsl(268,71%,12%)';
    document.querySelector(".contenedor__display").style.backgroundColor = 'hsl(268,71%,12%)';
    document.querySelector("#lastres").style.color = 'hsl(52, 100%, 62%)';
    document.querySelector("#showResult").style.color = 'hsl(52, 100%, 62%)';
    document.querySelector("#equal").style.backgroundColor = 'hsl(176, 100%, 44%)';
    document.querySelector("#reset").style.backgroundColor = 'hsl(285, 91%, 52%)';
    document.querySelector("#del").style.backgroundColor = 'hsl(285,91%,52%)';
    document.querySelector("#title").style.color = 'hsl(52, 100%, 62%)';
    document.querySelectorAll(".num").forEach(num => {
        num.style.backgroundColor = 'hsl(268, 47%, 21%)';
        num.style.color = 'hsl(52, 100%, 62%)';
        num.style.boxShadow = '0 2px 0 1px hsl(290, 70%, 36%)';
    });
    alert("Tema cambiado!");
});
function del() {
    // Metodo del string que elimina un caracter de izquierda a derecha
    mostrar.textContent = mostrar.textContent.slice(0, -1);
    actualizarSalida();
}

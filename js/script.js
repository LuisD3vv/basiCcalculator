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

/*
* nota, al mometo de cambiar estilos mediante el jaavscriopt este lo hace mediante los etilos inline,
* lo que nos puede traer problemas al tener estilos externos, haciedo que no agarren o no funcionen
* debido a la cascada de estilos, tieane mas preferencia los inline que los de la hoja externa
* por lo cual solo debemos de utilizar important en casos muy necesarios para evitar colisiones
* */
function theme(option) {
    switch (option) {
        case 1:
            document.body.classList.remove('tema-principal','tema-blanco','tema-purpura')
            document.body.classList.add('tema-principal');
            break;
        case 2:
            document.body.classList.remove('tema-principal','tema-blanco','tema-purpura')

            document.body.classList.add('tema-blanco') ;
            break;
        case 3:
            document.body.classList.remove('tema-principal','tema-blanco','tema-purpura')

            document.body.classList.add('tema-purpura') ;
            break;
    }
}

// Funciones extras relacionadas con la apariencia
let delee = document.querySelector('.del');
delee.addEventListener('click', () => {
    document.querySelector('#showResult').textContent = "0";
});

function del() {
    // Metodo del string que elimina un caracter de izquierda a derecha
    mostrar.textContent = mostrar.textContent.slice(0, -1);
    actualizarSalida();
}

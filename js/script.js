let numeroAnterior;


// resibir el boton presionado (numerico)

function mostrar(operacion,nactual){
    let mostrar = document.querySelector("#showResult");
    console.log("Operacion",operacion);
    console.log("numero",nactual)
    if(operacion == "+") {
        mostrar.textContent = `${Number(nactual)} + ${Number(numeroAnterior)}`
    }
    else if(operacion == "-") {
        mostrar.textContent = "resta";
    }
    else if(operacion == "/") {
        mostrar.textContent = "div";
    }
    else if(operacion == "X") {
        mostrar.textContent = "multiplicacion";
    }
    numeroAnterior = nactual;
}

function equal () {

}

// enviar la operacion actual.
const operacion = document.querySelectorAll(".operacion");
operacion.forEach(op => {
op.addEventListener("click", () => {
    //if(op.textContent == "DEL") {
    //document.querySelector("#showResult").textContent = "--";
    //}
    mostrar(op.textContent);
})
})
// aqui la funcion toma como parametro cada valor que haya dentro de boton
const botones = document.querySelectorAll('.num');
botones.forEach(boton => {
boton.addEventListener("click", () => {
    //document.querySelector("#showResult").textContent = boton.textContent;
    let tran = Number(boton.textContent)
    console.log(tran)
    mostrar(tran)
})
});
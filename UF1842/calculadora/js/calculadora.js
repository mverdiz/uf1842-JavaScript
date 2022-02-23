// Cuando se cargue todo el documento en objetos...
document.addEventListener('DOMContentLoaded', domCargado);

let calculadora, a, op, b, igual, resultado;

function domCargado() {

    calculadora = document.getElementById('calculadora');
    a = document.getElementById('a');
    op = document.getElementById('op');
    b = document.getElementById('b');
    igual = document.getElementById('igual');
    resultado = document.getElementById('resultado');

    // Cuando alguien intente enviar el formulario (pulsando un botón por ejemplo)...
    calculadora.addEventListener('submit', envioFormulario);
}

function envioFormulario(e) {
    // Cancelamos el envío del formulario al servidor
    e.preventDefault();

    console.log(e.submitter.innerText, this);

    // Convertimos los datos
    const x = +a.value;
    const y = +b.value;

    // Según la operación...
    switch(op.value) {
        case '+':
            resultado.innerText = x + y;
            break;
        case '-':
            resultado.innerText = x - y;
            break;
        case '*':
            resultado.innerText = x * y;
            break;
        case '/':
            resultado.innerText = x / y;
            break;
        default:
            resultado.innerText = 'No tengo esa operación';
    }
}

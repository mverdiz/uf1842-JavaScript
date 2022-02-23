'use strict';

let objetivo;

document.addEventListener('DOMContentLoaded', function () {
    const numero = document.getElementById('numero');
    const boton = document.getElementById('boton');
    const respuesta = document.getElementById('respuesta');

    objetivo = resetear();

    boton.addEventListener('click', function () {
        if (objetivo > +numero.value) {
            respuesta.innerText = 'El objetivo es mayor';
        } else if (objetivo < +numero.value) {
            respuesta.innerText = 'El objetivo es menor';
        } else {
            respuesta.innerText = 'Acertaste';
            objetivo = resetear();
        }
    });
});

function resetear() {
    return parseInt(Math.random() * 100) + 1;
}

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const dni = document.getElementById("dni");

  formulario.addEventListener("submit", enviar);

  return validateDNI(dni);
});

function enviar(e) {
  e.preventDefault();

  console.log(validateDNI);
}

// Comprueba si es un DNI correcto (entre 5 y 8 letras seguidas de la letra que corresponda).

// Acepta NIEs (Extranjeros con X, Y o Z al principio)
function validateDNI(dni) {
  let numero, letNie, letra;
  var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

  dni = dni.toUpperCase();

  if (expresion_regular_dni.test(dni) === true) {
    numero = dni.substr(0, dni.length - 1);
    numero = numero.replace("X", 0);
    numero = numero.replace("Y", 1);
    numero = numero.replace("Z", 2);
    letNie = dni.substr(dni.length - 1, 1);
    numero = numero % 23;
    letra = "TRWAGMYFPDXBNJZSQVHLCKET";
    letra = letra.substring(numero, numero + 1);
    if (letra != letNie) {
      alert("Dni erroneo, la letra del NIF no se corresponde");
      //return false;
    } else {
      alert("Dni correcto");
      //return true;
    }
  } else {
    alert("Dni erroneo, formato no válido");
    // return false;
  }
}

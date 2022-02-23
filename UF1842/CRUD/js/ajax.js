const url = 'http://localhost:3000/usuarios/';
let listado, id, email, password, formulario;

document.addEventListener('DOMContentLoaded', async function () {
    listado = document.getElementById('listado');
    
    formulario = document.getElementById('formulario');
    
    id = document.getElementById('id');
    email = document.getElementById('email');
    password = document.getElementById('password');

    formulario.addEventListener('submit', aceptar);

    await listar();
});

async function aceptar(e) {
    e.preventDefault();

    const method = id.value ? 'PUT' : 'POST';

    const usuario = { email: email.value, password: password.value };

    if(id.value) { 
        usuario.id = id.value;
    }

    console.log(usuario);

    const respuesta = await fetch(url + id.value, {
        method: method,
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(respuesta);

    id.value = '';
    email.value = '';
    password.value = '';

    listar();
}

async function listar() {
    const respuesta = await fetch(url);
    const usuarios = await respuesta.json();

    console.log(usuarios);

    listado.innerHTML = '';

    let li;

    usuarios.forEach(function (usuario) {
        li = document.createElement('li');
        li.innerHTML = `${usuario.id}, ${usuario.email} 
            <a href="javascript:editar(${usuario.id})">Editar</a>
            <a href="javascript:borrar(${usuario.id})">Borrar</a>`;
        listado.appendChild(li);
    });
}

async function editar(idSeleccionado) {
    console.log(idSeleccionado);

    const respuesta = await fetch(url + idSeleccionado);
    const usuario = await respuesta.json();

    id.value = usuario.id;
    email.value = usuario.email;
    password.value = usuario.password;
}

async function borrar(id) {
    console.log(id);

    const respuesta = await fetch(url + id, { method: 'DELETE' });

    console.log(respuesta);

    await listar();
}
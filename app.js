function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

const inputUsuario = document.getElementById('input-usuario');
const botonEncriptar = document.getElementById('boton-encriptar');
const botonDesencriptar = document.getElementById('boton-desencriptar');

// Elemento para mostrar mensajes de error
const mensajeError = document.createElement('p');
mensajeError.style.color = 'red'; // Estilo opcional para el mensaje de error

// Función para encriptar el texto
const encriptarTexto = (texto) => {
    const encriptaciones = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Encripta el texto
    const textoEncriptado = texto.split('').map(letra => encriptaciones[letra] || letra).join('');
    return textoEncriptado;
};

// Función para mostrar el mensaje de error
const mostrarMensajeError = (mensaje) => {
    mensajeError.textContent = mensaje;
};

// Función para ocultar el mensaje de error
const ocultarMensajeError = () => {
    mensajeError.textContent = '';
};

// Función para manejar el evento de encriptar
const manejarEncriptar = () => {
    const mensaje = inputUsuario.value;

    // Verifica si hay caracteres especiales o acentos
    const hasSpecialCharacters = /[^a-z\s]/i.test(mensaje);
    if (hasSpecialCharacters) {
        mostrarMensajeError('No se permiten caracteres especiales o acentos.');
    } else {
        ocultarMensajeError();
        const mensajeEncriptado = encriptarTexto(mensaje);
        console.log('Mensaje encriptado:', mensajeEncriptado);
    }
};

// Agrega el mensaje de error al DOM
document.body.appendChild(mensajeError);

// Agrega eventos al botón de encriptar
botonEncriptar.addEventListener('click', manejarEncriptar);

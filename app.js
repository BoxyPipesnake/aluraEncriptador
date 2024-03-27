function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

const inputUsuario = document.getElementById('input-usuario');
const botonEncriptar = document.getElementById('boton-encriptar');
const botonDesencriptar = document.getElementById('boton-desencriptar');

// Función para encriptar el texto
const encriptarTexto = (texto) => {
    const encriptaciones = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const textoEncriptado = texto.split('').map(letra => {
        const letraMin = letra.toLowerCase();
        return encriptaciones[letraMin] || letra;
    }).join('');

    return textoEncriptado;
};

// Función para manejar el evento de encriptar
const manejarEncriptar = () => {
    const mensaje = inputUsuario.value;
    const mensajeEncriptado = encriptarTexto(mensaje);
    console.log('Mensaje encriptado:', mensajeEncriptado);
    

};

// Agrega eventos a los botones
botonEncriptar.addEventListener('click', manejarEncriptar);
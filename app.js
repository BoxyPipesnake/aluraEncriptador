function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

const inputUsuario = document.getElementById('input-usuario');
const botonEncriptar = document.getElementById('boton-encriptar');
const botonDesencriptar = document.getElementById('boton-desencriptar');
const contenedorOutput = document.getElementById('contenedor-output');

const muñeco = document.querySelector('.muñeco');
const parrafoSinMensaje = document.querySelector('p:nth-child(2)');
const parrafoIngresaTexto = document.querySelector('p:nth-child(3)');

// Elemento para mostrar mensajes de error
const mensajeError = document.createElement('p');
mensajeError.classList.add('error-encriptar'); 

// Elemento <p> para el texto encriptado
const parrafoEncriptado = document.createElement('p');
parrafoEncriptado.classList.add('texto-encriptado'); 

// Elemento botón de copiar
const botonCopiar = document.createElement('button');
botonCopiar.textContent = 'Copiar';
botonCopiar.classList.add('boton-copiar'); 

const encriptarTexto = (texto) => {
    const encriptaciones = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Encripta el texto
    const textoEncriptado = texto.split('').map(letra => {
        if (letra === ' ') {
            return ' '; // Mantener los espacios sin encriptar
        }
        return encriptaciones[letra] || letra;
    }).join('');

    return textoEncriptado;
};


const mostrarMensajeError = (mensaje) => {
    mensajeError.textContent = mensaje;
    inputUsuario.insertAdjacentElement('afterend', mensajeError); // Inserta el mensaje debajo del textarea
};

const ocultarMensajeError = () => {
    mensajeError.textContent = '';
};

const mostrarElementosIniciales = (mostrar) => {
    const elementosIniciales = [parrafoSinMensaje, parrafoIngresaTexto];
    const displayValue = mostrar ? 'block' : 'none';

    elementosIniciales.forEach(elemento => {
        elemento.style.display = displayValue;
    });

    if (window.matchMedia('(min-width: 1024px)').matches) {
        muñeco.style.display = mostrar ? 'block' : 'none';
    }
    
    // Ajusta el estilo del contenedor según la visibilidad de los elementos
    contenedorOutput.style.justifyContent = mostrar ? 'center' : 'flex-start';
}

// Función para manejar el evento de encriptar
const manejarEncriptar = () => {
    const mensaje = inputUsuario.value.toLowerCase().trim();

    // Verifica si el input está vacío
    if (mensaje === '') {
        mostrarMensajeError('El campo de texto está vacío.');
        botonCopiar.style.display = 'none';
        parrafoEncriptado.textContent = '';

        mostrarElementosIniciales(true); // Mostrar elementos iniciales
    } else {

        // Verifica si hay caracteres especiales o acentos
        const hasSpecialCharacters = /[^a-z\s]/i.test(mensaje);
        if (hasSpecialCharacters) {
            mostrarMensajeError('No se permiten caracteres especiales o acentos.');
            botonCopiar.style.display = 'none'; 
            parrafoEncriptado.textContent = '';  
            
            mostrarElementosIniciales(true);

        } else {
            ocultarMensajeError();
            const mensajeEncriptado = encriptarTexto(mensaje);
            parrafoEncriptado.textContent = mensajeEncriptado;
            botonCopiar.style.display = 'block';

            contenedorOutput.appendChild(parrafoEncriptado);
            contenedorOutput.appendChild(botonCopiar);


            mostrarElementosIniciales(false); // Ocultar elementos iniciales

            console.log('Mensaje encriptado:', mensajeEncriptado);
        }
    }

};

// Agrega eventos al botón de encriptar
botonEncriptar.addEventListener('click', manejarEncriptar);
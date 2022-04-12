const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

//----lista 2
const filab = document.querySelector('.contenedor-carouselb');
const peliculasb = document.querySelectorAll('.peliculab');

const flechaIzquierdab = document.getElementById('flecha-izquierdab');
const flechaDerechab = document.getElementById('flecha-derechab');



// ? ---- flecha derecha  lista 1-------
flechaDerecha.addEventListener('click', () => {
     fila.scrollLeft += fila.offsetWidth;
});

// ? ---- flecha izquierda  lista 1  -------
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});




// ? ---- flecha derecha lista 2  -------
flechaDerechab.addEventListener('click', () => {
    filab.scrollLeft += filab.offsetWidth;
});

// ? ----  flecha izquierda  lista 2 -------
flechaIzquierdab.addEventListener('click', () => {
   filab.scrollLeft -= filab.offsetWidth;
});

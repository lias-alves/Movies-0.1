const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

//----lista 2
const filab = document.querySelector('.contenedor-carouselb');
const peliculasb = document.querySelectorAll('.peliculab');

const flechaIzquierdab = document.getElementById('flecha-izquierdab');
const flechaDerechab = document.getElementById('flecha-derechab');


//----lista 3
const filac = document.querySelector('.contenedor-carouselc');
const peliculasc = document.querySelectorAll('.peliculac');

const flechaIzquierdac = document.getElementById('flecha-izquierdac');
const flechaDerechac = document.getElementById('flecha-derechac');


//----lista 4
const filad = document.querySelector('.contenedor-carouseld');
const peliculasd = document.querySelectorAll('.peliculad');

const flechaIzquierdad = document.getElementById('flecha-izquierdad');
const flechaDerechad = document.getElementById('flecha-derechad');


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

flechaIzquierdab.addEventListener('click', () => {
   filab.scrollLeft -= filab.offsetWidth;
});


// ? ---- flecha lista 3  -------
flechaDerechac.addEventListener('click', () => {
    filac.scrollLeft += filac.offsetWidth;
});


flechaIzquierdac.addEventListener('click', () => {
   filac.scrollLeft -= filac.offsetWidth;
});

// ? ---- flecha lista 4  -------
flechaDerechad.addEventListener('click', () => {
    filad.scrollLeft += filad.offsetWidth;
});


flechaIzquierdad.addEventListener('click', () => {
   filad.scrollLeft -= filad.offsetWidth;
});
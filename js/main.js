import { buscarCiudad, obtenerTemperaturas } from './api.js';
import { pintarBoton, mostrarCargando, mostrarError, limpiarResultado } from './ui.js';
import { guardarFavorito, cargarFavoritos } from './db.js';

const input = document.getElementById('input-ciudad');
const btn = document.getElementById('btn-buscar');
const btnGuardar = document.getElementById('btn-guardar');
const listaFavoritas = document.getElementById('lista-favoritas');

let cargando = false;

/* La clave que fue ANONIMA en pantalla. Dentro de manejarBúsqueda, la
   variable 'ciudad' se 'lee' solo y vive dentro de la función. Cuando
   pulsas guardar no existía, así que la copiamos aquí. */
let ciudadActual = null;

async function manejarBusqueda() {
  const ciudad = input.value.trim();
  if (!ciudad) return;

  cargando = true;
  mostrarCargando(true);
  limpiarResultado();

  try {
    const datosCiudad = await buscarCiudad(ciudad);
    if (!datosCiudad) {
      mostrarError('No se encontró la ciudad');
      return;
    }

    ciudadActual = datosCiudad;
    const temperaturas = await obtenerTemperaturas(datosCiudad.lat, datosCiudad.lon);
    pintarBoton(datosCiudad.nombre, temperaturas);
  } catch (error) {
    mostrarError('Error al obtener los datos');
  } finally {
    cargando = false;
    mostrarCargando(false);
  }
}

btn.addEventListener('click', manejarBusqueda);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') manejarBusqueda();
});

if (btnGuardar) {
  btnGuardar.addEventListener('click', async () => {
    if (ciudadActual) {
      await guardarFavorito(ciudadActual);
      if (listaFavoritas) cargarFavoritos(listaFavoritas);
    }
  });
}

if (listaFavoritas) {
  cargarFavoritos(listaFavoritas);
}
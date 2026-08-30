import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
import { SUPABASE_URL, SUPABASE_KEY } from './config.js';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function guardarFavorito(ciudad) {
  const { data, error } = await supabase
    .from('favoritos')
    .insert([{ nombre: ciudad.nombre, lat: ciudad.lat, lon: ciudad.lon }]);

  if (error) {
    console.error('Error guardando en Supabase:', error);
  } else {
    console.log('Ciudad guardada con éxito:', data);
  }
}

export async function cargarFavoritos(elementolista) {
  const { data, error } = await supabase
    .from('favoritos')
    .select('*');

  if (error) {
    console.error('Error cargando favoritos:', error);
    return;
  }

  if (elementolista) {
    elementolista.innerHTML = '';
    data.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item.nombre;
      elementolista.appendChild(li);
    });
  }
}
export async function buscarCiudad(nombre) {
  const respuesta = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(nombre)}&count=1&language=es&format=json`
  );
  if (!respuesta.ok) throw new Error("Error al buscar la ciudad");
  const datos = await respuesta.json();
  if (!datos.results || datos.results.length === 0) {
    throw new Error("Ciudad no encontrada");
  }
  const ciudad = datos.results[0];
  return {
    nombre: ciudad.name,
    lat: ciudad.latitude,
    lon: ciudad.longitude,
  };
}

export async function obtenerTemperaturas(lat, lon) {
  const respuesta = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&forecast_days=1`
  );
  if (!respuesta.ok) throw new Error("Error al obtener temperaturas");
  const datos = await respuesta.json();
  return datos.hourly.temperature_2m.slice(0, 24);
}
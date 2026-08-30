import { supabase } from "./config.js";

export async function guardarCiudad(nombre, lat, lon) {
  const { data, error } = await supabase
    .from("ciudades_favoritas")
    .insert([
      { 
        nombre: nombre, 
        lat: lat, 
        lon: lon
      }
    ]);

  if (error) {
    console.error("Error guardando en Supabase:", error);
  } else {
    console.log("Ciudad guardada con éxito:", data);
  }
}
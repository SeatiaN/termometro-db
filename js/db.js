import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_KEY } from "./config.js";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function guardarCiudad(nombre, lat, lon) {
  const { error } = await supabase
    .from("ciudades_favoritas")
    .insert({ nombre, lat, lon });
  if (error) throw new Error(error.message);
}

export async function cargarFavoritas() {
  const { data, error } = await supabase
    .from("ciudades_favoritas")
    .select();
  if (error) throw new Error(error.message);
  return data;
}
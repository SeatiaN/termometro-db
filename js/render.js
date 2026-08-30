export function pintarGrafico(ciudad, horas) {
  const resultado = document.getElementById("resultado");
  const tituloCiudad = document.getElementById("titulo-ciudad");
  const grafico = document.getElementById("grafico");

  if (!resultado || !tituloCiudad || !grafico) return;

  tituloCiudad.textContent = ciudad.nombre;
  grafico.innerHTML = "";

  horas.forEach((temp, index) => {
    const barra = document.createElement("div");
    barra.className = "barra";

    const hora = index < 10 ? `0${index}:00` : `${index}:00`;
    const altura = Math.min(Math.max((temp / 40) * 100, 5), 100);

    barra.innerHTML = `
      <div class="barra__valor">${Math.round(temp)}°</div>
      <div class="barra__relleno" style="height: ${altura}%;"></div>
      <div class="barra__hora">${hora}</div>
    `;

    grafico.appendChild(barra);
  });

  resultado.hidden = false;
}

export function mostrarCargando(consulta) {
  const divEstado = document.getElementById("estado");
  if (divEstado) divEstado.textContent = `Cargando datos de ${consulta}...`;
}

export function mostrarError(mensaje) {
  const divEstado = document.getElementById("estado");
  if (divEstado) divEstado.textContent = mensaje;
}

export function limpiarEstado() {
  const divEstado = document.getElementById("estado");
  if (divEstado) divEstado.textContent = "";
}
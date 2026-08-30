export function pintarBoton(nombre, temperaturas) {
  const resultado = document.getElementById('resultado');
  const tituloCiudad = document.getElementById('titulo-ciudad');
  const grafico = document.getElementById('grafico');

  if (!resultado || !tituloCiudad || !grafico) return;

  // Insertar el nombre de la ciudad y el botón de guardar juntos
  tituloCiudad.innerHTML = `
    ${nombre}
    <button id="btn-guardar" class="btn-guardar">Guardar esta ciudad</button>
  `;

  // Renderizar las barras de temperatura
  grafico.innerHTML = '';
  temperaturas.forEach((temp, index) => {
    const barra = document.createElement('div');
    barra.className = 'barra';

    const hora = index < 10 ? `0${index}:00` : `${index}:00`;
    const altura = (temp / 40) * 100; // Porcentaje según temperatura

    barra.innerHTML = `
      <div class="barra__valor">${Math.round(temp)}°</div>
      <div class="barra__relleno" style="--altura: ${altura}%; --color: #eab308;"></div>
      <div class="barra__hora">${hora}</div>
    `;

    grafico.appendChild(barra);
  });

  resultado.hidden = false;
}

export function mostrarCargando(estado) {
  const divEstado = document.getElementById('estado');
  if (divEstado) {
    divEstado.textContent = estado ? 'Cargando datos...' : '';
  }
}

export function mostrarError(mensaje) {
  const divEstado = document.getElementById('estado');
  if (divEstado) {
    divEstado.textContent = mensaje;
  }
}

export function limpiarResultado() {
  const resultado = document.getElementById('resultado');
  if (resultado) resultado.hidden = true;
}
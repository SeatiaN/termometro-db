export function pintarBoton(nombreCiudad, temperaturas) {
  const resultado = document.getElementById('resultado');
  const titulo = document.getElementById('titulo-ciudad');
  const grafico = document.getElementById('grafico');

  // Insertar título y el botón de guardar
  titulo.innerHTML = `
    ${nombreCiudad}
    <button id="btn-guardar" class="btn-guardar">Guardar esta ciudad</button>
  `;

  // Renderizar barras del gráfico
  grafico.innerHTML = '';
  temperaturas.forEach((temp, index) => {
    const hora = index < 10 ? `0${index}:00` : `${index}:00`;
    const barra = document.createElement('div');
    barra.className = 'barra';
    barra.style.height = `${temp * 4}px`;
    barra.setAttribute('data-temp', `${temp}°`);
    barra.setAttribute('data-hora', hora);
    grafico.appendChild(barra);
  });

  resultado.hidden = false;
}

export function mostrarCargando(cargando) {
  const estado = document.getElementById('estado');
  if (cargando) {
    estado.textContent = 'Cargando datos...';
  } else {
    estado.textContent = '';
  }
}

export function mostrarError(mensaje) {
  const estado = document.getElementById('estado');
  estado.textContent = mensaje;
}

export function limpiarResultado() {
  const resultado = document.getElementById('resultado');
  resultado.hidden = true;
}
const textarea = document.getElementById('texto');
const contador = document.getElementById('contador');

const MAX = 200;

function atualizarContador() {
  const tamanho = textarea.value.length;
  const restante = MAX - tamanho;

  contador.textContent = `Restam: ${tamanho} / ${MAX}`;

  if (restante <= 0) {
    contador.style.color = 'red';
    
  } else {
    contador.style.color = '';
  }
}

textarea.addEventListener('input', atualizarContador);
window.addEventListener('load', atualizarContador);

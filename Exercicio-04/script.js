const botao = document.getElementById('botao');
const sol = document.getElementById('imgSol');
const lua = document.getElementById('imgLua');

function aplicarTemaClaro() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  sol.style.display = "block";
  lua.style.display = "none";
}

function aplicarTemaEscuro() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  sol.style.display = "none";
  lua.style.display = "block";
}

aplicarTemaClaro();

botao.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    aplicarTemaEscuro();
  } else {
    aplicarTemaClaro();
  }
});

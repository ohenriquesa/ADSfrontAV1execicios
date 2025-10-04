

  const Quantidade = document.getElementById("quantidade");
  const Minimo = document.getElementById("minimo");
  const Maximo = document.getElementById("maximo");

const Botao = document.getElementById("botao");

Botao.addEventListener("click", function() {
  const qtd = parseInt(Quantidade.value);
  const min = parseInt(Minimo.value);
  const max = parseInt(Maximo.value);

  const numerosSorteados = [];

  while (numerosSorteados.length < qtd) {
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!numerosSorteados.includes(numero)) {
      numerosSorteados.push(numero);
    }
  }

  document.getElementById("resultado").textContent = numerosSorteados.join(", ");

});



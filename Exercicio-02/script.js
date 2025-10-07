
// comecei pegando os 3 elementos do meu html q addicionei ID
let Tarefa = document.getElementById("addTarefa") 
let Botao = document.getElementById("addBotao")
let Lista = document.getElementById("Lista")

//agora o mais importante dando vida ao meu botão usando um addEventListener para escutar o clique
Botao.addEventListener("click", function(){
  
    const item = Tarefa.value; //usando .value para pegar o que o user digitou
if (item !== "") { // verifica se o campo nao ta em branco

  const li = document.createElement("li"); // criando um novo item na minha lista
  li.textContent = item;

  const remover = document.createElement("button"); // criando um botao chamado Remover
  remover.textContent = "Remover"; 

  remover.addEventListener("click", function() { // add ao botao Remover a função de remover li
  li.remove();
});

  li.appendChild(remover); // add um botão Remover em cada item adicionada a lista

  Lista.appendChild(li); // add um novo item na lista

  Tarefa.value = "";  // pra finalizar vem meu faxineiro limpar o campo de texto
}

})
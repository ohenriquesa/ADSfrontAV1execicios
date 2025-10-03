let Tarefa = document.getElementById("addTarefa")

let Botao = document.getElementById("addBotao")

let Lista = document.getElementById("Lista")


Botao.addEventListener("click", function(){
  
    const item = Tarefa.value;
if (item !== "") {

  const li = document.createElement("li");
  li.textContent = item;

  const remover = document.createElement("button");
  remover.textContent = "Remover"; 

  remover.addEventListener("click", function() {
  li.remove();
});

  li.appendChild(remover);

  Lista.appendChild(li);

  Tarefa.value = ""; 
}

})
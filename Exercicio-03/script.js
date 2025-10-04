let Nome = document.getElementById("addNome");
let Idade = document.getElementById("addIdade");
let Cidade = document.getElementById("addCidade");
let Botao = document.getElementById("botao");
let CorpoTabela = document.getElementById("tabela");

Botao.addEventListener('click', function() {
 let nomeValor = Nome.value.trim();
    let idadeValor = Idade.value.trim();
    let cidadeValor = Cidade.value.trim();

    if (nomeValor === "" || idadeValor === "" || cidadeValor === "") {
        alert("Preencha todos os campos!");
    } else {
     
        let novaLinha = document.createElement('tr');
        
        let celulaNome = document.createElement('td');
        celulaNome.textContent = nomeValor;

        let celulaIdade = document.createElement('td');
        celulaIdade.textContent = idadeValor;

        let celulaCidade = document.createElement('td');
        celulaCidade.textContent = cidadeValor;

       novaLinha.appendChild(celulaNome);
       novaLinha.appendChild(celulaIdade);
       novaLinha.appendChild(celulaCidade);

        CorpoTabela.appendChild(novaLinha);

        Nome.value = "";
        Idade.value = "";
        Cidade.value = "";
    }


});

//comecei pegando os elementos do html que adicionei uma ID
let Nome = document.getElementById("addNome");
let Idade = document.getElementById("addIdade");
let Cidade = document.getElementById("addCidade");
let Botao = document.getElementById("botao");
let CorpoTabela = document.getElementById("tabela");

//agora dei vida ao meu botão usando addEventListener com click, e peguei os valores dos meus campos.
Botao.addEventListener('click', function() {
 let nomeValor = Nome.value.trim();
    let idadeValor = Idade.value.trim();
    let cidadeValor = Cidade.value.trim();

    /*usei um if else, comecei verificando se o usuario não deixou algum campo em branco
    depois no else usei para criar as celulas que recebem as entradas do usuario*/
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

        //criando a nova linha com as entradas
       novaLinha.appendChild(celulaNome);
       novaLinha.appendChild(celulaIdade);
       novaLinha.appendChild(celulaCidade);

       //adicionando a linha a tabela
        CorpoTabela.appendChild(novaLinha);
 
        // pra finalizar vem meu faxineiro limpar os campos de texto
        Nome.value = "";
        Idade.value = "";
        Cidade.value = "";
    }


});
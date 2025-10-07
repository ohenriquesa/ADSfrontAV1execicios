//comecei criando uma função calcular para ficar tudo dentro dela

function calcular() {
    const primeiroInput = document.getElementById('primeiro'); // agora peguei os meus elementos do HTML pelo ID
    const segundoInput = document.getElementById('segundo');
    const operacaoInput = document.getElementById('operacao'); 
    const resultadoFINAL = document.getElementById('resultado');

    const primeiro = Number(primeiroInput.value); // usei Number com .value para transformar as string em numeros de verdade
    const segundo = Number(segundoInput.value);
    const operacao = operacaoInput.value; 

    let resultado; // criei uma variavel para armazenar o resultado das operações

    // um switch case para as operações
    switch (operacao) {
        case 'soma':
            resultado = primeiro + segundo;
            break;
        case 'subtracao':
            resultado = primeiro - segundo;
            break;
        case 'multiplicacao':
            resultado = primeiro * segundo;
            break;
        case 'divisao':
            if (segundo === 0) {
                resultadoFINAL.textContent = 'Por zero não né...';
                return;
            }
            resultado = primeiro / segundo;
            break;
        default:
            resultadoFINAL.textContent = 'Escolha uma operação';
            return;
    }

    resultadoFINAL.textContent = `Resultado: ${resultado}`; 
    // finalizo com um textContent para retornar o resultado no <p> que criei no html. 
}


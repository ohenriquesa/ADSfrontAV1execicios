function calcular() {
    const primeiro = parseFloat(document.getElementById('primeiro').value);
    const segundo = parseFloat(document.getElementById('segundo').value);
    const operacao = document.getElementById('operacao').value;
    const resultadoFINAL = document.getElementById('resultado');

    let resultado;

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

    }

    resultadoFINAL.textContent = `Resultado: ${resultado}`;
}

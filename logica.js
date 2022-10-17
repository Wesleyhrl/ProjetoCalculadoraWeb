var resultado = 0;
var op = undefined;
var numero = '';
var numero2 = '';
document.getElementById("display").value = resultado;

function calcular(tipo, valor) {
    switch (tipo) {
        case "acao":
            if (valor == "=") {
                resultado = acao(valor);
                numero = resultado;
                numero2 = '';
            }
            if (valor == "C") {
                numero = '';
                numero2 = '';
                resultado = 0;
                op = undefined;
            }
            else {
                op = valor;
            }

            break;

        case "valor":
            if (op == "=") {
                numero = '';
                op = undefined;
                numero += valor;
                resultado = numero;
            }
            else if (op != undefined) {
                numero2 += valor;
                resultado = numero2;
            }
            else {
                numero += valor;
                resultado = numero;

            }

            break;
    }
    document.getElementById("display").value = resultado;
}

function acao(valor) {
    var soma = 0;
    switch (op) {
        case "/":
            soma = parseFloat(numero) / parseFloat(numero2);
            return soma;
        case "*":
            soma = parseFloat(numero) * parseFloat(numero2);
            return soma;
        case "-":
            soma = parseFloat(numero) - parseFloat(numero2);
            return soma;
        case "+":
            soma = parseFloat(numero) + parseFloat(numero2);
            return soma;
    }
}


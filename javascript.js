var domElementoNumero = document.getElementById('numero');
var valorNumero = [];

function botao_adicionar() {
    if (domElementoNumero.value < 1 || domElementoNumero.value > 100) {
        alert("[ERRO] Valor inválido!\nPor favor, digite um número entre 1 e 100.");
    } else {
        var numero = Number(domElementoNumero.value);
        if (valorNumero.indexOf(numero) > -1) {
            alert("[ERRO] O número já foi adicionado à lista!");
        } else {
            valorNumero.push(numero);
            let domElementoAdicionados = document.getElementById('adicionados');
            let option = document.createElement("option");
            option.append(`O valor ${numero} foi adicionado!`);
            domElementoAdicionados.append(option);
        }
    }
}

function botao_finalizar() {
    let domElementoDivResultado = document.getElementById('resultados');
    let quantidade = Number(valorNumero.length);
    let maior = Math.max.apply(null, valorNumero);
    let menor = Math.min.apply(null, valorNumero);
    let soma = 0;
    
    for (let i = 0; i < valorNumero.length; i++) {
        soma = Number(soma) + Number(valorNumero[i]);
    }

    var media = soma / quantidade;
    
    let paragrafoResultado = document.createElement("p");

    paragrafoResultado.append(`Ao todo, temos ${quantidade} números cadastrados.`);
    domElementoDivResultado.append(paragrafoResultado);

    paragrafoResultado.append(`O maior valor informado foi ${maior}.`);
    domElementoDivResultado.append(paragrafoResultado);

    paragrafoResultado.append(`O menor valor informado foi ${menor}.`);
    domElementoDivResultado.append(paragrafoResultado);

    paragrafoResultado.append(`Somando todos os valores, temos ${soma}.`);
    domElementoDivResultado.append(paragrafoResultado);

    paragrafoResultado.append(`A média dos valores digitados é ${media}.`);
    domElementoDivResultado.append(paragrafoResultado);    
    
}
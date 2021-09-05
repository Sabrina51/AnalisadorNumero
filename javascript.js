var domElementoNumero = document.getElementById('numero');
var domElementoDivResultado = document.getElementById('resultados');
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
            option.text = `O valor ${numero} foi adicionado!`;
            domElementoAdicionados.appendChild(option);
            //option.append(`O valor ${numero} foi adicionado!`);
            //domElementoAdicionados.append(option);
            domElementoDivResultado.innerHTML = '';
        }
    }
    domElementoNumero.value = '';
    domElementoNumero.focus();
}

function botao_finalizar() {
    //var domElementoDivResultado = document.getElementById('resultados');
    let quantidade = Number(valorNumero.length);
    let maior = Math.max.apply(null, valorNumero);
    let menor = Math.min.apply(null, valorNumero);
    let soma = 0;

    for (let i = 0; i < valorNumero.length; i++) {
        soma = Number(soma) + Number(valorNumero[i]);
    }

    var media = soma / quantidade;

    if (valorNumero.length === 0) {
        alert('[ERRO] Faltam valores. Impossível calcular!')
    } else {
        domElementoDivResultado.innerHTML += '';
        domElementoDivResultado.innerHTML += `<p>Ao todo, temos ${quantidade} números cadastrados.</p>`;
        domElementoDivResultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        domElementoDivResultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        domElementoDivResultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        domElementoDivResultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
     
    }
    
}
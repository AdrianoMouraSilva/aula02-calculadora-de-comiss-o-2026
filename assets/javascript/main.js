'use strict'

// 1. Definição dos atalhos (Shorthands)
const $ = (seletor) => document.querySelector(seletor);        // Retorna 1 elemento (ID ou Classe)
const $$ = (seletor) => document.querySelectorAll(seletor);    // Retorna TODOS os elementos

// const botaoCalcular = document.getElementById('botao-calcular')
const botaoCalcular = $('#botao-calcular')

function mostrarComissao(){
    const nome = $('#caixa-nome')
    const valor = $('#caixa-valor')
    const resultado = $('#resultado')

    const salario = valor.value * 0.08

    resultado.textContent = `${nome.value} o valor das venda é ${valor.value} se seu salário é ${salario}` 
    // console.log(nome.value);
    // console.log(valor.value);
    // console.log(salario);
}

botaoCalcular.addEventListener('click', mostrarComissao)
import {calcular} from "./calculos.js";

export var exp = '';

export function addExpressao(dig) {
    exp = exp + dig;
    exp = exp.toString();
    document.getElementById('expressao').value = exp;
    calcular(exp);
}

export function addExpressaoInput(dig) {
    document.getElementById('expressao').value = dig;
    exp = document.getElementById('expressao').value;
    calcular(exp);
}
export function limpar() {
    exp = '';
    document.getElementById('expressao').value = exp;
}
import {exp} from "./expressao.js";
import {limpar} from "./expressao.js";
import {addHistorico} from "./historico.js";

export function calcular(x) {
    try {
        x = eval(x);
        document.getElementById('resultado').value = x;
        console.log(x);
        if ((isFinite(x))) {
            addHistorico(exp);
        }

        if (!(isFinite(x))) {
            window.alert("Impossivel!");
            document.getElementById('resultado').value = '';
            limpar();
        }
    } catch (e) {
        if (e instanceof SyntaxError) {
            console.log(exp);
            console.log('nao é numero');
        } else if (e instanceof ReferenceError) {
            console.log("deu ruim aqui");
            limpar();
        } else {
            throw e;
        }
    }
}




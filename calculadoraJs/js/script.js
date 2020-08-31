import {addExpressao} from "./expressao.js";
import {addExpressaoInput} from "./expressao.js";
import {limpar} from "./expressao.js";


const alg = document.getElementsByClassName("bt");

for (var i =0; i< alg.length;i++){
if(alg[i].value === "limpar"){
        alg[i].addEventListener("click", function () {
            limpar();
        })
    }else
    {
        alg[i].addEventListener("click", function () {
            addExpressao(this.value);
        })
    }
}

const exp = document.getElementById("expressao");

try {
    exp.addEventListener("keyup", function () {
        addExpressaoInput(this.value)
    })
}catch (e) {
    console.log(e)
}


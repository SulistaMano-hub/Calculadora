function inserir(num) {
    const visor = document.getElementById('resultado');
    if (visor.innerHTML.length < 12) {
        visor.innerHTML += num;
    }
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function apagar() {
    const visor = document.getElementById('resultado');
    visor.innerHTML = visor.innerHTML.substring(0, visor.innerHTML.length - 1);
}

function calcular() {
    const visor = document.getElementById('resultado');
    const expressao = visor.innerHTML;

    if (expressao) {
        try {
            visor.innerHTML = eval(expressao);
        } catch {
            visor.innerHTML = "Erro";
            setTimeout(() => limpar(), 1500);
        }
    } else {
        visor.innerHTML = "Vazio";
        setTimeout(() => limpar(), 1000);
    }
}
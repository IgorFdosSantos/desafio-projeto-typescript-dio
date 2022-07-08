// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

/* 
    let botaoAtualizar = document.getElementById('atualizar-saldo');
    let botaoLimpar = document.getElementById('limpar-saldo');
    let soma = document.getElementById('soma');
    let campoSaldo = document.getElementById('campo-saldo');

    campoSaldo.innerHTML = 0

    function somarAoSaldo(soma) {
        campoSaldo.innerHTML += soma;
    }

    function limparSaldo() {
        campoSaldo.innerHTML = '';
    }

    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(soma.value);
    });

    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    }); 
*/

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
*/


// Os elementos HTML abaixo podem ser nulos, então precisamos dizer ao TypeScript que eles existem utilizando anotação 'as HTMLTypeElement'
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;


function somarAoSaldo(soma: number) {            
    let somaAsNumber: number = Number(campoSaldo.textContent);  
    somaAsNumber += soma;           
    campoSaldo.innerHTML = somaAsNumber.toString();
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
    soma.value = ""; // Apenas para garantir que o input soma esteja vazio quando o botão de limpar for clicado
    soma.focus();
}


// Precisamos ter certeza de ue a soma está acontecendo entre números
function verificaTipoInput() {    
    if(isNaN(Number(soma.value)) || Number(soma.value) === undefined){
        alert('Por favor, insira um valor válido!');
        limparSaldo();
    }
}

soma.addEventListener('change', function () {
    verificaTipoInput()
})

botaoAtualizar.addEventListener('click', function () {    
    somarAoSaldo(Number(soma.value));
    soma.value = ""; // Apenas para limpar o valor do input soma sempre que um novo valor for enviado
    soma.focus();

});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();   
});

limparSaldo();
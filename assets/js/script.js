
//VARIABLES
let etapaAtual = 0;

//Selecting and storing elements.
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.numero');

//FUNCTIONS
function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';

    for (let i = 0 ; i < etapa.numeros ; i++) {
        numeroHtml += '<div class="numero"></div>';
    };

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function clicou(n) {
    alert('Clicou em ' + n);
}

function branco() {
    alert('Clicou em BRANCO');
}

function corrige() {
    alert('Clicou em CORRIGE ');
}

function confirma() {
    alert('Clicou em CONFIRMA');
}


comecarEtapa();
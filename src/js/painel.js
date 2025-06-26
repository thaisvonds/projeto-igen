/*
quando clicar na seta pra avançar temos que esconder todas as imagens e mostrar a proxima imagem;

a imagem atual começa em 0 pq a primeira imagem assim que for clicado no avançar
eu preciso adicionar mais 1 ao contador de imagem pra poder saber que agora eu vou mostrar a segunda imagem

esconder todas as imagens
pegar todas as imagens usando o DOM e remover a classe mostrar

mostrar a proxima imagem
    pegar todas as imagens, descobrir qual é a proxima e colocar a classe mostrar nela

*/

const imagens = document.querySelectorAll('.painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function atualizarSetas() {
    if (imagemAtual === 0) {
        setaVoltar.style.display = 'none';
    } else {
        setaVoltar.style.display = 'block';
    }

    if (imagemAtual === imagens.length - 1) {
        setaAvancar.style.display = 'none';
    } else {
        setaAvancar.style.display = 'block';
    }
}

setaAvancar.addEventListener('click', function (event) {
    event.preventDefault();  // para evitar scroll ou comportamento padrão do <a href="#">
    if (imagemAtual === imagens.length - 1) return;

    imagemAtual++;

    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });

    imagens[imagemAtual].classList.add('mostrar');

    atualizarSetas(); 
});

setaVoltar.addEventListener('click', function (event) {
    event.preventDefault();
    if (imagemAtual === 0) return;

    imagemAtual--;

    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });

    imagens[imagemAtual].classList.add('mostrar');

    atualizarSetas(); 
});

atualizarSetas();

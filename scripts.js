'use strict';

// Configurações personalizadas para o SimpleLightbox
const OPCOES = {
    /* Configurações de Legenda */
    captions: true,
    captionSelector: 'self',
    captionType: 'attr',
    captionsData: 'title',
    captionDelay: 600,
    captionPosition: 'bottom',

    /* Opções diversas */
    enableKeyboard: true,
    overlay: true,
    disableRightClick: true,
    download: "Clique aqui para fazer o download da imagem",
    alertErrorMessage: "Imagem não pôde ser carregada.",

    /* Animações e interações */
    doubleTapZoom: 2,
    scrollZoom: true,
    fadeSpeed: 300,
    animationSlide: true,
    animationSpeed: 300
};

// Seleção dos elementos para galeria e ativação do SimpleLightbox
let lightbox = new SimpleLightbox('.galeria a', OPCOES);


// Acionamento da animação flashContador toda vez que trocar de imagem
lightbox.on('changed.simplelightbox', () => {
    let contador = document.querySelector(".sl-counter");

    if(contador){
        contador.classList.remove("flash");

        /* Hack (gambiarra) 
        Isso é chamado de "forced reflow", ou seja, forçar o navegador
        a recalcular o layout da página. Ao fazer isso, o navegador
        é obrigado a parar tudo, recalcular e renderizar o layout de novo. */
        contador.offsetWidth;

        contador.classList.add("flash");
    }
});
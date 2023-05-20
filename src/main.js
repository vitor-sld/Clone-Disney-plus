document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-questions]')

    const hero = document.querySelector('.hero')
    const alturaHero = hero.clientHeight;

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;
        console.log(alturaHero)
        if (posicaoAtual < alturaHero) {
            ocultarElementosDoHeader();
        } else {
            exibirElementosDoHeader();
        }
    })

    //Abas da section Shows
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }
    //accordion da section FAQ
    for (i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abrirOuFecharQuestion)
    }

    function ocultarElementosDoHeader() {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden')
    }

    function exibirElementosDoHeader() {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden')
    }

    function abrirOuFecharQuestion(elemento) {
        const classeOpen = "faq__questions__item--is-open";
        const elementoPai = elemento.target.parentNode;
        elementoPai.classList.toggle(classeOpen)
    }

    function escondeTodasAbas() {
        const tabContainer = document.querySelectorAll('[data-tab-id]')
        for (i = 0; i < tabContainer.length; i++) {
            tabContainer[i].classList.remove('shows__list--is-active');
        }
    }

    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]')
        for (i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tabs__button--is-active');
        }
    }




})
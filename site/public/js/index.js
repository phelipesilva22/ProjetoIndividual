const carrossel = document.querySelector(".carrossel");
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

// Função para atualizar a posição do carrossel
function atualizarCarrossel() {
    carrossel.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Função para voltar ao slide anterior
function slideAnterior() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Volta ao último slide se estiver no primeiro
    atualizarCarrossel();
}

// Função para ir ao próximo slide
function slideProximo() {
    slideIndex = (slideIndex + 1) % slides.length; // Vai para o primeiro slide se estiver no último
    atualizarCarrossel();
}

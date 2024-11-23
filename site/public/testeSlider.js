const items = document.querySelectorAll('.item-lista'); // Todos os itens
const nextBtn = document.querySelector('.next-btn'); // Botão próximo
const prevBtn = document.querySelector('.prev-btn'); // Botão anterior

let currentIndex = 0; // Índice do item atual

// Função para atualizar o item ativo
function updateActiveItem(index) {
    items.forEach((item, i) => {
        item.classList.remove('active'); // Remove a classe `active` de todos os itens
        if (i === index) {
            item.classList.add('active'); // Adiciona `active` ao item atual
        }
    });
}

// Botão "Próximo"
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Avança para o próximo item (loop infinito)
    updateActiveItem(currentIndex);
});

// Botão "Anterior"
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Volta para o item anterior (loop infinito)
    updateActiveItem(currentIndex);
});


















/* // Seleciona os elementos necessários
const slider = document.querySelector('.card-cordas');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const items = document.querySelectorAll('.item-lista');
// Seleciona a lista e os itens
const lista = document.querySelector('.lista');
const activeItem = document.querySelector('.item-lista.active');

// Adiciona o evento de clique no item ativo
activeItem.addEventListener('click', () => {
    lista.classList.toggle('show-all'); // Alterna entre mostrar todos os itens e mostrar apenas o ativo
});
// Calcula largura do item e o total de itens
const itemWidth = items[0].offsetWidth + 30; // Inclui o gap
let currentIndex = 0;

// Função para mover o slider
function moveSlider() {
    slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Botão próximo
nextBtn.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        items.style.display = 'block'
        moveSlider();
    }
});

// Botão anterior
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        moveSlider();
    }
});
 */
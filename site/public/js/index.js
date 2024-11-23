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







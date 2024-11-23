
// --- Pegando classes da seção das cordas ---
const itemsCordas = document.querySelectorAll('.item-lista-cordas'); // Todos os itens da seção das cordas
const nextBtnCordas = document.querySelector('.next-btn-cordas'); // Botão próximo da seção das cordas
const prevBtnCordas = document.querySelector('.prev-btn-cordas'); // Botão anterior da seção das cordas

let indiceAtual = 0; // Índice do item atual

// Função para atualizar o item ativo
function atualizarItemAtivoCordas(index) {
    itemsCordas.forEach((item, i) => {
        item.classList.remove('active'); // Remove a classe `active` de todos os itens
        if (i === index) {
            item.classList.add('active'); // Adiciona `active` ao item atual
        }
    });
}

// Botão "Próximo"
nextBtnCordas.addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % itemsCordas.length; // Avança para o próximo item (loop infinito)
    atualizarItemAtivoCordas(indiceAtual);
});

// Botão "Anterior"
prevBtnCordas.addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + itemsCordas.length) % itemsCordas.length; // Volta para o item anterior (loop infinito)
    atualizarItemAtivoCordas(indiceAtual);
});


// --- Pegando classes da seção das madeiras ---
const itemsMadeiras = document.querySelectorAll('.item-lista-madeiras'); // Todos os itens da madeiras
const nextBtnMadeiras = document.querySelector('.next-btn-madeiras'); // Botão próximo da seção das madeiras
const prevBtnMadeiras = document.querySelector('.prev-btn-madeiras'); // Botão anterior da seção das madeiras

// Função para atualizar o item ativo das madeiras
function atualizarItemAtivoMadeiras(index) {
    itemsMadeiras.forEach((item, i) => {
        item.classList.remove('active'); // Remove a classe `active` de todos os itens
        if (i === index) {
            item.classList.add('active'); // Adiciona `active` ao item atual
        }
    });
}

// Botão "Próximo"
nextBtnMadeiras.addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % itemsMadeiras.length; // Avança para o próximo item (loop infinito)
    atualizarItemAtivoMadeiras(indiceAtual);
});

// Botão "Anterior"
prevBtnMadeiras.addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + itemsMadeiras.length) % itemsMadeiras.length; // Volta para o item anterior (loop infinito)
    atualizarItemAtivoMadeiras(indiceAtual);
});



// --- Pegando classes da seção do metais ---
const itemsMetais = document.querySelectorAll('.item-lista-metais'); // Todos os itens dos metais
const nextBtnMetais = document.querySelector('.next-btn-metais'); // Botão próximo da seção das metais
const prevBtnMetais = document.querySelector('.prev-btn-metais'); // Botão anterior da seção das madeiras

function atualizarItemAtivoMetais(index) {
    itemsMetais.forEach((item, i) => {
        item.classList.remove('active'); // Remove a classe `active` de todos os itens
        if (i === index) {
            item.classList.add('active'); // Adiciona `active` ao item atual
        }
    });
}

// Botão "Próximo"
nextBtnMetais.addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % itemsMetais.length; // Avança para o próximo item (loop infinito)
    atualizarItemAtivoMetais(indiceAtual);
});

// Botão "Anterior"
prevBtnMetais.addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + itemsMetais.length) % itemsMetais.length; // Volta para o item anterior (loop infinito)
    atualizarItemAtivoMetais(indiceAtual);
});

















/* // Seleciona os elementos necessários
const slider = document.querySelector('.card-cordas');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const itemsCordas = document.querySelectorAll('.item-lista');
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
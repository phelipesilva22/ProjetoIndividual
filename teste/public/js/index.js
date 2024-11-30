
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







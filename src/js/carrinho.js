// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(product) {
    // Verifica se a quantidade é maior que zero
    if (product.quantity <= 0) {
        alert('A quantidade deve ser maior que zero.');
        return;
    }

    // Recupera o carrinho do localStorage, ou inicializa um novo se estiver vazio
    let carrinho = JSON.parse(localStorage.getItem('cart')) || [];

    // Verifica se o produto já está no carrinho
    const existingProductIndex = carrinho.findIndex(item => item.name === product.name);
    if (existingProductIndex >= 0) {
        // Se o produto já existe, atualiza a quantidade
        carrinho[existingProductIndex].quantity += product.quantity;
    } else {
        // Adiciona o novo produto ao carrinho
        carrinho.push(product);
    }

    // Atualiza o localStorage com o novo carrinho
    localStorage.setItem('cart', JSON.stringify(carrinho));

    // Atualiza o indicador de quantidade do carrinho
    atualizarQuantidadeCarrinho();
}

// Função para atualizar a quantidade de itens no carrinho
function atualizarQuantidadeCarrinho() {
    // Recupera o carrinho do localStorage
    let carrinho = JSON.parse(localStorage.getItem('cart')) || [];

    // Calcula a quantidade total de itens no carrinho
    let totalQuantity = carrinho.reduce((acc, item) => acc + item.quantity, 0);

    // Seleciona o elemento da quantidade do carrinho
    let quantidadeCarrinho = document.querySelector('.quantidade-carrinho');

    // Atualiza a quantidade
    quantidadeCarrinho.textContent = totalQuantity;
}

// Atualiza a quantidade de itens no carrinho quando a página é carregada
document.addEventListener('DOMContentLoaded', atualizarQuantidadeCarrinho);

// Adiciona evento de clique ao botão "Comprar Agora"
document.getElementById('buy-button').addEventListener('click', () => {
    const product = {
        name: document.querySelector('.product-details h1').innerText,
        price: parseFloat(document.querySelector('.product-price').innerText.replace('R$', '').replace(',', '.')),
        quantity: parseInt(document.querySelector('.quantity input').value, 10),
        image: document.getElementById('main-image').src
    };

    adicionarAoCarrinho(product);
});

// Função para trocar a imagem do produto
function changeImage(imageUrl) {
    document.getElementById('main-image').src = imageUrl;
}
const produtos = [
  { imagem: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg", hoverImagem: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg", nome: "Produto 1", valor: "R$100,00", link: "./src/pages/products/produto1.html"},
  { imagem: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg", hoverImagem: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg", nome: "Produto 2", valor: "R$200,00", link: "./src/pages/products/produto1.html" },
  { imagem: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg", hoverImagem: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg", nome: "Produto 3", valor: "R$300,00", link: "./src/pages/products/produto1.html" },
  { imagem: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg", hoverImagem: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg", nome: "Produto 4", valor: "R$400,00", link: "./src/pages/products/produto1.html" },
  { imagem: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg", hoverImagem: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg", nome: "Produto 5", valor: "R$500,00", link: "./src/pages/products/produto1.html" },
  { imagem: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg", hoverImagem: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg", nome: "Produto 6", valor: "R$600,00", link: "./src/pages/products/produto1.html" },
  { imagem: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg", hoverImagem: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg", nome: "Produto 7", valor: "R$700,00", link: "./src/pages/products/produto1.html" },
  { imagem: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg", hoverImagem: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg", nome: "Produto 8", valor: "R$800,00", link: "./src/pages/products/produto1.html" },
];

const carouselTrack = document.getElementById("carouselTrack");
const produtosPorSlide = 4; // Quantos produtos são mostrados por vez
const totalProdutos = produtos.length;
const produtoLargura = 285; // Largura de cada produto mais gap

let posicao = 0; // Posição atual do carrossel

function renderizarProdutos(produtos) {
  const produtosDuplicados = [...produtos, ...produtos]; // Duplicar para efeito de loop
  carouselTrack.innerHTML = produtosDuplicados.map(produto => `
  <a href="${produto.link}">  
    <div class="product" data-imagem="${produto.imagem}" data-hover-imagem="${produto.hoverImagem}">
      <img src="${produto.imagem}" alt="${produto.nome}" class="default">
      <img src="${produto.hoverImagem}" alt="${produto.nome}" class="hover">
      <p class="nome">${produto.nome}</p>
      <p class="valor">${produto.valor}</p>
    </div>
  </a>
  `).join('');
}

function updateCarousel() {
  carouselTrack.style.transform = `translateX(-${posicao * produtoLargura}px)`;
}

function moverDireita() {
  if (posicao < totalProdutos) {
    posicao++;
    updateCarousel();
  }
  if (posicao === totalProdutos) {
    setTimeout(() => {
      carouselTrack.style.transition = 'none'; // Desativa animação para salto
      posicao = 0; // Reinicia a posição
      carouselTrack.style.transform = `translateX(-${posicao * produtoLargura}px)`;
      setTimeout(() => {
        carouselTrack.style.transition = 'transform 0.5s ease-in-out'; // Reativa a animação
      }, 50); // Tempo curto para reiniciar transição suave
    }, 500); // Aguarde a transição terminar antes de saltar
  }
}

function moverEsquerda() {
  if (posicao > 0) {
    posicao--;
    updateCarousel();
  }
  if (posicao === 0) {
    setTimeout(() => {
      carouselTrack.style.transition = 'none'; // Desativa animação para salto
      posicao = totalProdutos; // Ajusta para o final
      carouselTrack.style.transform = `translateX(-${posicao * produtoLargura}px)`;
      setTimeout(() => {
        carouselTrack.style.transition = 'transform 0.5s ease-in-out'; // Reativa a transição
      }, 50); // Tempo curto para reiniciar transição suave
    }, 500); // Aguarde a transição terminar antes do salto
  }
}

document.querySelector(".seta.proximo2").addEventListener("click", moverDireita);
document.querySelector(".seta.anterior2").addEventListener("click", moverEsquerda);

renderizarProdutos(produtos);
updateCarousel(); // Inicializa a posição do carrossel
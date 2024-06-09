document.addEventListener("DOMContentLoaded", function () {
    const images = [
      "../img/camiseta.jpg",
      "../img/camiseta2.jpg",
      "../img/casis.jpg"
    ];
    const imageSlide = document.getElementById("imageSlide");
    const indicatorsContainer = document.querySelector(".indicadores"); // Mudança do nome da classe
    const prevArrow = document.querySelector(".seta.anterior");
    const nextArrow = document.querySelector(".seta.proximo");
    let currentImageIndex = 0;
    let intervalId;
  
    function updateCarousel() {
      imageSlide.src = images[currentImageIndex];
      updateIndicators();
    }
  
    function updateIndicators() {
      const indicadores = document.querySelectorAll(".indicador");
      indicadores.forEach((indicador, index) => {
        if (index === currentImageIndex) {
          indicador.classList.add("ativo");
        } else {
          indicador.classList.remove("ativo");
        }
      });
    }
  
    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateCarousel();
    }
  
    function prevImage() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      updateCarousel();
    }
  
    // Cria os indicadores
    images.forEach((image, index) => {
      const indicator = document.createElement("span");
      indicator.classList.add("indicador");
      indicator.addEventListener("click", () => {
        currentImageIndex = index;
        updateCarousel();
        resetInterval(); // Reinicia o intervalo quando o usuário interage com os indicadores
      });
      indicatorsContainer.appendChild(indicator);
    });
  
    // Adiciona eventos de clique para as setas de navegação
    prevArrow.addEventListener("click", function () {
      prevImage();
      resetInterval(); // Reinicia o intervalo quando o usuário interage com as setas
    });
    nextArrow.addEventListener("click", function () {
      nextImage();
      resetInterval(); // Reinicia o intervalo quando o usuário interage com as setas
    });
  
    // Função para iniciar o intervalo automático
    function startInterval() {
      intervalId = setInterval(nextImage, 4000); // Troca de imagem a cada 2 segundos
    }
  
    // Reiniciar intervalo automaticamente após um período de inatividade
    function resetInterval() {
      clearInterval(intervalId);
      startInterval();
    }
  
    // Adicionar eventos de mouse para reiniciar o intervalo
    document.addEventListener("mousemove", resetInterval);
    document.addEventListener("keydown", resetInterval);
  
    // Inicia o carrossel e o intervalo automático
    updateCarousel();
    startInterval();
  });
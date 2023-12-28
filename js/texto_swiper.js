//Iniciar o Swiper
var swiper = new Swiper ('.swiper-container', {
    //Configurações do Swiper
});

//Ouvinte de eventos para atualizar o texto
    swiper.on('slideChange', function () {
       
        //Obtendo o elemento do slide atual
        var currentSlide = swiper.slides[swiper.activeIndex];
        
        //Obtendo o texto personalizado do atributo do data-text do slide
        var slideText = currentSlide.getAttribute('data-text');
    
        //Selecionando o elemento de texto e atualizando o conteúdo
        var slideTextElement = document.querySelector('.slide-text');
        slideTextElement.textContent = slideText;
});
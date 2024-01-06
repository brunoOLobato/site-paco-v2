/* cards-planos.js */
document.addEventListener("DOMContentLoaded", function() {
  // Seletor do botão
  var franquiasButton = document.getElementById("franquias-button");
  var ilimitadosButton = document.getElementById("ilimitados-button");

  var textoFranquia = document.getElementById("franquia");
  var textoIlimitado = document.getElementById("ilimitado");

  // Função para mostrar/ocultar seções
  function showSection(section) {
    if (section === "franquias") {
      // Mostrar a seção de franquias
      textoFranquia.style.display = "block";
      textoIlimitado.style.display = "none";
    } else if (section === "ilimitados") {
      // Mostrar a seção de ilimitados
      textoFranquia.style.display = "none";
      textoIlimitado.style.display = "block";
    }
  }

  // Manipular clique dos botões
  franquiasButton.addEventListener("click", function() {
    showSection("franquias");
  });

  ilimitadosButton.addEventListener("click", function() {
    showSection("ilimitados");
  });
  // Inicialmente, mostramos a seção "Mais vendidos" (padrão)
  showSection('franquia');
});

/* cards-planos.js */
const containerFranquias = document.getElementById('franquias');

function cardPlanos(codPlano, nomePlano, valorPlano, qtdRamais, qtdNumerosFixos, qtdNumerosMoveis, qtdMinutos, qtdAparelhosComodato) {
  
  let linhaNumeroMovel;

  if(qtdNumerosMoveis > 0) {
    linhaNumeroMovel = `<h5>Números Móveis: <b>${qtdNumerosMoveis}</b></h5>`;
  } else {
    linhaNumeroMovel = '';
  }

  arrayCardsPlanos.push( 
    "<div class='card'>"
      +`<h2>${nomePlano}</h2>`
      +"<h3>Teste 2 dias grátis</h3>"
      +"<p>Sem fidelidade</p>"
      +`<h4>R$ ${valorPlano}/mês</h4>`
      +`<h5>Ramal/Usuário: <b>${qtdRamais}</b></h5>`
      +`<h5>Número Fixo: <b>${qtdNumerosFixos}</b></h5>`
      +linhaNumeroMovel
      +"<h5>Fixo Brasil: <b>Ilimitado</b></h5>"
      +`<h5>Móvel Brasil: <b>${qtdMinutos} min</b></h5>`
      +`<h5>Aparelho IP Comodato: <b>${qtdAparelhosComodato}</b></h5>`
      +"<h5>Suporte: <b>24/7</b></h5>"
      +"<h5>&nbsp;</h5>"
      +`<p2>Plano controle com ${qtdMinutos} minutos de franquia para móvel mensal, dividida entre o grupo de ramais.</p2>`
      +`<a class='btn_planos' href='${urlApiSite}identificacao/email-plano/${codPlano}'>Experimentar</a>`
    +"</div>");
};

function preencherCardsFranquia(planosSite, time){

  let codPlano;
  let nomePlano;
  let valorPlano;
  let qtdRamais;
  let qtdNumerosFixos;
  let qtdNumerosMoveis;
  let qtdMinutos;
  let qtdAparelhosComodato;

  setTimeout(() => {
    for (let element of planosSite) {
  
      codPlano = element.codigoPlano;
      nomePlano = element.nomePlano;
      valorPlano = Number(element.valor).toFixed(2);
      
      if(element.codigoPlano == '239'){
    
          qtdRamais = 1;
          qtdNumerosFixos = 1;
          qtdNumerosMoveis = 0;
          qtdMinutos = 150;
          qtdAparelhosComodato = 0;
          cardPlanos(codPlano, nomePlano, valorPlano, qtdRamais, qtdNumerosFixos, qtdNumerosMoveis, qtdMinutos, qtdAparelhosComodato);
      }
        
      if(element.codigoPlano == '240'){
    
          qtdRamais = 2;
          qtdNumerosFixos = 1;
          qtdNumerosMoveis = 0;
          qtdMinutos = 300;
          qtdAparelhosComodato = 1;
          cardPlanos(codPlano, nomePlano, valorPlano, qtdRamais, qtdNumerosFixos, qtdNumerosMoveis, qtdMinutos, qtdAparelhosComodato);
      }
    
      if(element.codigoPlano == '241'){
    
          qtdRamais = 5;
          qtdNumerosFixos = 2;
          qtdNumerosMoveis = 0;
          qtdMinutos = 750;
          qtdAparelhosComodato = 2;
          cardPlanos(codPlano, nomePlano, valorPlano, qtdRamais, qtdNumerosFixos, qtdNumerosMoveis, qtdMinutos, qtdAparelhosComodato);
      }
    
      if(element.codigoPlano ==  '242'){
    
          qtdRamais = 10;
          qtdNumerosFixos = 2;
          qtdNumerosMoveis = 1;
          qtdMinutos = 1500;
          qtdAparelhosComodato = 3;
          cardPlanos(codPlano, nomePlano, valorPlano, qtdRamais, qtdNumerosFixos, qtdNumerosMoveis, qtdMinutos, qtdAparelhosComodato);
      }
    
      if(element.codigoPlano ==  '243'){
    
          qtdRamais = 15;
          qtdNumerosFixos = 4;
          qtdNumerosMoveis = 2;
          qtdMinutos = 2250;
          qtdAparelhosComodato = 5;
          cardPlanos(codPlano, nomePlano, valorPlano, qtdRamais, qtdNumerosFixos, qtdNumerosMoveis, qtdMinutos, qtdAparelhosComodato);
      }
  
    }
  
    console.log(arrayCardsPlanos);
    arrayCardsPlanos.forEach(element => {
        $('#franquias').append(element);
    });
  }, time);
}


var urlApiErp = '';
var token = '';
var urlApiSite = '';
var planosSite = [];
var planosLocalStorage = localStorage.getItem('planosSite');
var arrayCardsPlanos = [];

if(planosLocalStorage) {

  planosSite = JSON.parse(planosLocalStorage);
  preencherCardsFranquia(planosSite, 1000);

} else {

  fetch('arquivo.json')
  .then(response => response.json())
  .then(data => {
    urlApiErp = data.urlApiErp;
    token = data.token;
    urlApiSite = data.urlApiSite;

    fetch(`${urlApiErp}planos?TOKEN=${token}`)
      .then(response => response.json())
      .then(data => {
     
        data.forEach(element => {
          if(element.MOSTRAR_SITE == 1) {

            planosSite.push({
              codigoPlano: element.CODIGO,
              nomePlano: element.NOME,
              valor: element.VALOR
            });
          }
        });

        localStorage.setItem('planosSite', JSON.stringify(planosSite));
      })

      .catch(error => console.error('Erro ao ler o arquivo:', error));

  })
  .catch(error => console.error('Erro ao ler o arquivo:', error));

  preencherCardsFranquia(planosSite, 3000);
}

/* video.js */
const videos = ["video/mulher_telefone1.mp4", "video/garota_telefone.mp4", "video/homem_telefone.mp4", "video/mulher_telefone.mp4", "video/homem_business.mp4"];
let currentVideoIndex = 0;
const videoElement = document.getElementById("video-background");
const videoUnavailableElement = document.getElementById("video-indisponivel");

// Função para trocar o vídeo com efeito de fade
function changeVideo() {
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;

  // Verifique se o usuário está em um dispositivo móvel
  // Verifique a largura da janela do navegador
  if (window.innerWidth < 768) {
    // Se a largura for menor que 768 pixels, oculte o elemento de vídeo principal
    videoElement.style.display = "none";
    // Exiba o elemento com o vídeo indisponível
    if (videoUnavailableElement) {
      videoUnavailableElement.style.display = "block";
    }
    // Oculte o elemento com a classe "header"
    const headerElement = document.querySelector('.header');
    if (headerElement) {
      headerElement.classList.add('hidden');
    }
  } else {
    // Se não estiver em um dispositivo móvel, volte ao elemento de vídeo original e oculte o vídeo indisponível
    videoElement.style.display = "block";
    if (videoUnavailableElement) {
      videoUnavailableElement.style.display = "none";
    }
    // Mostre o elemento com a classe "header"
    const headerElement = document.querySelector('.header');
    if (headerElement) {
      headerElement.classList.remove('hidden');
    }
  }

  // Adicione classes CSS para aplicar o efeito de fade apenas quando o vídeo principal estiver visível
  if (videoElement.style.display !== "none") {
    videoElement.classList.add("fade-out");
    setTimeout(() => {
      videoElement.src = videos[currentVideoIndex];

      // Carregue o novo vídeo e inicie a reprodução
      videoElement.load();
      videoElement.play().catch(error => {
        console.error("Erro ao iniciar a reprodução do vídeo:", error);
      });

      // Remova a classe CSS após a transição
      videoElement.classList.remove("fade-out");
    }, 1000); // Ajuste este valor conforme necessário para controlar a duração da transição
  }
}

// Troca o vídeo a cada 10 segundos (10000 milissegundos)
setInterval(changeVideo, 10000);
/* video.js */

/* texto_swiper.js */
//Iniciar o Swiper
var swiper = new Swiper('.swiper-container', {
  //Configurações do Swiper
});

//Ouvinte de eventos para atualizar o texto
swiper.on('slideChange', function() {

  //Obtendo o elemento do slide atual
  var currentSlide = swiper.slides[swiper.activeIndex];

  //Obtendo o texto personalizado do atributo do data-text do slide
  var slideText = currentSlide.getAttribute('data-text');

  //Selecionando o elemento de texto e atualizando o conteúdo
  var slideTextElement = document.querySelector('.slide-text');
  slideTextElement.textContent = slideText;
});
/* texto_swiper.js */

/* pegar_localizacao.js */
// Função para obter a localização do usuário e exibir a cidade
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError)
  } else {
    alert("Seu navegador não suporta geolocalização.")
  }
}

// Função para mostrar a cidade com base nas coordenadas
function showPosition(position) {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude

  // Monta as coordenadas no formato "latitude,longitude" e envia para a API Nominatim
  const coordinates = `${latitude},${longitude}`
  const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.address) {
        const city =
          data.address.city || data.address.town || data.address.village
        const state = data.address.state
        document.getElementById(
          "cityDisplay"
        ).textContent = `${city}, ${state}`
        document.getElementById("cityDisplay2").textContent = document.getElementById("cityDisplay").textContent;


        // Armazena a localização em um cookie com validade de 7 dias
        const expirationDate = new Date()
        expirationDate.setDate(expirationDate.getDate() + 7)
        const cookieName = document.activeElement.id + "-userLocation"
        document.cookie = `${cookieName}=${JSON.stringify({
              latitude,
              longitude,
           })}; expires=${expirationDate.toUTCString()}`
      } else {
        document.getElementById("cityDisplay").textContent =
          "Não foi possível encontrar a cidade."
      }
    })
    .catch((error) => {
      console.error("Erro ao buscar a cidade:", error)
    })
}

// Função para lidar com erros na geolocalização
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("Permissão para geolocalização negada pelo usuário.")
      break
    case error.POSITION_UNAVAILABLE:
      alert("Informações de localização não estão disponíveis.")
      break
    case error.TIMEOUT:
      alert("A solicitação de geolocalização expirou.")
      break
    case error.UNKNOWN_ERROR:
      alert("Ocorreu um erro desconhecido ao obter a localização.")
      break
  }
}

// Função para verificar se a localização está no cookie ao carregar a página
function checkLocationCookie() {
  const cookies = document.cookie.split("; ")
  const activeButton = document.activeElement.id
  const cookieName = activeButton + "-userLocation"

  for (const cookie of cookies) {
    const [name, value] = cookie.split("=")
    if (name === cookieName) {
      const { latitude, longitude } = JSON.parse(value)
      showPosition({ coords: { latitude, longitude } })
      break
    }
  }
}

// Chama a função para verificar o cookie de localização ao carregar a página
checkLocationCookie()

// Adicione ouvintes de evento para os botões
document.getElementById("accept-button-mobile").addEventListener("click", getLocation);
document.getElementById("accept-button").addEventListener("click", getLocation);
document.getElementById("accept-button2").addEventListener("click", getLocation);
/* pegar_localizacao.js */

/* cookies.js */
document.addEventListener("DOMContentLoaded", function() {
    var cookiePopup = document.getElementById("cookie-popup")
    var acceptButton = document.getElementById("accept-button")
    var acceptButton = document.getElementById("accept-button2")
    var closeButton = document.getElementById("close-button")

    // Verifica se o cookie de aceitação já foi definido
    if (getCookie("cookieAccepted") !== "true") {
      cookiePopup.style.display = "block"
    }

    acceptButton.addEventListener("click", function() {
      // Define um cookie para registrar a aceitação
      setCookie("cookieAccepted", "true", 365)
      cookiePopup.style.display = "none"
    })

    closeButton.addEventListener("click", function() {
      cookiePopup.style.display = "none"
    })

    // Função para definir um cookie
    function setCookie(name, value, days) {
      var expires = ""
      if (days) {
        var date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        expires = "; expires=" + date.toUTCString()
      }
      document.cookie = name + "=" + value + expires + "; path=/"
    }

    // Função para obter o valor de um cookie
    function getCookie(name) {
      var nameEQ = name + "="
      var ca = document.cookie.split(";")
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) === " ") c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
      }
      return null
    }
  })
  /* cookies.js */
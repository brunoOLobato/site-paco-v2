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
document.getElementById("accept-button-mobile").addEventListener("click", getLocation)
document.getElementById("accept-button").addEventListener("click", getLocation)
document.getElementById("accept-button2").addEventListener("click", getLocation)

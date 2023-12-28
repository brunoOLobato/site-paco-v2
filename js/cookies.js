document.addEventListener("DOMContentLoaded", function () {
  var cookiePopup = document.getElementById("cookie-popup")
  var acceptButton = document.getElementById("accept-button")
  var acceptButton = document.getElementById("accept-button2")
  var closeButton = document.getElementById("close-button")

  // Verifica se o cookie de aceitação já foi definido
  if (getCookie("cookieAccepted") !== "true") {
    cookiePopup.style.display = "block"
  }

  acceptButton.addEventListener("click", function () {
    // Define um cookie para registrar a aceitação
    setCookie("cookieAccepted", "true", 365)
    cookiePopup.style.display = "none"
  })

  closeButton.addEventListener("click", function () {
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

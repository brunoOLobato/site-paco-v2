$(document).ready(function () {
  // Função para atualizar o valor com base no seletor de plano e valor
  function atualizarValor(selectPlano, valorSpan) {
    // Disparar o evento de mudança manualmente para atualizar o valor inicial
    selectPlano.trigger("change")

    // Adicione um evento de mudança ao select
    selectPlano.on("change", function () {
      const selectedOption = $(this).find(":selected") // Obtém a opção selecionada
      const selectedValue = selectedOption.val() // Obtém o valor da opção selecionada
      valorSpan.text(selectedValue) // Atualiza o conteúdo de valorSpan
    })
  }

  // Chamando a função para cada conjunto de seletor de plano e valor
  atualizarValor($("#plano"), $("#valor"))
  atualizarValor($("#plano2"), $("#valor2"))
  atualizarValor($("#plano3"), $("#valor3"))
  atualizarValor($("#plano4"), $("#valor4"))
  atualizarValor($("#plano5"), $("#valor5"))
  atualizarValor($("#planoilimitado1"), $("#valorilimitado1"))
  atualizarValor($("#planoilimitado2"), $("#valorilimitado2"))
  atualizarValor($("#planoilimitado3"), $("#valorilimitado3"))
  atualizarValor($("#planoilimitado4"), $("#valorilimitado4"))
  atualizarValor($("#planoilimitado5"), $("#valorilimitado5"))

})

//Fale Paco 1
document.getElementById("plano").addEventListener("change", function () {
  var selectedOption = this.options[this.selectedIndex].text // Obtém o texto da opção selecionada
  var conteudoLi = document.getElementById("fidelidade") // Obtém o elemento <li> de conteúdo
  var plano_comodato = document.getElementById("plano_comodato")
  var suporte_plano = document.getElementById("suporte_plano")
  var valor = ""

  if (selectedOption.includes("36 meses - R$ 35,35 / mês")) {
    valor =
      "Fidelidade contratada de 36 meses, com cancelamento sem multa contratual nos dois primeiros meses."
    // Valor real
    plano_comodato.style.display = "block"
    suporte_plano.style.marginBottom = "16px"
  } else if (selectedOption.includes("24 meses - R$ 37,90 / mês")) {
    valor =
      "Fidelidade contratada de 24 meses, com cancelamento sem multa contratual nos dois primeiros meses."
    // Valor real
    plano_comodato.style.display = "block"
    suporte_plano.style.marginBottom = "16px"
  } else if (selectedOption.includes("12 meses - R$ 39,90 / mês")) {
    valor =
      "Fidelidade contratada de 12 meses, com cancelamento sem multa contratual nos dois primeiros meses."
    // Valor real
    plano_comodato.style.display = "block"
    suporte_plano.style.marginBottom = "16px"
  } else if (selectedOption.includes("Pré-pago - R$ 49,90 / mês")) {
    valor = "Sem fidelidade."
    plano_comodato.style.display = "none"
    suporte_plano.style.marginBottom = "77px"
  }
  if (valor !== "") {
    console.log(selectedOption)
    conteudoLi.style.display = "block" // Exibe o conteúdo se uma das condições for verdadeira
    document.getElementById("valor-dinamico").textContent = valor
  } else {
    conteudoLi.style.display = "none" // Oculta o conteúdo caso contrário
  }
})

//Fale Paco 2
document.getElementById("plano2").addEventListener("change", function () {
  var selectedOption = this.options[this.selectedIndex].text // Obtém o texto da opção selecionada
  var conteudoLi2 = document.getElementById("fidelidade2") // Obtém o elemento <li> de conteúdo
  var plano_comodato2 = document.getElementById("plano_comodato2")
  var suporte_plano2 = document.getElementById("suporte_plano2")
  var valor = ""

  if (selectedOption.includes("36 meses - R$ 61,93 /mês")) {
    valor =
      "Fidelidade contratada de 36 meses, com cancelamento sem multa contratual nos dois primeiros meses."
    // Valor real
    plano_comodato2.style.display = "block"
    suporte_plano2.style.marginBottom = "16px"
  } else if (selectedOption.includes("24 meses - R$ 66,41 /mês")) {
    valor =
      "Fidelidade contratada de 24 meses, com cancelamento sem multa contratual nos dois primeiros meses."
    // Valor real
    plano_comodato2.style.display = "block"
    suporte_plano2.style.marginBottom = "16px"
  } else if (selectedOption.includes("12 meses - R$ 69,90 /mês")) {
    valor =
      "Fidelidade contratada de 12 meses, com cancelamento sem multa contratual nos dois primeiros meses."
    // Valor real
    plano_comodato2.style.display = "block"
    suporte_plano2.style.marginBottom = "16px"
  } else if (selectedOption.includes("Pré-pago - R$ 89,90 /mês")) {
    valor = "Sem fidelidade."
    plano_comodato2.style.display = "none"
    suporte_plano2.style.marginBottom = "77px"
  }
  if (valor !== "") {
    console.log(selectedOption)
    conteudoLi2.style.display = "block" // Exibe o conteúdo se uma das condições for verdadeira
    document.getElementById("valor-dinamico2").textContent = valor
  } else {
    conteudoLi2.style.display = "none" // Oculta o conteúdo caso contrário
  }
})

//Fale Paco 5
document.getElementById("plano3").addEventListener("change", function () {
  var selectedOption = this.options[this.selectedIndex].text // Obtém o texto da opção selecionada
  var conteudoLi3 = document.getElementById("fidelidade3") // Obtém o elemento <li> de conteúdo
  var plano_comodato3 = document.getElementById("plano_comodato3")
  var suporte_plano3 = document.getElementById("suporte_plano3")
  var valor = ""

  if (selectedOption.includes("36 meses - R$ 132,81 / mês")) {
    valor =
      "Fidelidade contratada de 36 meses, com cancelamento sem multa contratual nos dois primeiros meses."
    // Valor real
    plano_comodato3.style.display = "block"
    suporte_plano3.style.marginBottom = "16px"
  } else if (selectedOption.includes("24 meses - R$ 142,41 / mês")) {
    valor =
      "Fidelidade contratada de 24 meses, com cancelamento sem multa contratual nos dois primeiros meses."
    // Valor real
    plano_comodato3.style.display = "block"
    suporte_plano3.style.marginBottom = "16px"
  } else if (selectedOption.includes("12 meses - R$ 149,90 / mês")) {
    valor =
      "Fidelidade contratada de 12 meses, com cancelamento sem multa contratual nos dois primeiros meses."
    // Valor real
    plano_comodato3.style.display = "block"
    suporte_plano3.style.marginBottom = "16px"
  } else if (selectedOption.includes("Pré-pago - R$ 189,90 / mês")) {
    valor = "Sem fidelidade."
    plano_comodato3.style.display = "none"
    suporte_plano3.style.marginBottom = "77px"
  }
  if (valor !== "") {
    console.log(selectedOption)
    conteudoLi3.style.display = "block" // Exibe o conteúdo se uma das condições for verdadeira
    document.getElementById("valor-dinamico3").textContent = valor
  } else {
    conteudoLi3.style.display = "none" // Oculta o conteúdo caso contrário
  }
})

//Fale Paco 10
document.getElementById("plano4").addEventListener("change", function () {
  var selectedOption = this.options[this.selectedIndex].text // Obtém o texto da opção selecionada
  var conteudoLi4 = document.getElementById("fidelidade4") // Obtém o elemento <li> de conteúdo
  var plano_comodato4 = document.getElementById("plano_comodato4")
  var valor = ""

  if (selectedOption.includes("36 meses - R$ 256,85 / mês")) {
    valor =
      "Fidelidade contratada de 36 meses, com cancelamento sem multa contratual nos dois primeiros meses."
    // Valor real
    plano_comodato4.style.display = "block"
  } else if (selectedOption.includes("24 meses - R$ 275,41 / mês")) {
    valor =
      "Fidelidade contratada de 24 meses, com cancelamento sem multa contratual nos dois primeiros meses."
    // Valor real
    plano_comodato4.style.display = "block"
  } else if (selectedOption.includes("12 meses - R$ 289,90 / mês")) {
    valor =
      "Fidelidade contratada de 12 meses, com cancelamento sem multa contratual nos dois primeiros meses."
  }
  if (valor !== "") {
    console.log(selectedOption)
    conteudoLi4.style.display = "block" // Exibe o conteúdo se uma das condições for verdadeira
    document.getElementById("valor-dinamico4").textContent = valor
  } else {
    conteudoLi4.style.display = "none" // Oculta o conteúdo caso contrário
  }
})

//Fale Paco 15
document.getElementById("plano5").addEventListener("change", function () {
  var selectedOption = this.options[this.selectedIndex].text // Obtém o texto da opção selecionada
  var conteudoLi5 = document.getElementById("fidelidade5") // Obtém o elemento <li> de conteúdo
  var plano_comodato5 = document.getElementById("plano_comodato5")
  var valor = ""

  if (selectedOption.includes("36 meses - R$ 345,45 / mês")) {
    valor =
      "Fidelidade contratada de 36 meses, com cancelamento sem multa contratual nos dois primeiros meses."
    // Valor real
    plano_comodato5.style.display = "block"
  } else if (selectedOption.includes("24 meses - R$ 370,41 / mês")) {
    valor =
      "Fidelidade contratada de 24 meses, com cancelamento sem multa contratual nos dois primeiros meses."
    // Valor real
    plano_comodato5.style.display = "block"
  } else if (selectedOption.includes("12 meses - R$ 389,90 / mês")) {
    valor =
      "Fidelidade contratada de 12 meses, com cancelamento sem multa contratual nos dois primeiros meses."
  }
  if (valor !== "") {
    console.log(selectedOption)
    conteudoLi5.style.display = "block" // Exibe o conteúdo se uma das condições for verdadeira
    document.getElementById("valor-dinamico5").textContent = valor
  } else {
    conteudoLi5.style.display = "none" // Oculta o conteúdo caso contrário
  }
})
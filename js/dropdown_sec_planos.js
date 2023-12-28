const planDropdown = document.getElementById("planDropdown")
const planSelect = document.getElementById("planSelect")
const franquia = document.getElementById("franquia")
const ilimitados = document.getElementById("ilimitados")

// Defina o plano "Franquia" como padrão
planSelect.value = "franquia"
franquia.style.display = "block"

planSelect.addEventListener("change", () => {
 const selectedOption = planSelect.value

 // Oculta todas as seções
 franquia.style.display = "none"
 ilimitados.style.display = "none"

 // Mostra a seção selecionada
 if (selectedOption === "franquia") {
  franquia.style.display = "block"
 } else if (selectedOption === "ilimitados") {
  ilimitados.style.display = "block"
 }
})

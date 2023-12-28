document
  .getElementById("showPopupButton")
  .addEventListener("click", function () {
    document.getElementById("popup").classList.remove("hidden")
  })

document
  .getElementById("closePopupButton")
  .addEventListener("click", function () {
    document.getElementById("popup").classList.add("hidden")
  })

const headerMenuBurger = document.querySelector (".headerMenuBurger")
const headerMenu = document.querySelector(".headerMenu")

headerMenuBurger.addEventListener("click", function () {
    headerMenuBurger.classList.toggle("acitve")
    headerMenu.classList.toggle("showLists")
})
  
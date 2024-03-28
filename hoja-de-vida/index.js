window.addEventListener("DOMContentLoaded", () => {
  // Menu
  const AllMenu = document.querySelectorAll('ul#menu li')
  const DivContentTrasparent = document.querySelector('main.second div.div_content_second')
  const BtnsCloseMenu = document.querySelectorAll('button#closed-menu')
  const AllContent = document.querySelectorAll('div.div_content_second div.div_content')

  //Recorer todos los elementos del menu y agregarle un evento click.
  AllMenu.forEach((item) => {
    item.addEventListener("click", () => accessMenuSelected(item))
  })

  BtnsCloseMenu.forEach((item) => {
    item.addEventListener("click", closeMenu)
  })

  function closeMenu() {
    AllContent.forEach((item) => {
      if(item.id !== ''){
        item.classList.add("display")
      } else {
        item.classList.remove("display")
      }
    })
    DivContentTrasparent.classList.remove("display")
  }

  //Funcion para acceder al menu seleccionado.
  function accessMenuSelected(item) {
    AllContent.forEach((item) => {
      if (!item.classList.contains("display")) {
        item.classList.add("display")
      }
    })
    const contentShow = document.querySelector(`div.div_content_second div.div_content#${item.textContent}`)
    contentShow.classList.remove("display")
  }

})
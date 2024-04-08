window.addEventListener("DOMContentLoaded", () => {
  // Menu
  const AllMenu = document.querySelectorAll('ul#menu li')
  const DivContentTrasparent = document.querySelector('main.second div.div_content_second')
  const BtnsCloseMenu = document.querySelectorAll('button#closed-menu')
  const AllContent = document.querySelectorAll('div.div_content_second div.div_content')
  const text = document.querySelector('.mi_hoja_vida_text')

  //Recorer todos los elementos del menu y agregarle un evento click.
  AllMenu.forEach((item) => {
    item.addEventListener("click", () => accessMenuSelected(item))
  })

  //Cerrar menu
  BtnsCloseMenu.forEach((item) => {
    item.addEventListener("click", closeMenu)
  })

  //Funcion para cerrar el menu
  function closeMenu() {
    text.classList.toggle("display")
    renderText(text, 200, 3000, undefined)
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


  //Animacion en texto
  function setDisplayText(text, html) {
    html.classList.remove("display");
    text.textContent = text;
    html.textContent = text;
  }

  //Funcion para mostrar texto en pantalla con animación
  function renderText(textHTML, interval, timeout, next) {
    const originalText = textHTML.textContent;
    text.textContent = '';

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText(originalText.substring(0, currentIndex + 1), textHTML);

      currentIndex++;

      if (currentIndex > originalText.length) {
        clearInterval(intervalId);

        setTimeout(() => {
          next != undefined ? next() : null;
        }, timeout)
      }
    }, interval);
  }
  renderText(text, 200, 3000, undefined)
})
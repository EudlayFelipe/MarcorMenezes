function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    //  pegar a tag img
    const img = document.querySelector("profile img")
  
    //  substituir a imagem
    //  se tiver light mode, adiciona a img light
    if (html.classList.contains("light")) {
      img.setAttribute("src", "./assets/meneses.jpeg")
      
    }
    //  se tiver sem light mode, manter a imagem normal
    else {
      img.setAttribute("src", "./assets/meneses.jpeg")
    }
  
    // pegar a tag img
  }
  
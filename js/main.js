const listaDePads = document.querySelectorAll(".pads")

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio)
  if (elemento != null && elemento.localName === "audio") {
    elemento.play()
  } else {
    console.log("Elemento não encontrado ou seletor inválido")
  }
  console.log(elemento.localName)
}

for (let contador = 0; contador < listaDePads.length; contador++) {
  const padSelecionado = listaDePads[contador]
  const nomePad = padSelecionado.classList[1]
  const idAudio = `#som_${nomePad}` //template string

  padSelecionado.onclick = function () {
    tocaSom(idAudio)
  }

  padSelecionado.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      padSelecionado.classList.add("ativa")
    }
  }

  padSelecionado.onkeyup = function () {
    padSelecionado.classList.remove("ativa")
  }
}

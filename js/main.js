const listaDePads = document.querySelectorAll(".pads")

let padTocando = ""

function buscarPad(seletorAudio) {
  const padDesejado = document.querySelector(seletorAudio)
  return padDesejado
}

function tocaSom(seletorAudio) {
  const elemento = buscarPad(seletorAudio)
  if (elemento != null && elemento.localName === "audio") {
    elemento.play()
    padTocando = elemento
  } else {
    alert("Elemento não encontrado ou seletor inválido")
  }
}

function stopPad() {
  padTocando.pause()
  padTocando.currentTime = 0
}

for (let contador = 0; contador < listaDePads.length; contador++) {
  const padSelecionado = listaDePads[contador]
  const nomePad = padSelecionado.classList[1]
  const idAudio = `#som_${nomePad}` //template string
  const botaoStop = document.getElementById("btn_stop")

  padSelecionado.onclick = function () {
    if (padTocando == "") {
      tocaSom(idAudio)
    } else {
      stopPad()
      tocaSom(idAudio)
    }
  }

  botaoStop.onclick = () => stopPad()

  padSelecionado.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      padSelecionado.classList.add("ativa")
    }
  }
  padSelecionado.onkeyup = function () {
    padSelecionado.classList.remove("ativa")
  }
}

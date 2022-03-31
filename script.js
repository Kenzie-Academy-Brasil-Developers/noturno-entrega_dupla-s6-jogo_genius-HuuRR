
console.log()

const main = document.getElementsByClassName("main")
const container = document.createElement("section")
container.classList.add("tabuleiro")
container.innerHTML = `
    <div class="botao botao-verde"></div>
    <div class="botao botao-amarelo"></div>
    <div class="botao botao-vermelho"></div>
    <div class="botao botao-azul"></div>
    <div class="comando"></div>
`



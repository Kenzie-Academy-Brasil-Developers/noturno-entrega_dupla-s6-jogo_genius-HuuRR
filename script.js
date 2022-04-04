const main = document.getElementById("main")
let nivel = 1
let jogada = 0

function criarTabuleiro (){
    const container = document.createElement("section")
    container.classList.add("tabuleiro")
    container.innerHTML = `
    <div class="botao botao-verde"></div>
    <div class="botao botao-amarelo"></div>
    <div class="botao botao-vermelho"></div>
    <div class="botao botao-azul"></div>
    <div class="comando">
        <p class = "info"></p>
        <button class ="recomecar">Jogar Novamente</button>
    </div>
    `
    main.appendChild(container)
}
criarTabuleiro()

let verde = document.querySelector(".botao-verde")
let amarelo = document.querySelector(".botao-amarelo")
let vermelho = document.querySelector(".botao-vermelho")
let azul = document.querySelector(".botao-azul")
let recomecar = document.querySelector(".recomecar")
let centro = document.querySelector(".info")
let informacoes = "Preste atenção:"
let suaVez = "Agora é sua vez!"
let errou = "Que pena, você errou!"
let maiorPlacar = document.querySelector(".maior-placar")
let placarAtual = document.querySelector(".placar-atual")
centro.innerText = informacoes


const arrayJogo = []


function gerarRandon (){
    let numero = Math.floor(Math.random()* 4 + 1)
    arrayJogo.push(numero)
}


const arrayJogado = []

function jogadaVerde (){
    arrayJogado.push(1)
}

function jogadaAmarelo (){
    arrayJogado.push(2)
}

function jogadaVermelho (){
    arrayJogado.push(3)
}

function jogadaAzul (){
    arrayJogado.push(4)
}


verde.addEventListener('click', jogadaVerde)
amarelo.addEventListener('click', jogadaAmarelo)
vermelho.addEventListener('click', jogadaVermelho)
azul.addEventListener('click', jogadaAzul)

verde.addEventListener('click', validaJogada)
amarelo.addEventListener('click', validaJogada)
vermelho.addEventListener('click', validaJogada)
azul.addEventListener('click', validaJogada)

recomecar.addEventListener('click', comecarJogo)

function comecarJogo (){
    if (nivel === 1) {
        placarAtual.innerText = 0
    }
    //arrayJogo.length = 0
    arrayJogado.length = 0
    jogada = 0
    document.querySelector(".recomecar").style.visibility = "hidden";
    centro.innerText = informacoes
    gerarRandon()
    setTimeout(() => {centro.innerText = suaVez} , 1000+(2000*arrayJogo.length)) //centro.innerText = suaVez
    console.log(arrayJogo)
    piscar(arrayJogo)
}

function piscar (array){
    let timeOut = 1000
    for(let i = 0; i < arrayJogo.length; i++) {
        if(array[i] === 1){
            setTimeout(() => {verde.setAttribute("id", "transformar")
            }, timeOut)
            timeOut += 1000
            setTimeout(() => {
            verde.removeAttribute("id") 
            }, timeOut)
        }
        if(array[i] === 2){
            setTimeout(() => {amarelo.setAttribute("id", "transformar")
            }, timeOut)
            timeOut += 1000
            setTimeout(() => {
            amarelo.removeAttribute("id") 
            }, timeOut)
        }
        if(array[i] === 3){
            setTimeout(() => {vermelho.setAttribute("id", "transformar")
            }, timeOut)
            timeOut += 1000
            setTimeout(() => {
            vermelho.removeAttribute("id") 
            }, timeOut)
        }
        if(array[i] === 4){
            setTimeout(() => {azul.setAttribute("id", "transformar")
            }, timeOut)
            timeOut += 1000
            setTimeout(() => {
            azul.removeAttribute("id") 
            }, timeOut)
        }
        timeOut += 1000
    }
}


function atribuiPlacar(){
    placarAtual.innerText = nivel

    if (nivel > parseInt(maiorPlacar.innerText)) {
        maiorPlacar.innerText = nivel
    }
}

function validaJogada (){
    if (arrayJogado[jogada] !== arrayJogo[jogada]){
        centro.innerText = errou
        document.querySelector(".recomecar").style.visibility = "visible";
        //document.querySelector(".info").style.visibility = "hidden";
        nivel = 1
        arrayJogo.length = 0
    } else if (arrayJogado.length === arrayJogo.length){
        atribuiPlacar()
        nivel += 1
        comecarJogo()
    } else {
        jogada += 1
    }
    
}
comecarJogo()






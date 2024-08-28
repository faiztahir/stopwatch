let seconds = 00
let tens = 00
let outputseconds = document.getElementById('second')
let outputtens = document.getElementById('tens')
let buttonstart = document.getElementById('btn-start')
let buttonstop = document.getElementById('btn-stop')
let buttonreset = document.getElementById('btn-reset')
let interval

buttonstart.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(starttime, 10)
})
buttonstop.addEventListener('click', () => {
    clearInterval(interval)
})

buttonreset.addEventListener('click', () => {
    clearInterval(interval)
    tens = "00"
    seconds = "00"
    outputseconds.innerHTML = seconds
    outputtens.innerHTML = tens
})

function starttime() {
    tens++
    if(tens <= 9){
        outputtens.innerHTML = "0" + tens
    }
    if (tens > 9) {
        outputtens.innerHTML = tens
    }
    if (tens > 99) {
        seconds++
        outputseconds.innerHTML = "0" + seconds
        tens = 0
        outputtens.innerHTML = "0" + tens
    }
    if (seconds > 9) {
        outputseconds.innerHTML = seconds
    }
}
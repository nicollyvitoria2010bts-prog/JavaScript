

let pontos = Number(prompt("Quantos pontos?"))
let anosDeCasa = Number(prompt("Qunatos de casa?"))
let resultado   

if (pontos <= 99) {
    resultado ="bronze"
}else if (pontos <= 499) {
    resultado = "prata"
}else if (pontos <= 999) {
    resultado = "ouro"
}else if (anosDeCasa >= 1) {
    resultado = "Diamante"
}

alert("A classificação é $(resultado)")
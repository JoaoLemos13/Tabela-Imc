const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const botão = document.getElementById("button")
let resultadoImc = document.getElementById("resultadoDoImc")
let classificação = document.getElementById("classificação")

botão.addEventListener("click", () => calcularIMC())


function calcularIMC () {
let resultado = (peso.value / (altura.value * altura.value)) * 10000;
let resultadofinal = resultado.toPrecision(4)
resultadoImc.innerHTML = ` <strong>o seu IMC é ${resultadofinal}</strong>`

if (resultadofinal <= 18.5) {
   classificação.innerHTML = ` Abaixo do Peso Normal`
}
else if (resultadofinal <= 18.5 || resultadofinal <= 24.9) {
    classificação.innerHTML = " Peso Normal"
}
else if(resultadofinal == 25.0 || resultadofinal <= 29.9 ) {
    classificação.innerHTML = " Excesso de Peso"
} 
else if(resultadofinal <= 30.0 || resultadofinal <= 34.9 ) {
    classificação.innerHTML =" Obesidade de Grau 1"
} 

else if (resultadofinal <= 35.0 || resultadofinal <= 39.9 ) {
    classificação.innerHTML =" Obesidade de Grau 2"
} 

else if(resultadofinal >= 40.0 ) {
    classificação.innerHTML = " obesidade de Grau 3"
} 

}
function MenuMobile() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


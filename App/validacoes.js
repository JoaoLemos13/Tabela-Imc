
peso.addEventListener("blur", () =>  {  
let mensagem = document.getElementById("mensagemErroPeso")    
if (peso.value == "") {
    mensagem.innerHTML = `Digite seu peso`
} else {
    mensagem.style.display ="none"
}

})

altura.addEventListener("blur", () =>  {
    let mensagem = document.getElementById("mensagemErroAltura")    
    if (altura.value == "") {
    mensagem.innerHTML = `Digite sua Altura`
    } else {
        mensagem.style.display ="none"
    } 
    
    })

    botão.addEventListener("click", () => {
        let mensagem = document.getElementById("mensagemErroAltura")
        if (peso.value === "" | altura.value === "") {
            resultadoImc.innerHTML = `Por favor preencha os dados acima`
        } else {resultadoImc}

        if (altura.value <= 100 || altura.value >= 230) {
            mensagem.innerHTML = 'Coloque uma altura válida';
 mensagem.style.display ="block"
            console.log(mensagem);
        } else {
            mensagem.style.display ="none"
        }
    });
        
    
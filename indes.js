var inputSenha = document.getElementById('senha')
var mostrarSenha = document.getElementById('viewPass')
var forcaSenha = document.querySelector('div#forcePass')
    
    function impSenha(){
        var valorSenha = inputSenha.value
        var forca = 0

        mostrarSenha.textContent = `Sua senha: ${valorSenha}`

        if((valorSenha.length >= 4) && (valorSenha.length <= 7)){  
            forca += 10    
        } 
        if(valorSenha.length > 7) {
            forca += 25
        }   
        if((valorSenha.length >= 5) && (valorSenha.match(/[a-z]+/))) {
            forca += 10
        }
        if((valorSenha.length  >= 6) && (valorSenha.match(/[A-Z]+/))) {
            forca += 20
        }
        if((valorSenha.length >= 7) && (valorSenha.match(/[@#$%&*;!]+/))) {
            forca += 25
        }
        validarForca(forca)
    }

    function validarForca(forca) {

        if(forca < 30 && forca > 4){
            forcaSenha.textContent = 'Sua senha está Fraca!'
            forcaSenha.style.color = "#FF0000"
        }
        if(forca >= 30 && forca < 50){
            forcaSenha.textContent = 'Sua senha está Mediana!'
            forcaSenha.style.color = "#FFD700"
        }
        if(forca >= 50 && forca < 70){
            forcaSenha.textContent = 'Sua senha está Forte!'
            forcaSenha.style.color = "#3CB371"
        }
        if(forca >= 70 && forca < 100){
            forcaSenha.textContent = 'Sua senha está Excelente!'
            forcaSenha.style.color = "#006400"
        }
    }


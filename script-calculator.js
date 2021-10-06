//seleciona os elementos a serem alterados
let alturaInput = document.querySelector('#altura')
let pesoInput = document.querySelector('#peso')
let submitButton = document.querySelector('#button')
let result = document.querySelector('#result')
let resultado = document.querySelector('#resultado')
let error = document.querySelector('#error')
let containerErro = document.querySelector('#error-container')

 

//cria o evento de clique do botão submit
submitButton.addEventListener('click', function (e) {
    
    //impede o comportamento padrão do botão submit
    e.preventDefault();
    
    
    //pegar o valor digitado no input altura
    let alturaValue = alturaInput.value;
    alturaValue = alturaValue / 100;
    console.log(alturaValue);

    //pegar o valor digitado no input peso
    let pesoValue = pesoInput.value;
    console.log(pesoValue);

    //realiza o calculo do IMC
    let imc = (pesoValue / (alturaValue * alturaValue))
    console.log(imc.toFixed(2))

    //aqui realiza os testes condicionais baseado no resultado do IMC
    if (imc < 17) {
        resultado.textContent = `O seu IMC é de : ${(imc.toFixed(2))} - Muito Abaixo do Peso`
        result.style.background = 'red'
    } 
    else if (imc > 17 && imc <= 18.49) {
        resultado.textContent = `O seu IMC é de : ${(imc.toFixed(2))} Abaixo do Peso`
        result.style.background = 'yellow'
    }
     else if (imc >= 18.5 && imc <= 24.99) {
        resultado.textContent = `O seu IMC é de : ${(imc.toFixed(2))} - Peso Normal`
        result.style.background = 'greenyellow' 
    } 
    else if (imc >= 25 && imc <= 29.99) {
        resultado.textContent = `O seu IMC é de : ${(imc.toFixed(2))} - Acima do Peso`
        result.style.background = 'yellow' 
    } 
    else  if (imc >= 30 && imc <= 34.99){
        resultado.textContent = `O seu IMC é de : ${(imc.toFixed(2))} - Obesidade I`
        result.style.background = 'red'   
    }
    else if (imc >= 35){
        resultado.textContent = `O seu IMC é de : ${(imc.toFixed(2))} - Obesidade II`
        result.style.background = 'red'
    }

    //alerta se os campos estiverem vazios 
    if (alturaValue === "" || pesoValue === ""){

        //timer da mensagem de erro
        setTimeout(function(){ 
            error.textContent = ('Preencha os campos em branco!'); 
        }, 0);

        //esconder mensagem de erro após 3 segundos
        setTimeout (function(){
            error.style.display = 'none'
        }, 3000);
    }
})



//Declaração de variaveis

let operacao = prompt("Informe a operacao desejada: ")
let numero1 = Number(prompt("Informe o primeiro numero"))
let numero2 = Number(prompt("Informe o segundo numero"))

//Verificar a operacao matematica selecionada
if (operacao == "+"){
    let resultado = numero1 + numero2
    document.write('Seu resultado é ' + resultado );
    
}
else if (operacao == "-"){
    let resultado = numero1 - numero2
    document.write('Seu resultado é ' + resultado );
}
else if (operacao == "*"){
    let resultado = numero1 * numero2
    document.write('Seu resultado é ' + resultado );
}
else if (operacao == "/"){
    let resultado = numero1 / numero2
    document.write('Seu resultado é ' + resultado );    
   
}
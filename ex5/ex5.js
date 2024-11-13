var nota1 = parseFloat(prompt("Digite a primeira nota: "))
var nota2 = parseFloat(prompt("Digite a segunda nota: "))

var notaF = (nota1 + nota2)/2

if((notaF >= 7 ) && (notaF < 9)) {
    alert("Aprovado")
} else if(notaF <= 7){
    alert("Reprovado")
} else if(notaF == 10)
    alert("Aprovado com Distinção")

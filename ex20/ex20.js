var n1 = parseFloat(prompt("Digite a primeira nota: "));
var n2 = parseFloat(prompt("Digite a segunda nota: "));
var n3 = parseFloat(prompt("Digite a terceira nota: "));
var media = (n1 + n2 + n3) / 3;

if (media >= 7 && media < 10) {
    alert("Aprovado \n Média: " + media)
} else if (media < 7 && media >= 0) {
    alert("Reprovado \n Média: " + media)
} else if (media = 10) {
    alert("Aprovado com distinção \n Média: " + media)
} else {
    alert("Informe valores válidos")
}
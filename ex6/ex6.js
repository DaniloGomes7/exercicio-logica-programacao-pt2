var num1 = parseFloat(prompt("Digite o primeiro valor: "));
var num2 = parseFloat(prompt("Digite o segundo valor: "));
var num3 = parseFloat(prompt("Digite o terceiro valor: "));

if ((num1 > num2) && (num1 > num3)){
    alert("O maior valor é o " +num1)
} else if((num2 > num1) && (num2 > num3)){
    alert("O maior valor é o " + num2)
} else if ((num3 > num1) && (num3 > num2)){
    alert("O maior valor é o " + num3)
} else {
    alert("Os valores são iguais")
}

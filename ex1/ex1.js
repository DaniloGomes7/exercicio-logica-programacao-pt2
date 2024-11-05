var num1 = parseInt(prompt("Digite o primeiro valor "));
var num2 = parseInt(prompt("Digite o segundo valor"));

if (num1 > num2) {
    console.log("O primeiro valor é maior: ", num1)
    alert("O primeiro valor é maior: " + num1)
} else if (num1 < num2) {
    console.log("O segundo valor é maior: ", num2)
    alert("O segundo valor é maior: " + num2)
} else {
    console.log("Os valores sao iguais: ", num2)
    alert("Os valores sao iguais:" + num2)
}
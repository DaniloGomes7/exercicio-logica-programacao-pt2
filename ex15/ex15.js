var l1 = parseInt(prompt("Informe o primeiro lado: "));
var l2 = parseInt(prompt("Informe o segundo lado: "));
var l3 = parseInt(prompt("Informe o terceiro lado: "));
var tri = l1 + l2 > l3 || l1 + l3 > l2 || l2 + l1 > l3 || l2 + l3 > l1 || l3  + l1 > l2 || l3 + l2 > l1;

if (l1 == l2 && l1 == l3) {
    alert("Forma um triangulo? "+tri)
    alert("Triângulo equilátero")
} else if (l1 == l2 || l1 == l3 || l2 == l1 || l2 == l3 || l3 == l1 || l3 == l2) {
    alert("Forma um triangulo? "+tri)
    alert("Triângulo isósceles")
} else if (l1 != l2 && l1 != l3 && l2 != l1 && l2 != l3 && l3 != l1 && l3 != l2 ) {
    alert("Forma um triangulo? "+tri)
    alert("Triângulo escaleno")
} else {
    alert("Não forma um triângulo")
} 


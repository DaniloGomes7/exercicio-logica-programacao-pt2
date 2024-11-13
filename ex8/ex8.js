var pd1 = parseFloat(prompt("Informe o valor do primeiro produto: "));
var pd2 = parseFloat(prompt("Informe o valor do segundo produto: "));
var pd3 = parseFloat(prompt("Informe o valor do terceiro produto: "));


if (pd1 < pd2 && pd1 < pd3) {
    alert("Produto 1 é o item mais barato custando R$" + pd1)
} 
else if (pd2 < pd1 && pd2 < pd3) {
    alert("Produto 2 é o item mais barato custando R$" + pd2)
} 
else if (pd3 < pd1 && pd3 < pd2){
    alert("Produto 3 é o item mais barato custando R$"+pd3)
}
else{
    alert("Todos os preços são iguais")
}
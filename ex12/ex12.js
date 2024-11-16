var valorHoras=parseFloat(prompt("Digite o quanto você ganha por hora: "))
var numhoras=parseFloat(prompt("Digite o número de horas trabalhadas por mês: "))
var salariobruto  
var salarioliquido
salariobruto=valorHoras*numhoras

if (salariobruto<1500){
 var d = (salariobruto*0.075)
 alert("O desconto é R$ "+d.toFixed(2))
 salarioliquido = salariobruto - d
 alert("O sálario atual R$ "+salarioliquido.toFixed(2))
 
}
else if(salariobruto<2259.20){
    alert("Você está isento ")
}
else if(salariobruto>1500 && salariobruto<2500){
    var des = salariobruto*0.15.toFixed(2)
    alert("O desconto é R$ "+des.toFixed(2))
    salarioliquido = salariobruto - des
    alert("O salario atual R$ "+salarioliquido.toFixed(2))
}else if(salariobruto>2500){
    var desconto = salariobruto * 0.224.toFixed(2)
    alert("O desconto é R$ "+desconto.toFixed(2))
    salarioliquido = salariobruto - desconto
    alert("O salario atual R$ "+salarioliquido.toFixed(2))
}
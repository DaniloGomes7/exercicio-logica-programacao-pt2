var dia = parseInt(prompt("Dia: "));
var mes = parseInt(prompt("Mês: "));
var ano = parseInt(prompt("Ano: "));

if (dia <= 31 && dia > 0 && mes <= 12 && mes > 1){
alert(dia+"/"+mes+"/"+ano)
} else {
    alert("Data de nascimento inválida")
}
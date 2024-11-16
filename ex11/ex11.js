var salario = parseFloat(prompt("Informe o salário do funcionario: R$"));


if (salario > 0 && salario <= 280.00) {
    var valoraumento = parseFloat = (salario * 20) / 100
    var reajuste = parseFloat = (salario + valoraumento)
    alert("Sálario antes do reajuste: R$" + salario + "\n" +
        "porcentual do aumento foi de 20% " + "\n" +
        "O valor do aumento foi de R$" + valoraumento + "\n" +
        "Novo salario: R$" + reajuste
    )
} else if (salario >= 280.00 && salario < 700.00) {
    valoraumento = parseFloat = (salario * 15) / 100
    reajuste = (salario + valoraumento)
    alert("Sálario antes do reajuste: " + salario + "\n" +
        "porcentual do aumento foi de 15% " + "\n" +
        "O valor do aumento foi de R$" + valoraumento + "\n" +
        "novo salario: R$" + reajuste
    )
} else if (salario >= 700.00 && salario < 1500.00) {
    valoraumento = parseFloat = (salario * 10) / 100
    reajuste = (salario + valoraumento)
    alert("Sálario antes do reajuste: " + salario + "\n" +
        "porcentual do aumento foi de 10% " + "\n" +
        "O valor do aumento foi de R$" + valoraumento + "\n" +
        "novo salario: R$" + reajuste
    )
} else if (salario > 1500.00) {
    valoraumento = parseFloat = (salario * 5) / 100
    reajuste = (salario + valoraumento)
    alert("Sálario antes do reajuste: " + salario + "\n" +
        "porcentual do aumento foi de 5% " + "\n" +
        "O valor do aumento foi de R$" + valoraumento + "\n" +
        "novo salario: R$" + reajuste)
} else (
    alert("Informe um sálario válido")
)
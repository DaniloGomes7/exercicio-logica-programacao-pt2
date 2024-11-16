var tel = prompt("Telefonou para a vítima? (sim/não)")
var esteveNoLocal = prompt("Esteve no local do crime? (sim/não)")
var moraP = prompt("Mora perto da vítima? (sim/não)")
var devedor = prompt("Devia para a vítima? (sim/não)")
var trabalhou = prompt("Já trabalhou com a vítima? (sim/não)")


var respostasPositivas = 0


if (tel == "sim") respostasPositivas++
if (esteveNoLocal == "sim") respostasPositivas++
if (moraP == "sim") respostasPositivas++
if (devedor == "sim") respostasPositivas++
if (trabalhou == "sim") respostasPositivas++

var classificacao

if (respostasPositivas == 2) {
    classificacao = "Suspeita"
} else if (respostasPositivas >= 3 && respostasPositivas <= 4) {
    classificacao = "Cúmplice"
} else if (respostasPositivas == 5) {
    classificacao = "Assassino"
} else {
    classificacao = "Inocente"
}

alert("Classificação: " + classificacao)
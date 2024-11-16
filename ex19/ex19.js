var num = parseInt(prompt("Informe um número de 0-1000: "))
if(num>=0 && num<=1000 ){
    var c = (num/100)
    var d = (num%100)/10
    var u = (num%10)
    alert("Centenas: "+c.toFixed(0))
    alert("Dezenas: "+d.toFixed(0))
    alert("Unidades: "+u.toFixed(0))
}else{
    alert("Número inválido")
}
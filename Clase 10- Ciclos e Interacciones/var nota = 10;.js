var nota = 10;
var calificacion = "";
if (nota < 6) {
    calificacion = "Insuficiente";
} else if (nota < 8) {
    calificacion = "Aprobado";
} else if (nota < 10) {
    calificacion = "Bien";
} else {
    calificacion = "Sobresaliente";
}
console.log(calificacion);

var nota1 = 10;
console.log("Ha obtenido la siguiente confición:");
switch (nota1) {
    case 10:
        calificacion = "Sobresaliente";
        break;
    case 9:
        calificacion = "Distinguido";
        break;
    case 8:
        calificacion = "Bien";
        break;
    case 7:
    case 6:
        calificacion = "Aprobado";
        break;
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
        calificacion = "Desaprobado";
        break;
    default:
        calificacion = "Nota errónea";
        break;
}
console.log (calificacion)

//For

for (var i = 1; i <= 10; i++){
    console.log (i);
}

for (var i = 2; i <= 100; i+=2){
    console.log (i);
}

for (var i = 0; i < 5; i++){
    console.log (i);
}

//While

var i = 0; 
while ( i<5){
    console.log (i);
    i++;
}
console.log ("Programa finalizado")
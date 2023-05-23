let a = 3.5;
let b = 4.8;

// Suma (+)
console.log(a + b);

// Resta (-)
console.log(a - b);

// Multiplicacion (*)
console.log(a * b);

// Division (/)
console.log(a / b);

// Representacion de los numeros en cadenas de texto
// Una forma de pasar la variable numerica a string
console.log(typeof a);
let a_s = a.toString();
console.log(typeof a_s);

// Redondeo de numeros decimales
let c = 3.3;
let d = c * 3;

console.log(d);
console.log(typeof d);
// redonde a 2 decimales
// .toFixed(x) -- Limitar el numero de decimales al valor x
console.log(d.toFixed(2)); //2 ->cantidad de numeros decimales
console.log(typeof d.toFixed(2));  // me lo convierte a string

let e = 1839.126456789;
let f = 221345465484564;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

// toPrecision(x) -- Realiza un redonde cientifico
// Cifras significativas
console.log(e.toPrecision(7))
// Devuelve con notacion cientifica
console.log(f.toPrecision(7))
// Tambien devuelve string
console.log(typeof f.toPrecision(7))

// funcion max --> obtengo el mayor numero
console.log(Math.max(1, 5, 8, 40, 60, 2))
console.log(Math.min(1, 5, 8, 40, 60, 2))

// Retorna un numero al azar
let num = Math.random();
console.log(num)
let num2 = num * 5
console.log(num2)
console.log(Math.floor(num2))

// Redonde de la parte entera (tiene en cuenta el primer decimal)
let i = 1839.925456789;
console.log(Math.round(i))

// Redonde de la parte entera (no tiene en cuenta la parte decimal)
console.log(Math.trunc(i))
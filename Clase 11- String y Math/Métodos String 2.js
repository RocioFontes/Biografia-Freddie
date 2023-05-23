// Metodos de cadenas de texto (parte2) convertir cadena en mayuscula o minuscula
let input = "Cancer"
let db = "cancer"

console.log(input === db)

console.log(input.toLowerCase())
console.log(input.toUpperCase())
// toLocaleUpperCase() casos especiales
console.log(input.toLocaleUpperCase())// se usa para lenguajes diferentes con el codigo ascci
 //toLowerCase() - toUpperCase()
 console.log(input.toLowerCase() === db.toLowerCase())

 // concatenas dos cadenas de caracteres
 let str_1 = "Hola soy la primer cadena."
 let str_2 = "Y yo soy la segunda cadena"

 // Dos formas
 console.log(str_1.concat(" ", str_2))
 // El operador + es usado tmb en los numeros, hay que tener cuidados que si usamos numeros los puede sumar
 console.log(str_1 + " " + str_2 )

/*  todos los espacios por el principio y el final no interesan*/
 let str_3 = "    Hola soy un string con espacios al final.   "
 console.log(str_3.length)
 // metodo trim() -> elimina los espacios del principio y el final
 console.log(str_3.trim().length)

//Elimina los espacios del principio
 console.log(str_3.trimStart().length)

//Elimina los espacios del final
 console.log(str_3.trimEnd().length)

 // Obtener el caracter que hay en cierta posicion
 let str_4 = "Hola soy el string numero 4" // = ["H", "o", "l", "a", " ", "s".......]
 /*es como un arreglo*/ 

 console.log(str_4.charAt(5)) // le paso por pasentesis que posicion quiero tener
 console.log(str_4[5])

 // Obtener la posicion de una palabra dentro de una cadena de caracteres
 let str_5 = "Hola soy Rocío y me gusta el voley. Mi nombre es Rocío y mi apellido es Fontes"
 // Quiero saber la posicion de Ludmila
 console.log(str_5.indexOf("Rocío")) // Muestra en que posicion inicia 9 
 // Si coloco una palabra que no aparece devuelve -1
 // Si hay mas de dos palabras, sigue mostrando la posicion de la primer instancia que aparece
 console.log(str_5.charAt(9))
 // Me muestra la ultima instancia que aparece la palabra
 console.log(str_5.lastIndexOf("Rocío"))
//  Metodos mas utilizados con cadenas de caracteres
// Como obtener la longitud de un string

let str = "Hola soy un string";
console.log(str.length);

// Obtener partes de cadenas de caracteres -- 3 opciones
// slice() substring() substr() este ultimo esta medio obsoleto
let slice_str = str.slice(5, 10) // entre parentesis coloco desde cual hasta cual caracxter quiero que me muestre
console.log(slice_str)  // La posicion 5 + 1 es la que me toma en el primer parametro

let substring_str = str.substring(5, 10) // lo mismo que el anterior
console.log(substring_str)

let substr_str = str.substr(5, 10) //5 pos inicial, 10 es la longitud
console.log(substr_str)

// Reemplazar parte del con
let cadena = "Hola mi nombre es Rocío"
console.log(cadena)
// solo reemplaza la primer instancia
console.log(cadena.replace('Rocío', 'Angélica'))

let texto_largo = "Un tigre, dos tigres, tres tigres, comían trigo en un triste trigal: un tigre, dos tigres, tres tigres. El cielo está enladrillado."

// queremos reemplazar los ariculos 
console.log(texto_largo.replace('tigres', 'cinco'))
// el metodo replace actua solo sobre lo primero que encuentre, para que reemplace todos hay que usar una opcion 
// mas avanzada
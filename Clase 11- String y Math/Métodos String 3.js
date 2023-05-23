// Expresiones regulares -> Nos permiten hacer una busqueda mas avanzada que simplemente con los string


let texto_largo = "Un tigre, dos tigres, tres tigres, comían trigo en un triste trigal: un tigre, dos tigres, tres tigres. El cielo está enladrillado."

// vamos a ver si el texto contiene una palabra
//Existe la palabra dentro del texto?
console.log(texto_largo.includes("tigres"))
console.log(texto_largo.includes("terremoto"))

// Saber si un texto comienza con una palabra
console.log(texto_largo.startsWith("U"))
console.log(texto_largo.startsWith("Un"))
// Es case sensitive
console.log(texto_largo.startsWith("u"))

// Saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("."))
console.log(texto_largo.endsWith("enladrillado."))
console.log(texto_largo.endsWith("o"))
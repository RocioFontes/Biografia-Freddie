// Una cadena de texto con tu Nombre
let nombre = "Rocío";

// Otra cadena de texto con tu Apellido
let apellido = "Fontes";

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

//  Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let contador = estudiante.length;
console.log(contador);

// Una variable que contenga la primera letra del Nombre
let primer_char = estudiante.charAt(0);
console.log(primer_char);

// Otra variable que contenga la última letra del Apellido
let ultimo_char = estudiante.charAt(11);
console.log(ultimo_char);

// Una cadena de texto que elimine los espacios de la variable "estudiante"
let sin_espacios = estudiante.replace(' ', '');
console.log(sin_espacios);

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let bool = estudiante.includes("Fontes")
console.log(bool)
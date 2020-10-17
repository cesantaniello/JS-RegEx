//Búsqueda de cadenas de texto

var mensaje = "Esta historia continuará";

// \W Cualquiier carácter que no sea alfanumérico
// \S Cualquiier carácter que no sea un espacio en blanco

console.log(mensaje.search(/\W/));

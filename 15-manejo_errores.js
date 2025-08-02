class ErrorPersonalizado extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorPersonalizado"; // Nombre del error personalizado
    }
}

//USAR TRY CATCH PARA CAPTURAR UNA EXCEPCIÓN
let persona 
try{
    console.log(persona.nombre);
}
catch{
    console.log("Error: La variable 'persona' no está definida.");
}

//lo mismo pero con finally que se ejecuta siempre
try{
    console.log(persona.dni);
}
catch(error){
    console.log("Error: La variable 'persona' no está definida. Error específico: " + error.message);
}
finally{
    console.log("Este bloque se ejecuta siempre, independientemente de si hay un error o no.");
}


//PARA LANZAR UN ERROR SE HACE CON THROW
//throw new Error("Mensaje de error personalizado");
try{
    throw new Error("Este es un error generico.");
}
catch(error){
    console.log("Error capturado: " + error.message);
}



try{
    throw new ErrorPersonalizado("Este es un error personalizado.");
}
catch(error){
    console.log("Error capturado: " + error.message);
}

let numero = 1
let numero2 = 2

try {
    if (numero == numero2){
        console.log("Los números son iguales.");
    } else {
        throw new ErrorPersonalizado("Los números no son iguales.");
    }
} catch (error) {
    console.log("Error capturado:", error.message);
}

//SE COMPRUEBA SI UN VALOR ES UN NÚMERO Y SE MANEJAN ERRORES PERSONALIZADOS
function sum(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new ErrorPersonalizado("Ambos argumentos deben ser números.");
        }
        if (a === 0 || b === 0) {
            throw new ErrorPersonalizado("Los números no pueden ser cero.");
        }
        if (a < 0 || b < 0) {
            throw new ErrorPersonalizado("Los números no pueden ser negativos.");
        }
        return a + b;
    } catch (error) {
        console.log("Error capturado en sum:", error.message);
        return null; 
    }
}

//DIFERENTES CASOS DE USO DE LA FUNCIÓN SUM
console.log(sum(5, 7)); // 12
console.log(sum(-1, 7)); // Error capturado en sum: Los números no pueden ser negativos.
console.log(sum(0, 7)); // Error capturado en sum: Los números no pueden ser cero.
console.log(sum("a", 7)); // Error capturado en sum: Ambos argumentos deben ser números.


//VALIDACIÓN DE ENTRADAS DE USUARIO CON TRY CATCH
//Ejemplo de validación de entradas de usuario para asegurarse de que son números válidos

let values = ["10.5", "abc", "20.2", "xyz"]
let valoresValidos = [];

for (let value of values) {
    try {
        let numero = parseFloat(value);
        if (isNaN(numero)) {
            throw new Error(`El valor "${value}" no es un número válido.`);
        }
        valoresValidos.push(numero);
    } catch (error) {
        console.log(error.message);
    }
}

console.log("Valores válidos:", valoresValidos); 


//COMPROBAR SI UN OBJETO TIENE UNA PROPIEDAD Y MANEJAR ERRORES
//Función que verifica si un objeto tiene una propiedad específica y lanza un error
function tienepropiedad (objeto, propiedad) {
   if(!objeto.hasOwnProperty(propiedad)){
         throw new Error(`El objeto no tiene la propiedad "${propiedad}".`);
   }
   return objeto
}

let persona3= {
    nombre: "Pau",
    edad: 20
}

try{
    tienepropiedad(persona3, "dni")
}
catch(error){
    console.log("Error capturado:", error.message);
}
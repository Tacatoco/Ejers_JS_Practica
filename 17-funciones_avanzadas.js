// SE PUEDE ASIGNAR UNA FUNCIÓN SIN NOMBRE A UNA VARIABLE
const saludo = function (name) {
    console.log("Hola " + name);
};

saludo("Juan");

// LLAMAMOS A UNA FUNCIÓN COMO PARÁMETRO DE OTRA FUNCIÓN
function func1(func2, nombre) {
    func2(nombre);
}

func1(saludo, "Pedro");

// DEFINIMOS LA FUNCIÓN greet
function greet() {
    return "Hola desde greet";
}

// FUNCIÓN QUE DEVUELVE OTRA FUNCIÓN
function returngreet() {
    return greet; // No llamamos a greet, solo la devolvemos
}

const funcionRecibida = returngreet();
console.log(funcionRecibida);     // Muestra la función greet en consola
console.log(funcionRecibida());   // Llama a greet y muestra "Hola desde greet"


const variablecont = function (nombre) {
    return "Hola, " + nombre;
}

console.log(variablecont("Marta"));


function saludos(nombre) {
    console.log("Hola, " + nombre);
}

function saludosconnombre(funcionRecibida, nombre) {
    console.log(funcionRecibida(nombre));
}

saludosconnombre(variablecont, "Ana");
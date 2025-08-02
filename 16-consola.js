//Un log se hace normal
console.log("Este es un mensaje de consola.");

//Un log de error se hace con console.error
console.error("Este es un mensaje de error, el error es: " + new Error("Error de ejemplo"));

//Un log de advertencia se hace con console.warn
console.warn("Este es un mensaje de advertencia.");

//Un log de información se hace con console.info
console.info("Este es un mensaje informativo.");

//La tabla se hace con console.table
//Se puede usar para mostrar datos en forma de tabla, útil para arrays y objetos
let data = [
    ["Pau", 37],
    ["Javi", 35],
    ["Jordi", 33]
]

let data2 = [
    {name : "Pau", age: 20},
    {name : "Jordi", age: 37},
    {name : "Angel", age: 57},
]


console.table(data);
console.table(data2);

//El grupo se hace con console.group y console.groupEnd
//Permite agrupar mensajes relacionados en la consola, útil para organizar la salida
console.group("Grupo de datos")
console.log("Mensaje dentro del grupo");
console.log("Otro mensaje dentro del grupo");
console.groupEnd();


//El temporizador se hace con console.time y console.timeEnd
//Permite medir el tiempo que tarda en ejecutarse un bloque de código
//Tienen que tener el mismo nombre el mismo nombre para que funcione el start y el end
console.time("Tiempo de ejecución");

for(let i = 0; i < 1000000; i++) {
    // Simulación de un bucle que toma tiempo
}   
console.timeEnd("Tiempo de ejecución");

let edad = 20
//console.assert se usa para verificar una condición y mostrar un mensaje si la condición es falsa
console.assert(edad >= 18, "NO ES MAYOR DE EDAD");
console.assert(edad < 18, "ES MAYOR DE EDAD");

console.count("Contador de mensajes"); // Cuenta cuántas veces se ha llamado a console.count con el mismo label
console.count("Contador de mensajes"); // Incrementa el contador
console.countReset("Contador de mensajes"); // Resetea el contador a cero
console.count("Contador de mensajes"); // Vuelve a contar desde cero
console.count("Contador de mensajes"); // Incrementa el contador nuevamente

//console.trace se usa para mostrar la pila de llamadas en el momento en que se llama
//Es útil para depurar y entender el flujo de ejecución del código
console.trace("Seguimiento de la ejecucion"); 

function funcion1() {
    funcion2()
}
function funcion2() {
    console.trace("Seguimiento de la ejecucion");
}

funcion1()

//console.clear se usa para limpiar la consola
console.clear();


//EJEMPLOS DE USO EN LAS FUNCIONES

function error5(numero) {
    if (numero > 5) {
    console.error("El número es mayor que 5");
    }
    else{
    console.log("El número es menor o igual a 5");
    }
} 

function error10(numero) {
    if (numero > 10) {
    console.warn("El número no es recomendable que sea mayor que 10");
    }
    else{
    console.log("El número es menor o igual a 10");
    }
} 

function informando(nombre) {
    console.info("El nombre es: " + nombre);
} 

//LA DIFERENCIA AL IMPRIMIR LAS TABLAS ES QUE SI TIENEN CLAVE SE ESPECIFICA ESTA EN LA COLUMNA DE LA TABLA
let data3 = [
    ["Pau", 37],
    ["Javi", 35],
    ["Jordi", 33]
]

let data4 = [
    {name : "Pau", age: 20},
    {name : "Jordi", age: 37},
    {name : "Angel", age: 57},
]


console.table(data);
console.table(data2);


console.group("Grupo de personas")
console.log("Pau");
console.log("Javi");
console.groupEnd();

//Con el .time se inicia el temporizador y con .timeEnd se detiene
console.time("Tiempo de ejecución");
for(let i = 0; i < 1000000000; i++) {
    
}
console.timeEnd("Tiempo de ejecución");

let num = -3
console.assert(num >= 0, "El número es negativo"); // Muestra un error porque la condición es falsa


function contadores(num){
    for (let i = 0; i < num; i++) {
        console.count("Contador de iteraciones");
    }
    console.countReset("Contador de iteraciones");
}

contadores(5); // Muestra el contador de iteraciones 5 veces
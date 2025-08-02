// Desestructuración en Arrays
// Permite extraer valores de un array y asignarlos a variables individuales
let myArray = [1, 2, 3, 4, 5];
//Sacamos los valores del array y los asignamos a variables
let [primerE, segundoE] = myArray;
console.log(primerE); 
console.log(segundoE); 

// Si un elemento del array no se asigna a la variable y esta está vacía, se le pondrá por defecto 99
let myArray2 = [1, 2, 3, 4];
let [primerE2, segundoE2, tercerE2, cuartoE2, quintoE2 = 99] = myArray2;
//SOLO FUNCIONA CON EL LET DETRÁS, LAS VARIABLES QUE YA ESTÁN DEFINIDAS NO SE LES PUEDE PONER UN VALOR POR DEFECTO
console.log(primerE2); 
console.log(segundoE2);  
console.log(tercerE2); 
console.log(cuartoE2); 
console.log(quintoE2); 


let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
    trabajo : {
        empresa: "Facsa",
        puesto: "Peón"
    }
}

// Desestructuración en Objetos, CAMBIA A LA DE ARRAYS, YA QUE VA CON LLAVES
//EL NOMBRE DE LAS VARIABLES DEBEN COINCIDIR CON EL NOMBRE DE LA CLAVES DEL OBJETO
let { nombre, edad, profesion } = persona;
console.log(nombre);
console.log(edad);
console.log(profesion);

//PONIENDO EL NOMBRE DE LA CLAVE Y : SE LE PUEDE ASIGNAR EL VALOR A OTRA VARIABLE CON NOMBRE DIFERENTE
//EL ORDEN NO IMPORTA
let { nombre: nombrePersona, profesion : profesionPersona, edad: edadPersona} = persona
console.log(nombrePersona);
console.log(profesionPersona); 
console.log(edadPersona);

// PARA EXTRAER VALORES DE UN OBJETO ANIDADO, SE PUEDE HACER DE LA MISMA MANERA
//PONIENDO EL NOMBRE DEL OBJETO ANIDADO Y : {NOMBRE CLAVE: NOMBRE VARIABLE}
let { nombre : nombre2, trabajo : {empresa: trabajo} } = persona
console.log(nombre2);
console.log(trabajo);

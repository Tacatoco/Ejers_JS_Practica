//Propagacion en los arrays
let myArray = [1, 2, 3, 4, 5];
let myArray2 = [6, 7, 8, 9, 10];

//Para propagar en arrays se tiene que usar ...
//En caso de queramos poner valores extra, se hace sin ...
let myArray3 = [...myArray, ...myArray2]
console.log(myArray3);

//Asi podemos añadir valores extra al acabar el array sin ...
myArray3 = [myArray, 5, 7, 9, 99]
console.log(myArray3);


//Asi se crea una copia del array con ...
let myarray4 = [...myArray]
console.log(myarray4);


// Propagación en Objetos
// Permite combinar propiedades de varios objetos en uno nuevo  

let persona = {
    nombre: "Juan",
    edad: 30,
}

let persona2 = {
profesion : "Ingeniero",
mascota : "Perro",
}

//No se hace con corchetes, sino con llaves
let personas = {...persona, ...persona2}
console.log(personas);

//Asi se crea una copia del objeto con ...
let persona3 = {...persona}
console.log(persona3)

// Desestructuración combinada con propagación
//Cogemos un objeto alumno que se le asigna los valores de persona y le añadimos las notas previamente desestrcuturadas de un array general de notas del 1 al 10
let arrayfinal = [1,2,3,4,5,6,7,8,9,10];
let [, , , , , notahist, notamates, notabio] = arrayfinal
let alumno = {...persona, notahistoria: notahist, notamates: notamates, notabio: notabio}
console.log(alumno);
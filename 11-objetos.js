// Definición de un objeto persona con propiedades nombre, edad y dinero
let persona = {
    nombre: "Pau",
    edad: 20,
    dinero: 300
}

console.log(persona) // Muestra el objeto persona

// Se añade una nueva propiedad 'sexo' al objeto persona
persona.sexo = "Masculino"

console.log(persona) // Muestra el objeto persona actualizado

// Se elimina la propiedad 'dinero' del objeto persona
delete persona.dinero
console.log(persona) // Muestra el objeto persona sin la propiedad dinero

// Función para añadir una mascota al objeto persona
function anadirmascota (nombre){
    persona.mascota = nombre
}

anadirmascota("josemaria") // Añade la mascota 'josemaria'
console.log(persona) // Muestra el objeto persona con la mascota

// Recorre todas las propiedades del objeto persona y muestra sus valores
for (let key in persona) {
    console.log("Valor"  + ": " + persona[key])
}

// Definición de un objeto medico con una propiedad anidada 'especialidad'
let medico = {
    nombre: "Ramón",
    edad: 40,
    salario: 2000,
    especialidad : {
        nombre_esp : "Cardiología",
        complemento_esp: 400,
        turno_nocturno : false
    }
}

// Recorre las propiedades del objeto especialidad dentro de medico y muestra sus valores
for(let key in medico.especialidad){
    console.log("Valor" + ": " + medico.especialidad[key])
}

// Compara si persona y medico son el mismo objeto (referencia en memoria)
console.log("¿LOS DOS OBJETOS SON IGUALES? " + (persona === medico))

// Función para comprobar si dos objetos tienen el mismo número de claves
function num_Claves (objeto1, objeto2){
    let keys1 = Object.keys(objeto1)
    let keys2 = Object.keys(objeto2)

    // Compara si los arrays de claves son iguales (esto compara referencias, no contenido)
    if (keys1 != keys2){
        return false
    }
    return true
}

let mismo_num_claves = num_Claves(persona, medico)

console.log("¿TIENEN EL MISMO NUMERO DE LLAVES? " + mismo_num_claves)

// Compara si el nombre de persona es igual al salario de medico (comparación de valores)
console.log("¿SON IGUALES ? " + (persona.nombre == medico.salario))

// Importa la clase Persona desde otro archivo y crea una nueva instancia
import { Persona } from './Persona.js'

let manolo = new Persona("No")
console.log(manolo)
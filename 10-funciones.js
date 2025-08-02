
//FUNCIÓN QUE SUMA DOS VALORES
function sumanum (num1, num2){
    console.log(num1 + num2)
}

sumanum(3,5)


let array1 = [9,2,3,4,1,87]

//FUNCIÓN QUE COMPRUEBA QUE ARRAY CONTIENE MÁS VALORES
function mayorarray(array){
    let mayor = 0
    for (let i = 0; i < array.length; i++){
        if(array[i] > mayor){
            mayor = array[i]
        } 
    }
    console.log(mayor)
}

mayorarray(array1)

//FUNCIÓN QUE CUENTA LAS VOCALES DE UN STRING
let cantidad = 0
function vocalescadena(cadena){
    let vocales = "aeiou"
    for(let i = 0; i < cadena.length; i++){
        if(vocales.includes(cadena[i])){
        cantidad++
        }
    }
    console.log(cantidad)
}
vocalescadena("Esto es una prueba")

//FUNCIÓN QUE USA UN FOR EACH PARA PASAR LOS VALORES DE UN ARRAY A MAYUSCULAS
let arrayminus = ["esto", "es", "una", "prueba"]
function arrayamayus(array){
    let arraymayor = []
    array.forEach((valor) => arraymayor.push(valor.toUpperCase()))
    console.log(arraymayor)
}
arrayamayus(arrayminus)

//FUNCIÓN PARA SABER SI UN NÚMERO ES PRIMO
function primo(numerito){
    for(let i = 2; i < numerito;  i++){
         if(numerito % i === 0 ){
            return false
         }
    }
    return true
}

const comprobador = primo(8)
console.log(comprobador)


//FUNCIÓN PARA SABER QUE NUMEROS SON COMUNES ENTRE DOS ARRAYS
function comunesarrays (array1, array2){
   let arraycomunes = []
    let casillasrec = 0
    if (array1.length > array2.length){
        casillasrec = array2.length
    }
    else {casillasrec = array1.length}
    for (let i = 0; i< casillasrec; i++){
        if (array1.includes(array2[i])){
            arraycomunes.push(array2[i])
        }
    }
    console.log(arraycomunes)
}

array1 = [1, 2, 3, 4, 5];
array2 = [3, 2, 1, 7, 9];


comunesarrays(array1, array2)

let arrayquenosoncomunes = []

//FUNCIÓN PARA SABER QUE VALORES NO SON COMUNES ENTRE DOS ARRAYS
function arraydedesiguales (arraysis1, arraysis2){
    let contador2 = 0
   
    if (arraysis1.length > arraysis2){
        contador2 = arraysis2.length
    }
    else{
        contador2 = arraysis1.length
    }

    for (let i = 0; i < contador2; i++){
      if(!(arraysis1.includes(arraysis2[i]))){
        arrayquenosoncomunes.push(arraysis2[i])
      }
    }
}
arraydedesiguales(arraysito1, arraysito2)

console.log(arrayquenosoncomunes)



let arraynumeros = [2,3,4,5,6,7,8,9]
//FUNCIÓN PARA ELEVAR AL CUADRADO LOS VALORES DE UN ARRAY
function elevarcuadrado (arraysinelevar){
    for (let i = 0; i < arraysinelevar.length; i++){
        arraysinelevar[i] = arraysinelevar[i] * 2
    }
}

elevarcuadrado(arraynumeros)
console.log(arraynumeros)



let arraycadena = []
let cadena2 = "Hola buenos dias que tal"
// FUNCIÓN PARA ORDENAR LAS PALABRAS DE UNA CADENA DE TEXTO INVIRTIENDO SU ORDEN
function ordenarpalabras (lacadena){
    let arraycadenainvertida= []
   arraycadena =  lacadena.split(" ")
for (let i = arraycadena.length - 1; i >= 0; i--){
    arraycadenainvertida.push(arraycadena[i])
}
console.log(arraycadenainvertida)
}

ordenarpalabras(cadena2)

//FUNCIÓN QUE RECIBE UNA FUNCIÓN COMO PARÁMETRO Y LA EJECUTA
let funciondeprueba = (prueba) => {
console.log(`Hola, ${prueba}`)
}

funciondeprueba("pau")


//FUNCIÓN QUE RECIBE DOS PARÁMETROS Y LOS SUMA, SI NO SE LE PASAN NINGUNO, LOS INICIALIZA A 0
function nan (a = 0, b = 0){
    console.log(a +b)
}

nan()

// FUNCIÓN QUE RECIBE UNA FUNCIÓN Y UN PARÁMETRO, LLAMA A LA FUNCIÓN CON EL PARÁMETRO
function funcionquellama(funcion1, parametrodela1func){
    funcion1(parametrodela1func)
}


funcionquellama(funciondeprueba, "pau")

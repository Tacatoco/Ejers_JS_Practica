let cadena = "texto"
let contador = cadena.length - 1
let verificador = true
let nuevacadena = ""

//BUCLE SIMPLE PARA PASAR LOS CHARS DE UNA CADENA A OTRA PERO AL REVÉS
//SIMILAR A JAVA
while(verificador){
    if(contador >= 0){
    nuevacadena += cadena[contador]
    contador--
    }
    else{
        verificador = false
    }
}
console.log(nuevacadena)


let arraynumeros = [10, 200, 1, 2, 4, 5, 65, 43]
let nuevoarray = []

//EL FOR OF ES COMO EL FOR EACH EN JAVA, USA UN DATO DEL TIPO DEL ARREGLO QUE SE VA A RECORRER
for(let numero of arraynumeros){
if (numero > 10){
    nuevoarray.push(numero)
}
}
console.log(nuevoarray)
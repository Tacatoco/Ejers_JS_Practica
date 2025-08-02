

// 1. Crea una variable para cada operación aritmética
let var1 = 5 % 2;
let var2 = 5 - 2;
let var3 = 5 + 2;
let var4 = 5 * 2;
let var5 = 5 / 2;
let var6 = 5 ** 2;




// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

var1 += var2;
var2 -= var1;



// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 > 2);
console.log(1 < 2);
console.log(5 == 5);
console.log(5 === 5);
console.log(5 != 4);


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(2 > 3);
console.log(1 == 5);
console.log(5 > 7);
console.log(5 != 5);
console.log(5 === 1);




// 5. Utiliza el operador lógico and
let num1 = 2
let num2 = 5
if(num1 == 2 && num2 > 4){
console.log("VERDADERO")
}



// 6. Utiliza el operador lógico or
if(num1 == 3 || num2 > 4){
console.log("VERDADERO")
}



// 7. Combina ambos operadores lógicos
if((num1 == 3 || num2 > 4) && (num1 > 1 || num2 == 9)){
console.log("VERDADERAS")
}


// 8. Utiliza el operador ternario
const bool = true

bool ? console.log("si") : console.log("no")



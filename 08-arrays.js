//INICIALIZACIÓN DE ARRAY CON DATOS
let array = ["elefante", "girafa", "perro", "gato", "mamut"]
console.log(array)

//AÑADIR AL FINAL UN VALOR
array.push("pingüino")

//AÑADIR AL PRINCIPIO UN VALOR
array.unshift("liebre")
console.log(array)

//DESGLOSAR LA PARTE DEL ARRAY EMPEZANDO POR SEGUNDA POSICIÓN Y COGIENDO 1 VALOR
array.splice(2, 1)
console.log(array)

//LOS SETS FUNCIONAN CON LA MISMA LÓGICA QUE LOS ARRAYS, NO PERMITEN VALORES DUPLICADOS
let mySet = new Set(["pilares", "cement_animales", "misery", "resplandor", "dr_sueño"]) //los sets siempre tienen los []
console.log(mySet)

//AL AÑADIR VALORES QUE YA ESTÁN, DIRECTAMENTE NO SE AÑADIRAN
mySet.add("pilares")
mySet.add("harry_pt")
console.log(mySet)

//BORRAMOS UN VALOR
mySet.delete("pilares")
console.log(mySet)

//LOS MAPAS SON IGUAL QUE EN JAVA, FUNCIONAN CON EL ESQUEMA DE CLAVE-VALOR
let mimapa = new Map([
  [1, "enero"],
  [2, "febrero"],
  [3, "marzo"],
  [4, "abril"],
  [5, "mayo"],
  [6, "junio"],
  [7, "julio"],
  [8, "agosto"],
  [9, "septiembre"],
  [10, "octubre"],
  [11, "noviembre"],
  [12, "diciembre"]
]);

//COMPROBAM0S QUE LA CLAVE 5 EXISTE
console.log(mimapa.has(5))

//AÑADIMOS EL ARRAY DE MESES DE VERANO AL MAP CON LA CLAVE mesesverano
let mesesverano = ["junio", "julio", "agosto"]
mimapa.set("mesesverano", mesesverano)
console.log(mimapa.get("mesesverano"))

let array3 = ["xiaomi", "samsung", "apple"]

//PASAMOS DE ARRAY A SET
let set3 = new Set(ultimoarray)


//PASAMOS DE SET A MAP INTRODUCIENDO COMO CLAVE phones
let mapp = new Map([["phones", set3]])
console.log(mapp.get("phones"))
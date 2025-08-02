//Creamos una clase llamada persona
//con un constructor que recibe nombre y edad
// y un método estático llamado caminar
class persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    //Para que el método caminar sea estático, lo definimos con la palabra static
    //Vemos que recibe el nombre como parámetro
    static caminar(nombre){
        console.log(`${nombre} está caminando.`);
    }
    saludar(){console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);}
    
}

//Creamos una instancia de la clase persona
let manolo = new persona("Manolo", 30);
console.log(manolo);
console.log(manolo.nombre);
console.log(manolo.edad);
manolo.saludar();
persona.caminar(manolo.nombre);


//Creamos una clase padre llamada Animal
class Animal {
    constructor(nombre){
        this.nombre = nombre
    }
    emitirSonido(){
        console.log(`El animal está emitiendo un sonido.`);
    }
}

//Creamos una clase hija llamada elefante que hereda de Animal
//Con super llamamos al constructor de la clase padre
//y le pasamos el nombre como parámetro
class elefante extends Animal{
    constructor(nombre, edad){
        super(nombre); // Llama al constructor de la clase padre Animal
        this.edad = edad;
    }
    emitirSonido(){
        console.log(`${this.nombre} está barritando.`);
    }
}

let elefante1 = new elefante("Dumbo", 10);
console.log(elefante1);
elefante1.emitirSonido(); // Llama al método de la clase hija

class perro extends Animal{
    // Propiedades privadas
    #nombre; 
    #edad; 
    constructor(nombre, edad){
        super(nombre)
        this.edad = edad
    }
  
    get nombrePerro(){
        return this.nombre
    }
    set nombrePerro(nombre2){
        this.nombre = nombre2 
    }

    get edadPerro(){
        return this.edad
    }
    set edadPerro(edad2){
        this.edad = edad2
    }


    aullar(){
        console.log(`${this.nombre} esta aullando`)
    }
}

//Creamos una instancia de la clase perro
let perro1 = new perro("Yoshi", 6)

console.log(perro1);

//En caso de que las propiedades estuvieran privadas y no hubiera getters y setters no podríamos acceder a ellas directamente
//Accedemos a las propiedades privadas a través de los getters y setters
console.log(perro1.nombrePerro);
console.log(perro1.edadPerro);

//Modificamos las propiedades privadas a través de los setters
perro1.nombrePerro = "Luna";
perro1.edadPerro = 4;

//Se accede a traves del nombre que tengan los getters y setters
console.log(perro1.nombrePerro);
console.log(perro1.edadPerro);



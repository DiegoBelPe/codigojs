
// Funcion constructora donde le asignamos los metodos al prototipo y no a la funcion👇
function Animal (nombre, raza) {
  // Atributos
  this.nombre = nombre,
  this.raza = raza;
  
}

// Metodos agregados al prototipo de la funcion
  Animal.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre} mi raza es  ${this.raza}`);
  }

// Herencia prototipica
function perro (nombre, raza, genero){
  this.super = Animal;
  this.super(nombre, raza);
  this.genero = genero;
}

// Perro heredando de Animal
perro.prototype= new Animal();
perro.prototype.constructor = perro;

// Sobreescritura de metodos de prototipo padre en el hijo

perro.prototype.saludar = function () {
  console.log("Soy un perro y me gusta ladrar")
}

perro.prototype.ladrar = function () {
  console.log("Guauuuuuu  Guauuuuuuu!!!");
}

// creando instancia
const Susy = new perro("Susy", "Perro", "Hembra");
// creando instancia
const Manchas = new Animal("Manchas", "Gato");

console.log(Susy);
console.log(Manchas);

Susy.saludar();
Susy.ladrar();
Manchas.saludar();
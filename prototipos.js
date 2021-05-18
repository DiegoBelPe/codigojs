// Programacion orientada a objetos POO
/*
Clases--> Modelo a seguir
Objetos --> Es una instancia de una clase 
Atributos--> es una caracteristica o propiedad del objeto (Son variables dentro de un objeto)
Metodos --> son las acciones que un objeto puede realizar(son funciones dentro de un objeto)
*/ 

// const personaje = {
//   nombre:"Goku",
//   Poder(){
//     console.log("super sayayin");
//   }
// }
// console.log(personaje);


// Funcion constructora

// function Guerreros (nombre, poder) {
//   // Atributos
//   this.nombre = nombre,
//   this.poder = poder;
//   // Metodos
//   this.Poder = function(){
//     console.log("super sayayin");
//   }
// }

// Funcion constructora donde le asignamos los metodos al prototipo y no a la funcion👇
function Guerreros (nombre, poder) {
  // Atributos
  this.nombre = nombre,
  this.poder = poder;
  
}

// Metodos agregados al prototipo de la funcion
  Guerreros.prototype.nivel= function(){
    console.log(`Hola ${this.nombre} su poder de pelea es ${this.poder}`);
  }

// creando instancia
const Goku = new Guerreros("Goku", "super sayayin 3");
// creando instancia
const Vegueta = new Guerreros("Vegeta", "sayayin 2");

console.log(Goku);
console.log(Vegueta);

Goku.nivel();
Vegueta.nivel();
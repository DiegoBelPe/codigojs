
// Funcion normal👇
// const saludar = function (params) {
//   console.log("saludar")
// }

// saludar();

// Arrow function con un solo parametro se le puede quita parentesis👇

const saludar =  nombre =>console.log(`Hello ${nombre}`);
saludar("Diego");

// Arrow function con un dos parametros es necesario dejar parentesis👇

const sumar = (a, b) => a + b;
console.log(sumar(3, 5));

 // Arrow function con varias lineas de codigo y debe llevar llaves👇

 const variosNumeros = () =>{
   console.log("uno");
   console.log("dos");
   console.log("tres");
 }

 variosNumeros();


 const numeros = [1, 2, 3, 4, 5];

 numeros.forEach((elem, index) =>console.log(`El elemento ${elem} esta en la posicion ${index}`));

 const gato = {
   nombre: "Thor",
   Mai() {
     console.log(this)
   }
 }

 gato.Mai();

//  tener en cuenta los metodos de los arreglos
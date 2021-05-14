// Parametro REST

function suma (a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n
  });

  return resultado;
}

console.log(suma(1, 2));
console.log(suma(1, 2, 3));
console.log(suma(1, 2, 10));
console.log(suma(1, 2, 10, 10));

// OPERADOR DE PROPAGACION

const arr1 = [1, 2, 3, 4, 5],
        arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);
//  poniendo los puntos suspensivos se logra unir dos dos arreglos en uno👇
const arr3 = [...arr1, ...arr2];
console.log(arr3);
/* no se recomienda */
/* const arreglo = new Array(100); */

const arreglo = [];
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);

/* para clonar el arreglo y agregar el nuevo numero */
let arreglo2 = [...arreglo];

const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
});
arreglo2.push(7);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

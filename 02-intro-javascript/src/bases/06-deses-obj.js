//Desestructuración
//asignación Desestructurante

/* link de documentación
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/

const persona = {
  nombre: "tony",
  edad: 45,
  clave: "Ironman",
};

/* se agrega : para renombrar la variable o constante */
/* const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave); */

/* console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave); */

const useContext = ({ clave, nombre, edad, rango = "Capitan" }) => {
  /* console.log(nombre, edad, rango); */

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.12312,
      lng: -12.45324,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = useContext(persona);

console.log(nombreClave, anios);
/* console.log(latlng); */
console.log(lat, lng);
/* const avenger = useContext(persona);
console.log(avenger);
 */

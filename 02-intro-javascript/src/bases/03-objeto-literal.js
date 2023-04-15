const persona = {
  nombre: "tony",
  apellido: "Stark",
  edad: 45,
  direction: {
    ciudad: "New York",
    zip: 1234,
    lat: 14.3232,
    lng: 34.968967,
  },
};


/* para crear un clon del objeto y poder manipular los parámetros */
const persona2 = {...persona};

persona2.nombre = "peter";
console.log(persona);

console.log(persona2);

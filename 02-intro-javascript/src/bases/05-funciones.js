//Funciones
/* no se recomienda usar de esta manera porque es fácil de renombrarla los valores */
/* function saludar(nombre) {
  return `hola, ${nombre}`;
} */

/* primera opción */
const saludar = function (nombre) {
  return `hola, ${nombre}`;
};

/* option recomendada */
const saludar2 = (nombre) => {
  return `hola, ${nombre}`;
};

const saludar3 = (nombre) => `hola, ${nombre}`;

/* saludar = 30; */

/* console.log(saludar("percy")); */

console.log(saludar2("percy"));
console.log(saludar3("Nina"));

//las () significa que esta regresando el objeto de manera implícita
const getUser1 = () => ({
  uid: "ABC123",
  username: "El_papi1401",
});

const getUser2 = () => {
  return {
    uid: "ABC123",
    username: "El_papi1401",
  };
};

const user = getUser1();

console.log(user);

console.log(getUser1());

//tarea

const userActive = (nombre) => ({
  uid: "ABC123",
  username: nombre,
});

const usuarioActivo = userActive("gringo");

console.log(usuarioActivo);

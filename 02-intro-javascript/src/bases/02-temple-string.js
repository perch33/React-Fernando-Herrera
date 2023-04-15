const nombre = "percy";
const apellido = "chuzon";

const nombreCompleto = `yo me llamo ${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return `hola me llamo ${nombre}`;
}

console.log(getSaludo(nombre));

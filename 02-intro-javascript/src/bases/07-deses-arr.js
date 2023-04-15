const personajes = ["Ironman", "hulk", "Thor"];

const [, p2] = personajes;

console.log(p2);

const returnArray = () => {
  return ["abc", 123];
};

const [letra, numero] = returnArray();
console.log(letra, numero);

//tarea

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("hola mundo");
    },
  ];
};

const arr = useState("percy");
console.log(arr);

const [nombre, setNombre] = useState();

console.log(nombre);
console.log(setNombre);

setNombre();

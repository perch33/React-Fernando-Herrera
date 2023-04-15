import { getHeroeById } from "./bases/08-import-exp";

/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("2 segundos después");
    // resolve();
    const heroe = getHeroeById(2);
    resolve(heroe);
    reject("no se pudo encontrar el heroe");
  }, 2000);
});

promesa
  .then((heroe) => { //si es true
    console.log("then de la promesa", heroe);
  })
  //si es false
  .catch((err) => console.warn(err)); */

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("no se pudo encontrar el heroe");
      }
    }, 2000);
  });
};

/* getHeroeByIdAsync(1)
  .then((heroe) => console.log("heroe", heroe))
  .catch((err) => console.warn(err)); */
getHeroeByIdAsync(1).then(console.log).catch(console.warn);

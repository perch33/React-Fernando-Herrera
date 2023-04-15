/* import { heroes } from "./data/heroes"; */

import { heroes, owners, percy } from "../data/heroes";

// console.log(owners, percy);

/* cuando no aparece esa información habrán y cierren los archivos */

/* primera forma */
/* const getHeroeById = (id) => {
  return heroes.find((hero) => {
    if (hero.id === id) {
      return true;
    } else {
      return false;
    }
  });
};
 */

/* forma recomendada - find() retorna el primer elemento coincidente del array */
export const getHeroeById = (id) => {
  return heroes.find((hero) => hero.id === id);
};

/* filter() retorna todos los elementos coincidente del array */
export const getHeroeByOwner = (owner) =>
  heroes.filter((hero) => hero.owner === owner);

// console.log(getHeroeById(2));

// console.log(getHeroeByOwner("DC"));

export default getHeroeById();

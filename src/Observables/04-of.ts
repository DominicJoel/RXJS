// Of: Nos permite crear observables en base a un listado de elementos de manera sincrona, el vuelve como observable todo lo que corre o está definido dentro de ().
import { of } from "rxjs";

//const obs$ = of<number>(1, 2, 3, 4, 5, 6); // Si concemos el tipo de valor que va a manejar es bueno siempre ponerle su tipo <number>
// const obs$ = of([1, 2, 3, 4, 5, 6]); //Si lo ponemos así solo retorna un observable porque solo tiene un argumento
// const obs$ = of(...[1, 2, 3, 4, 5, 6], 2, 6, 4, 7); //Si lo ponemos así solo retorna varios por el ()...) que lo recorre
const obs$ = of(
  [1, 2],
  { a: 1, b: 2 },
  function () {},
  true,
  Promise.resolve(true)
); // retorna como observable los argumentos que lleve

console.log("Inicio del Obs"); // Con esto probamos que es sincrono

obs$.subscribe(
  (next) => console.log("next", next), //next
  null, //error
  () => console.log("Terminamos la secuecia") //complete
);

console.log("Fin del Obs");

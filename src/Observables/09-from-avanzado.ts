import { of, from } from "rxjs";

/**
 * of =  toma argumentos y genera una secuencia
 * from = crea un observable en base a un arreglo, promise, iterable, observale etc.
 */

const observer = {
  next: (val) => console.log("next:", val),
  complete: () => console.log("complete"),
};

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator
const miGenerador = function* () {
  // Funcion generadora que lo que hace es que hace un interable, el (*) es lo indica que es generadora
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();

from(miIterable).subscribe(observer);

//const source$ = from([1, 2, 3, 4, 5]);
//const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = of("Dominic"); //Aparece mi nombre completo
//const source$ = from("Dominic"); //Aparece mi nombre completo letra por letra

const source$ = from(fetch("https://api.github.com/users/klerith")); //Enviando una promise

// Medidante el fetch
// source$.subscribe(async (resp) => {
//   //Lo ponemos async para indicar que es una promesa
//   console.log(resp);

//   const dataResp = await resp.json();
//   console.log(dataResp);
// });

source$.subscribe(observer);

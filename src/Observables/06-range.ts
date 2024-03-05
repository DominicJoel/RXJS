//Range nos crea un observable que emite una secuencia de números en base a un rango, es sincrono pero se puede convertir en asincrono

// Nota: Cualquier función de rxjs que reciba (asyncScheduler) se puede convertir en asycn.
import { asyncScheduler, of, range } from "rxjs";

// const src$ = of(1, 2, 3, 4, 5); //Aquí para disparar el observable el necesita que lo pongamos todos
// const src$ = range(5, 5); // Aquí uno solo indica el rango y el lo ejecuta, donde le ponemos la posición inicial al principio y al lado la cantidad de emisiones que queremos
const src$ = range(1, 5); // Aquí uno solo indica el rango y el lo ejecuta, donde le ponemos la posición inicial al principio y al lado la cantidad de emisiones que queremos
const srcAsync$ = range(1, 5, asyncScheduler); // Aquí le indicamos que sea async

console.log("Start");
srcAsync$.subscribe(console.log);
console.log("End");

console.log("Start");
src$.subscribe(console.log);
console.log("End");

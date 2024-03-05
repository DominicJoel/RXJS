// fromEvent: Nos permite crear observables en base a un event target de cierto tipo que provenga del event target

import { fromEvent } from "rxjs";

/**
 * Eventos del DOM (Document Object Model)
 */

// document representa en este caso el HTML
const src1$ = fromEvent<PointerEvent>(document, "click"); //Esto es un observable que lee cuando se da click al document
const src2$ = fromEvent<KeyboardEvent>(document, "keyup"); //Si lo tipamos se hace mas facil leer sus propiedades

const observer = {
  next: (val) => console.log("next", val),
};

// src1$.subscribe(observer);
src1$.subscribe(({ x, y }) => {
  // ({ }) :Destructuración, Esto es de emmaScript6 donde lo que pongamos dentro de ({ }) lo que estamos diciendo que de el objeto que recibe solo queremos esas propiedades en este caso de "PointerEvent"
  console.log(x, y);
});
src2$.subscribe((evento) => {
  console.log(evento.key);
});

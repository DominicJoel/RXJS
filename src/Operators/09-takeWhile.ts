// takeWhile: permite recibir valores mientras la condición no se cumpla

import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })), ///Desestructurizamos y lo retornamos como objeto
    // takeWhile(({ y }) => y <= 150) // Emite hasta que y sea menor o igual a 150
    // si le agregamos el (true) nos muestra el ultimo valor osea el que rompe antes de que se cumpla el takeWhile
    takeWhile(({ y }) => y <= 150, true) // Emite hasta que y sea menor o igual a 150
  )
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete"),
  });

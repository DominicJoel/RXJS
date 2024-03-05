// debounceTime nos ayuda a contar la milesima de segundo que pasó de la ultima emision y si sobrepasa lo que definimos en el parametro entonces emite el valor nuevo.

import { debounceTime, distinctUntilChanged, fromEvent, pluck } from "rxjs";

const click$ = fromEvent(document, "click");

click$
  .pipe(
    debounceTime(3000) // Esto es util cuando viene demasiados mensajes y queremos controlar la forma que viene
  )
  .subscribe(console.log);

//Ejemplo 2

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");

input$
  .pipe(
    debounceTime(1000), //Maneja el tiempo para disparar la emisión
    pluck("target", "value"), // Mapea al dato que queremos
    distinctUntilChanged() // Detecta la ultima palabra que no sea igual, si la anterior es distinto lo reconoce
  )
  .subscribe(console.log);

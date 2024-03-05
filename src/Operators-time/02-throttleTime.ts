// throttleTime , cuenta el tiempo que le ponemos en () y emite cada vez que se cumple el tiempo

import {
  throttleTime,
  distinctUntilChanged,
  fromEvent,
  pluck,
  asyncScheduler,
} from "rxjs";

const click$ = fromEvent(document, "click");

click$
  .pipe(
    throttleTime(3000) // Esto es util cuando viene demasiados mensajes y queremos controlar la forma que viene
  )
  .subscribe(console.log);

//Ejemplo 2

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");

input$
  .pipe(
    throttleTime(1000, asyncScheduler, {
      //El asyncScheduler y el tercer parametros nos ayuda a asegurarnos de tener la palabra completa una vez se ejecute el tiempo
      leading: true, // Para que nos retorne el primer elemento
      trailing: true, // Para que nos retorne el ultimo elemento
    }), //Maneja el tiempo para disparar la emisión
    pluck("target", "value"), // Mapea al dato que queremos
    distinctUntilChanged() // Detecta la ultima palabra que no sea igual, si la anterior es distinto lo reconoce
  )
  .subscribe(console.log);

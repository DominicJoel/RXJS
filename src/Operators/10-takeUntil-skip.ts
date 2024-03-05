// takeUntil: Recibe como argumento otro observable, este emite valor hasta que el segundo observable emita su primer valor
// skip: Permite omitir las cantidades de emisiones iniciales que le indicamos ej: skip(3), omite desde la primera emision hasta la 3 y emite la 4

import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

const boton = document.createElement("button");
boton.innerHTML = "Detener Timer";

document.querySelector("body").append(boton);

const counter$ = interval(1000);
///const clickBtn$ = fromEvent(boton, "click");

const clickBtn$ = fromEvent(boton, "click").pipe(
  // Cuando usamos operadores en cadena debemos tomar en cuenta que el respeta el orden
  tap(() => console.log("tap Antes de skip")),
  skip(1), //Toma en cuenta de segunda emisión en adelantes
  tap(() => console.log("tap Despues de skip"))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (val) => console.log("next:", val),
  complete: () => console.log("complete"),
});

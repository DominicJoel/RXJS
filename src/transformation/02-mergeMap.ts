import { mergeMap, of, interval, fromEvent } from "rxjs";
import { map, take, takeUntil } from "rxjs/operators";
// Merge map:  otra función de aplnamiento, recibe el valor emitido de nuestro observable inicial y retornar un nuevo observable, los de aplanamiento en vez de tener que subscribirnos lo que hace es que lo que retorna a tyraves de el es el producto de la subcripción interna.
// No tiene limites de subcripciones interna y todas pueden estar activas al mismo tiempo

const letras$ = of("a", "b", "c");

letras$.pipe(
  mergeMap(
    (letra) =>
      interval(1000) // Esto va a generar cada segundo una emisión costante de valores tres veces, porque tenemos tres valores
        .pipe(
          map((i) => letra + 1), // Con el map , mapeamos los valores
          take(3)
        ) // con el take solo lo hará tres veces
  )
);
// .subscribe({
//   next: (val) => console.log("next:", val),
//   complete: () => console.log("complete"),
// });

const mousedown$ = fromEvent(document, "mousedown");
const mouseup$ = fromEvent(document, "mouseup");
const interval$ = interval();

mousedown$
  .pipe(
    mergeMap(() =>
      interval$.pipe(
        takeUntil(mouseup$) //Va a emitir cuando el otro obsevable se dispare
      )
    )
  )
  .subscribe(console.log); //Recordar que como mergeMap es de aplanamiento la salida que tenemos no es un observable si no el producto de la subscripcion anterior

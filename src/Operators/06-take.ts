// Take Limitar la cantidad de emisiones que queremos tener, no se va a pasar del num que pongamos ejemplo take(5) solo hará 5 emisiones

import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5);

numbers$
  .pipe(
    tap((t) => console.log(t)), //Tap funciona para ver el flujo del observable ne este punto
    take(3) //take cantidad de emisiones
  )
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete"),
  });

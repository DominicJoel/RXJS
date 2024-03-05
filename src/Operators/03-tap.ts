// Tap nos permite disparar efectos secundarios, nos permite ver como va fluyendo la información y depurar el proceso y manejar con el error, complete , nexts

import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numeros$ = range(1, 5);

// numeros$
//   .pipe(
//     tap((x) => console.log("antes", x)), // Nos permite ver y manejar el flujo de la info
//     map((val) => val * 10),
//     tap((x) => console.log("despues", x))
//   )
//   .subscribe((val) => console.log("subs", val));

numeros$
  .pipe(
    tap((x) => console.log("antes", x)), // Nos permite ver y manejar el flujo de la info
    map((val) => val * 10),
    tap({
      // Los taps reciben y trabajan con oberver tambien (next, error, complete)
      next: (valor) => console.log("despues", valor), //Este se ejecuta cada vez que el tap recibe el siguiente valor
      complete: () => console.log("Se terminó todo"), //Este se ejecuta cuando el observable completo termine
    })
  )
  .subscribe((val) => console.log("subs", val));

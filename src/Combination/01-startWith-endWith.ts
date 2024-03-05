// startWith: Nos permite hacer una emisión antes de que el observable empiece a emitir aunque sea un valor sincronos eje startWith('a') e primer valor que va a emitir será 'a' y luego sigue el camino con los demas
// endWith : Hace lo opuesto es lo ultimo que va emitir antes de finalizar
import { startWith, of, endWith } from "rxjs";

const number$ = of(1, 2, 3).pipe(
  // startWith(0) //Inicia con el 0 y luego sigue con los demas
  startWith("a", "b", "c"), //Inicia con esto y luego sigue lo demas
  endWith("x", "y", "z") //termina con esto antes de terminar todo
);

number$.subscribe(console.log);

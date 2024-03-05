// concat recibe observables como argumentos pero tambien puede recibir iterables, cuando tenemos varios observables pero para que vaya uno a uno debe esperar que el anterior se complete de manera correcta, si no se completa no va al siguiente.

import { concat, interval, of, take } from "rxjs";

const interval$ = interval(1000);

concat(
  //El concat retorna un observable pero estamos subscribiendonos a el mismo
  interval$.pipe(take(3)), //Hasta que no termine este no pasa al siguiente observable
  interval$.pipe(take(2)),
  of(1) //A parte de observables tambien maneja iterables
).subscribe(console.log);

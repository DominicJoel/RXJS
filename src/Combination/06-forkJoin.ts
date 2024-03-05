// forkJoin puede recibir varios observables para trabajar y el resultado será cuando termine la emisión de todos los ultimos valores de los observables y será un arreglo con todos los valores de los observables
// OJO los obervables que estén dentro del forkjoin debe ser finitos de lo contrario nunca se van a ejecutar

import { delay, forkJoin, interval, of, take } from "rxjs";

const numbers$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3)); ////0..1..2
const letters$ = of("a", "b", "c").pipe(delay(3500));

// forkJoin(numbers$, interval$, letters$).subscribe(console.log);
forkJoin({ num: numbers$, int: interval$, let: letters$ }).subscribe((resp) => {
  console.log(resp);
});

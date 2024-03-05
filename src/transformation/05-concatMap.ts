import { interval, fromEvent } from "rxjs";
import { concatMap, switchMap, take } from "rxjs/operators";
//concatMap: Otro operador de aplanaiento que nos sirve para concatenar los observables resultantes que pueden fluir a traves de ese operador, así que lo concatena luego de que el observable anterior se ejecute
// Nota: Los operadores de aplanamiento desde que reciben algo automaticamente se subscriben a el

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");

click$.pipe(concatMap(() => interval$)).subscribe(console.log); //El concat map ejecuta uno a uno los observables, pero lo hace en cola, una vez termina uno pasa al otro

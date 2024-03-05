//exhaustMap: Otro operador de aplanaiento que nos sirve para que mientras exista una subcripcion interna vigente ignore la nueva
// Nota: Los operadores de aplanamiento desde que reciben algo automaticamente se subscriben a el

import { exhaustMap, fromEvent, interval } from "rxjs";
import { take } from "rxjs/operators";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");

click$.pipe(exhaustMap(() => interval$)).subscribe(console.log); //El exhaust map ejecuta un observable pero mientras la subcripcion siga vigente el va a ignorarlo

// Esto es bueno como para cuando manejamos un botón y la persona cliquea mucho, ignora la demas y seguira en el proceso vigente

// sample , Emite el ultimo valor emitido por el observable hasta que el otro observable que tengamos dentro del sample emita otro valor
//El sample depende de dos observables, el principal y uno secundario el principal irá trabajando pero solo emitirá cuando el segundo obsevable emita
import { fromEvent, map, sampleTime, interval, sample } from "rxjs";

const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, "click");

interval$.pipe(sample(click$)).subscribe(console.log);

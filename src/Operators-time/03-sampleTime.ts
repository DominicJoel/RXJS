// sampleTime , el ultimo valor emitido en un intervalo del tiempo, osea cuando se cumpla el tiempo que especificamos se emite lo ultimo que se ejecuta
import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    sampleTime(2000), //Cada dos segundo emitirá el ultimo valor
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);

// auditTime emite el ultimo valor que ha sido emitido por el observable en un periodo de tiempo
import { auditTime, fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x }) => x),
    tap((val) => console.log("tap", val)),
    auditTime(2000) //Despues de los dos segundo emite el ultimo valor
  )
  .subscribe(console.log);

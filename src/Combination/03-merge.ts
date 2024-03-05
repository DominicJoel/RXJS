// Merge recibe uno o mas observables y el resultado es la combinación de los observables, solo termina cuando todos los observables completen sus emisiones
import { fromEvent, merge } from "rxjs";

const keyUp$ = fromEvent(document, "keyup");
const clic$ = fromEvent(document, "click");

merge(keyUp$, clic$).subscribe(console.log); //Tomar dos o mas observable y emitirlos juntos y la salida es la combinanción de ambos

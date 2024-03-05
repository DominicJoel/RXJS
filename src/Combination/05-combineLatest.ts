// CombineLatest una función que nos permite mandar observables como argumentos, combinarlos y emitir todos los observables internos simultaneamente. Este retorna un nuevo observable que va a emitir valores hasta que todos los observables internos hayan emitido aunque sea un valor.
// Osea los valores van saliendo combinados todos en un solo, ña cominación de los ultimos observables

import { combineLatest, fromEvent, merge } from "rxjs";

const keyUp$ = fromEvent(document, "keyup");
const clic$ = fromEvent(document, "click");

// combineLatest(keyUp$, clic$).subscribe(console.log); //El debe tener al menos una emisión de cada uno y retorna el ultimo de cada uno

const input1 = document.createElement("input");
const input2 = document.createElement("input");

input1.placeholder = "email@gmail.com";

input2.placeholder = "*******";
input2.type = "password";

document.querySelector("body").append(input1, input2);

//Helper
const getInputStream = (
  elem: HTMLElement // Un helper que devuelve un observable
) => fromEvent<KeyboardEvent>(elem, "keyup");

combineLatest(getInputStream(input1), getInputStream(input2)).subscribe(
  //Devuelve cuando todos los observables han emitido a menos un valor y lo devolverá todos los ultimos valores emitidos juntos
  console.log
);

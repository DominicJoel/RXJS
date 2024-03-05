// Interval, emite una cantidad de emisiones infinitas pero tomando en cuando la duración que le ponemos en el interval es async
//* Nota: Por el momento como lo estamos haciendo ahora , aunque cancelemos la subscripcion el intervalo seguirá corriendo */

// Timer, Este lo que hace que despues de la cantidad que indiquemos se va a emitir el valor , pero despues emite dependiendo del valor que le pongamos .

import { interval, timer } from "rxjs";

const observer = {
  next: (val) => console.log("next:", val),
  complete: () => console.log("Completed"),
};

const todayIn5 = new Date(); // Ahora
todayIn5.setSeconds(todayIn5.getSeconds() + 5); //Aquí le sumamos a la hora actual 5 segundos

const interval$ = interval(1000); // Le estamos indicando que es de 1 segundo, es asincrono
// const timer$ = timer(2000); // Le estamos indicando que es de 2 segundo, es asincrono, como solo le indicamos un solo ell dueNumber el lo ejecuta cuando cumple el tiempo y lo termina
//const timer$ = timer(2000, 1000); // Le estamos indicando que es de 2 segundo, es asincrono, en este caso inicia despues de los 2 segundos y luego sigue ejecutando cada segundo
// const timer$ = timer(0); // Le estamos indicando que lo dispare de una vez
const timer$ = timer(todayIn5); // Podemos enviarle una fecha, o una hora y el ejecuta  la emisión.

console.log("start");
// interval$.subscribe(observer);
timer$.subscribe(observer); // En este caso como le colocamos el observer y tiene su complete, automaticamente se ejecute la primera vez, termina y llama e complete
console.log("end");

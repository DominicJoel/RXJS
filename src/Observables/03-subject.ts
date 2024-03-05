import { Observable, Observer, Subject } from "rxjs"; // Importar los observabless
/* Nota si viene directamente sin slash o entrando a un folder de rxjs sirve para crear o tipar usualmente */

/**
 * Compelete: Completa la emisión y no emite mas
 * Unsuscribe: Mata la instancia
 */

/**
 * Nota: Cuando la data es producida por el observable en sí mismo, es
 * considerado un "Cold Observable". Pero cuando la data es producidad FUERA del observable es llamado
 * "Hot Observable."
 *
 * Entonces el subject nos permite convertir un cold Observable en un Hot Observable
 */

const observer: Observer<any> = {
  //Este Observer nos funciona para subscribirnos
  next: (value) => console.log("Siguiente:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("Completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalId = setInterval(() => subs.next(Math.random()), 1000); // Emite numeros aleatorios

  return () => clearInterval(intervalId);
});

/**
 *  ------ Subject ------
 * 1- Casteo multiple, muchas subscripciones pueden estar sujetas a ese mismo subject y sirve para distribuir info en todos los lugares que esté subscrito
 * 2- Es un Observer tambien
 * 3- Se puede manejar el next, error y complete
 */
const subject$ = new Subject(); //Subject es un tipo especial de observable
const subscription = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe((rnd) => console.log("subs1 : ", rnd));
// const subs2 = intervalo$.subscribe((rnd) => console.log("subs2 : ", rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10); // Permite hacer esto porque el (Subject) es un observer

  subject$.complete(); // Permite hacer esto, porque cuando se manda dentro del observable se conoce como un subscriber

  subscription.unsubscribe();
}, 3500);

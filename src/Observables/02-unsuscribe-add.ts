/* Nota: Cada vez que nos subcribimos creamos una nueva instancia y todo lo que está en el susbcribe se comienza a emitir */

/*Nota: Complete y unsuscribe no es lo mismo debemos tener en cuenta esto*/

/* Cada vez que usamos un interval debemos usar el clear interval para reducir la fuga de memoria */

import { Observable, Observer } from "rxjs"; // Importar los observabless

const observer: Observer<any> = {
  //Este Observer nos funciona para subscribirnos
  next: (value) => console.log("Siguiente:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("Completado"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  //Crear un contador , 1,2,3,4,5, ........

  let count = 0;
  const interval = setInterval(() => {
    //Cuando se crea un intervalo el unsubscribe no lo mata hay que usar el clear INTERVAL ES IMPORTANTE PORQUE SINO PODEMOS TENER UNA FUGA DE MEMORIA, YA QUE SIGUE CORRIENDO
    // Cada segundo interviene
    count++;
    subscriber.next(count); //Emitimos un evento en este caso un numero
  }, 1000);

  return () => {
    //Esto se llama cuando nos desuscribimos
    clearInterval(interval); // Para limpiar el intervalo
    console.log("Intervalo destruido");
  };
});

//const subs = intervalo$.subscribe((num) => console.log("Num: ", num)); // En subs almacenamos la subscripcion
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

//subs1.add(subs2).add(subs3); //Esto ayuda a desuscribir en cadena

setTimeout(() => {
  subs1.unsubscribe(); //Nos permite dessubscribirnos
  subs2.unsubscribe(); //Nos permite dessubscribirnos
  subs3.unsubscribe(); //Nos permite dessubscribirnos

  console.log(" completado timeout");
}, 3000);

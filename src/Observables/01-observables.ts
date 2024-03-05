import { Observable, Observer } from "rxjs"; // Importar los observabless

const observer: Observer<any> = {
  //Este Observer nos funciona para subscribirnos
  next: (value) => console.log("Siguiente [next]:", value),
  error: (error) => console.warn("error [obs]:", error),
  complete: () => console.info("Completado [obs]"),
};
// const obs$ = Observable.create(); //Es una forma de crear pero casi no se usa

const obs$ = new Observable<string>((subs) => {
  // Es recomendable tipar el Observable <type>
  subs.next("Hola"); // Emitimos un cambio
  subs.next("Mundo"); // Emitimos un cambio

  //Forzar un error
  // const a = undefined;
  // a.nombre = "Dominic";

  subs.next("Hola"); // Emitimos un cambio
  subs.next("Mundo"); // Emitimos un cambio

  subs.complete(); // Indicamos que se completo lo que no permitira que tenga mas salidas, osea ya no se emitira nada mas
}); /* $ Es un estandar para los observables, con esto creamos un Observable,
 dentro ponemos un subscritor para que esté pendiente de los cambios */

//*------------------------------- Formas de subscribirse ------------------------------*/
// # 1 - de subscribirnos
// obs$.subscribe(resp => console.log(resp)); // Nos suscribimos al observable
obs$.subscribe(
  console.log
); /* Otra forma de hacer exactamente lo que está arriba es esta ya que tenemos el valor esto lo permite emmascipt 6         
                               Para que un observable se ejecute debe tener una subscripcion*/
//# 2 - de subscribirnos
obs$.subscribe(
  //De esta forma mandamos argumentos al subscribe, (valor, error y el callBack indicando que se completó)
  (value) => console.log("Next: ", value),
  (error) => console.warn("Next: ", error), // Los errores deben ocurrir antes del complete de lo contrario no lo detecta
  () => console.info("Completado")
);

// # 3 - de subscribirnos

obs$.subscribe(observer);

// reduce : Esto lo que hace es, que ejecuta el total de la acumulación y Solo tenemos emision cuando se completa el observable

import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

// Reduce en JS
const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
};

const total = numbers.reduce(totalReducer, 0); //El 0 es el valor inicial, LO QUE HACE es que ejecuta lo hay en el total reducer la cantidad de veces de obetos que tiene el arreglo y retorna lo acumulado

console.log("total arr", total);

// RXJS
interval(500)
  .pipe(
    take(6), // Completa el observable despues de la cantidad de veces que se especifica aquí
    tap(console.log), //Para ver como va el flujo
    reduce(totalReducer, 0) //Le enviamos la definición de la función si le ponemos los () se ejecuta
  )
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete"),
  });

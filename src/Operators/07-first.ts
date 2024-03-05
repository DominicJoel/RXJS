// first, si lo dejamos solo first() toma el primer valor y se completa, pero podemos ponerle condición que se ejectute solo si cumple con lo requerido

import { fromEvent } from "rxjs";
import { first, map, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    tap(() => console.log("tap")),
    // Cuando vamos a trabajar con variables que estamos seguro de lo que es , lo mejopr es tiparlo
    first<MouseEvent>((event) => event.clientY >= 150) // Cuando le ponemos valor a la función esta se ejecuta una vez cumpla con los requerimientos y ya
    //first() // Se dispara la primera vez y no se vuelve a disparar, esto ocurre si no le enviamos nada
  )
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete"),
  });

click$
  .pipe(
    tap<MouseEvent>(() => console.log("tap")),
    // map((event) => ({
    //   clientY: event.clientY,
    //   clientX: event.clientX,
    // }))
    map(({ clientX, clientY }) => ({ clientY, clientX })) // Otra forma de mapear es desestructurizando los datos, es el mismo efecto que el de arriba

    // Cuando vamos a trabajar con variables que estamos seguro de lo que es , lo mejopr es tiparlo
    //  first<MouseEvent>((event) => event.clientY >= 150) // Cuando le ponemos valor a la función esta se ejecuta una vez cumpla con los requerimientos y ya
    //first() // Se dispara la primera vez y no se vuelve a disparar, esto ocurre si no le enviamos nada
  )
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete"),
  });

// distinctUntilChanged solo deja pasar los valores que el anterior no sea el mismo que el siguiente eje 1,2,1 = ahí pasa, 1,2,2 aquí no pasa el ultimo dos porque el anterior fue igual NOTA: DEBE SER el mismo tipo y mismo valor
import { of, from } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";

const numbers$ = of(1, "1", 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numbers$
  .pipe(
    distinctUntilChanged() // Solo emite los valores  que el anterior no sea el mismo que el siguiente eje 1,2,1 = ahí pasa, 1,2,2 aquí no pasa el ultimo dos porque el anterior fue igual NOTA: DEBE SER el mismo tipo y mismo valor
  )
  .subscribe(console.log);

interface Personajes {
  nombre: string;
}

const personajes: Personajes[] = [
  {
    nombre: "Megaman",
  },
  {
    nombre: "Megaman",
  },
  {
    nombre: "Thanos",
  },
  {
    nombre: "Wolverine",
  },
  {
    nombre: "Batman",
  },
  {
    nombre: "Wolverine",
  },
  {
    nombre: "X",
  },
  {
    nombre: "X",
  },
];

from(personajes)
  .pipe(distinctUntilChanged((ant, act) => ant.nombre === act.nombre)) //Para poder distinguir si aplica
  .subscribe(console.log);

// NOTA: Los valores primitivos como boolean, number etc, son valores directo que el distinct y distinctUntilChanged no hay que especificar ,
//sin embargo lo que es diferente como guarda en lugares diferentes de memoria  hay que darle a entender como diferenciarlo

// distinct solo deja pasar los valores que no fueron emitidos previamente, si se repiten lo bloquea

import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

const numbers$ = of(1, "1", 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numbers$
  .pipe(
    distinct() // Solo emite los valores que son diferentes, el toma en cuenta el tipo de valor ej no es lo mismo 1 que '1'
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
    nombre: "X",
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
    nombre: "Megaman",
  },
];

from(personajes)
  .pipe(
    // distinct() //Si lo dejamos así lo trae todos ya que no es lo mismo por donde apunta en memoria y eso
    distinct((p) => p.nombre) //Le damos mas info para que sepa identificar de manera mas clara lo que queremos que el  distinct afecte
  )
  .subscribe(console.log);

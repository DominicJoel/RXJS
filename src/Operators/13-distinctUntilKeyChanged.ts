// distinctUntilKeyChanged emite los que tienen el key del valor anterior distinto
import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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
  .pipe(distinctUntilKeyChanged("nombre")) //Para poder distinguir si aplica, tomando en cuenta el key del objeto, 'nombre' es el key de la inerfaz personaje
  .subscribe(console.log);

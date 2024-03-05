// scan: es igual que reduce que va a acumulando, la diferencia es que va disparando de una vez
import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

// const totalAcumulador = (acumulador: number, valorActual: number) => {
//     return acumulador + valorActual;
//   };

const totalAcumulador = (acumulador: number, valorActual: number) =>
  acumulador + valorActual;

// Reduce

from(numbers).pipe(reduce(totalAcumulador, 0)).subscribe(console.log); //El reduce tiene una sola emision con el total acumulado

// Scan

from(numbers).pipe(scan(totalAcumulador, 0)).subscribe(console.log); //El reduce tiene una sola emision con el total acumulado

// Redux, ejemplo de como funciona
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  { id: "Joel", autenticado: false, token: null },
  { id: "Joel", autenticado: true, token: "ABC" },
  { id: "Joel", autenticado: true, token: "abc123" },
];

const state$ = from(user).pipe(
  scan<Usuario, Usuario>(
    (acc, cur) => {
      return { ...acc, ...cur }; // Desestructuramo y  vemos el acumulado
    },
    { edad: 33 }
  )
);

const id$ = state$.pipe(map((state) => state.id));

id$.subscribe(console.log);

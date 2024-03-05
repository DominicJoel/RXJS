// Filtrar las emiciones del observable, solo saldrá lo que aplique al filtro

// predicate o predicado es una función que recibe un numero y su index
import { range, from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

// range(1, 10)
//   .pipe(filter((val) => val % 2 === 1)) // Con este filter solo van a cruzar los que sean impar, usualmente con los filter debemos usar una condición que retorne true or false
//   .subscribe(console.log);

range(1, 10)
  .pipe(
    filter((val, i) => {
      // Cuando le agregamos un segundo valor en este caso (i) estamos indicando que trabajaremos con el index
      console.log("index", i);

      return val % 2 === 1;
    })
  ) // Con este filter solo van a cruzar los que sean impar, usualmente con los filter debemos usar una condición que retorne true or false
  .subscribe(console.log);

interface personaje {
  tipo: string;
  nombre: string;
}

const personsajes: personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Flash",
  },
  {
    tipo: "Villano",
    nombre: "Joker",
  },
];

const source$ = from(personsajes);

source$.pipe(filter((val) => val.tipo === "heroe")).subscribe(console.log);

// Encadenamiento de operadores, es importante tomar en cuenta que el orden en el que colocamos los operadores es importante //

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((evet) => evet.code), //Cuando nos colocamos encima del operador o del observable<type1, type2> el primero es lo que recibe y lo segundo lo que devuelve
  filter((key) => key === "Enter") // Cuando trabajamos operadores en cadena el siguiente trabaja en base al resultado de los anteriores
);

keyup$.subscribe(console.log);

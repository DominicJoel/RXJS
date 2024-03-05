//Operadores: Nos funcionan para manejar la información a nuestra necesidad, así que ayuda a depurar o transformar la data que viene por el observable

// Map nos permite transformar los datos, extraer info o transformarla, trabaja con cualquier tipo de dato que emita y puede retornar cualquier tipo de dato
// Pipe es una tubería que por si sola no hace nada, pero con la ayuda de los operadores tranforma la data
// pluck: extrae el valor de un objeto y lo emite ejemplo { v:1} si esto es lo que recibe el toma el valor de v y lo retorna en este caso (1)
// mapTo: Permite transformar la entrada en una salida especifica ej: mapTo('a') y si la entrada es 1 la salida será a, no importa la entrada ni el tipo la salida será la que definamos.

import { range, fromEvent } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

range(1, 5)
  .pipe(
    // Pipe es una tubería que por si sola no hace nada, pero con la ayuda de los operadores tranforma la data
    map<number, number>((val) => val * 10) //si lo manejo por función normal dentro de los {} debo indicar el return del valor, es recomendable manejar el tipado <type1,type2> e primero es lo que recibe y el segundo lo que devuelve
  )
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup"); //Observable

const keyupcode$ = keyup$.pipe(
  map((event) => event.code) // De todo lo que retorna KeyboardEvent con el map solo retornamos lo que queremos que en este caso es el code
);

const keyupPluck$ = keyup$.pipe(
  pluck("key") //Aquí ponemos la propiedad del objeto que queremos manejar
);

const keyupTwoPluck$ = keyup$.pipe(
  pluck("target", "baseURI") //Si es un objeto que está dentro de otro objeto, con la (,) es suficiente para indetificar
);

const keyupMapTo$ = keyup$.pipe(
  mapTo("tecla presionada") // No importa la entrada, la salida siempre será esta, la salida puede ser, string, number, object, arrays
);

keyup$.subscribe(console.log);
keyupcode$.subscribe((val) => console.log("map", val));
keyupPluck$.subscribe((val) => console.log("pluck", val));
keyupTwoPluck$.subscribe((val) => console.log("pluck 2", val));
keyupMapTo$.subscribe((val) => console.log("mapTo", val));

//** Nota: Los operadores van a ir recibiendo el valor que emite el anterior , ejemplo si usamos un map y luego otro operador con función de flecha, el valor será lo que el ultimo dejó  */

// https://rxjs-dev.firebaseapp.com/api/operators/mapTo

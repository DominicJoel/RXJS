// MergeAll() sirve para trabajar con observables que retornan otro observable, está al tanto de todas las subcripsiones y de todos los observables y va emitiendo un valor sin importar cual fue que emitió hasta que todos se completen

import {
  fromEvent,
  debounceTime,
  map,
  pluck,
  mergeAll,
  Observable,
} from "rxjs";
import { ajax } from "rxjs/ajax";
import { GitHubUser } from "../interfaces/github-user.interface";
import { GitHubUsers } from "../interfaces/github-users.interface";
// Referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

// input$
//   .pipe(
//     debounceTime<KeyboardEvent>(500), // <T> tipando los operadores
//     pluck('target', 'value'),// pluck deprecated
//     map(
//       (texto) => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`) // Con el map de los valores que obtenemos cada cierto tiempo hacemos una request
//     ),
//     mergeAll(), //Se va subscribir a todas las emisiones y retornará esos valores
//     pluck("items") //A lo que el mergeAll retorne el extraerá los items que le indicamos
//   )
//   .subscribe(console.log);

input$
  .pipe(
    debounceTime<KeyboardEvent>(500), // <T> tipando los operadores
    map<KeyboardEvent, string>(
      (event) => (event.target as HTMLInputElement).value
    ),
    map<string, Observable<GitHubUsers>>((text) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
    ),
    mergeAll<Observable<GitHubUsers>>(), //Se va subscribir a todas las emisiones y retornará esos valores
    map<GitHubUsers, GitHubUser[]>((item) => item.items) //A lo que el mergeAll retorne el extraerá los items que le indicamos
  )
  .subscribe((users) => {
    console.log("users", users);
  });

// Tipar los operadores, es importante tipar al menos el principio y final
// Ya que es bueno saber lo que entra y sale, lo que pasa en el transcurso no es tan importante
// Si queremos tipar todo de manera extricta sería bueno hacerlo cuando esté completo y listo para prod, en la practica no es muy recomendable porque se nos complica si hay que mover o cambiar

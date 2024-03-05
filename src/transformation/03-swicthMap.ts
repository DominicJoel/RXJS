// switch map:  otra función de aplnamiento,  recibe un callback que retorna un obsevable se parece al merge map, pero el sitch map solo va mantener un obsevable activo y subrcrito y cancela la petición anterior
// No tiene limites de subcripciones interna y todas pueden estar activas al mismo tiempo

import {
  fromEvent,
  debounceTime,
  map,
  Observable,
  mergeMap,
  switchMap,
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

input$
  .pipe(
    debounceTime<KeyboardEvent>(500), // <T> tipando los operadores
    map<KeyboardEvent, string>(
      (event) => (event.target as HTMLInputElement).value
    ),
    mergeMap<string, Observable<GitHubUsers>>((text) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
    ),
    map<GitHubUsers, GitHubUser[]>((item) => item.items) //A lo que el mergeAll retorne el extraerá los items que le indicamos
  )
  .subscribe((users) => {
    console.log("users", users);
  });

const url = "https://httpbin.org/delay/1?arg=";

input$
  .pipe(
    map<KeyboardEvent, string>(
      (event) => (event.target as HTMLInputElement).value
    ),
    switchMap((texto) => ajax.getJSON(url + texto)) //A diferencia del merge map este cancela todas las peticiones anteriores y solo deja la ultima
  )
  .subscribe(console.log);

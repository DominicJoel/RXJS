// forkJoin puede recibir varios observables para trabajar y el resultado será cuando termine la emisión de todos los ultimos valores de los observables y será un arreglo con todos los valores de los observables
// OJO los obervables que estén dentro del forkjoin debe ser finitos de lo contrario nunca se van a ejecutar

import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const GITHUB_API_URL = "https://api.github.com/users";
const Git_Hub_User = "DominicJoel";

forkJoin({
  usuario: ajax.getJSON(`${GITHUB_API_URL}/${Git_Hub_User}`),
  repos: ajax
    .getJSON(`${GITHUB_API_URL}/${Git_Hub_User}/repos`)
    .pipe(catchError((err) => of([]))), //Si queremos manejar el error
  gists: ajax.getJSON(`${GITHUB_API_URL}/${Git_Hub_User}/gists`),
})
  .pipe(catchError((err) => of(err.message))) //Para manejar el error
  .subscribe(console.log); //Hace las tres peticiones de manera simultanea y cuando termina nos arroja el resultado

// catchError no solo sirve para atrapar errores en el http sino para atrapar cualquier tipo de error que ocurra en el observable
//El catchError debe retornar un error o un observable

import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map, pluck } from "rxjs/operators";

const url = "https://api.github/userxxxxs?per_page=5";
const handleError = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText); //Para que se dispare el catch en un fetch de promesa hay que hacer un throw
  }
  return response;
};

const atrapaError = (err: AjaxError) => {
  //Trae la info de error (AjaxError)
  console.warn("error en:", err);
  return of([]); //Debe retornar algo el catch error, puedo retonar un (observable of()) o datos vacios
};

// const fetchPromesa = fetch(url); // Los fetch manejan promesa

// fetchPromesa
//   .then((resp) => resp.json()) // Cuando la promesa es correcta
//   .then((data) => console.log("data:", data))
//   .catch((err) => console.warn("error en usuarios", err));

// fetchPromesa
//   .then(handleError) // De esta forma se maneja el error, porque así se dipara el catch
//   .then((resp) => resp.json()) // Cuando la promesa es correcta
//   .then((data) => console.log("data:", data)) //Cadena de promesa
//   .catch((err) => console.warn("error en usuarios", err));

//Ajax

ajax(url)
  .pipe(pluck("response"), catchError(atrapaError))
  .subscribe((users) => console.log("usuarios:", users));

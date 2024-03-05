// MergeMap vs switchMap vs exhaustMap

import { fromEvent, mergeMap, of, switchMap, exhaustMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, map, tap } from "rxjs/operators";

//Helper
const httpLoginRequest = (userPass) =>
  ajax.post("https://reqres.in/api/login?delay=1", userPass).pipe(
    map((data: any) => data.response.token),
    catchError((err) => of("xxx")) // Es bueno manjar el error para que no rompa la aplicación
  );

//Create form
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const submitBtn = document.createElement("button");

//Configurations
inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "Password";
inputPass.value = "cityslicka";

submitBtn.innerHTML = "Login";

form.append(inputEmail, inputPass, submitBtn);
document.querySelector("body").append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, "submit").pipe(
  tap((ev) => ev.preventDefault()),
  map((ev) => ({
    email: ev.target[0].value,
    password: ev.target[1].value,
  })),
  //mergeMap(httpLoginRequest)  // MergeMap puede tener cualquier cantidad de subcripciones interna así que si le damos a submit 5 veces lo va a ejecutar 5 veces
  // switchMap(httpLoginRequest)  // switchMap cancela cualquier otra subcriopcion y solo devuelve la ultima si le damos 5 veces rapidos al submit cancela las primeras 4 y devuelve la ultima
  exhaustMap(httpLoginRequest) // exhaustMap cancela cualquier otra subcriopcion y solo ejecuta la primera hasta que la primera no se complete no va a ejecutar otra
  //como ponemos la función si parentesis httpLoginRequest() lo que le llegue al mergeMap es lo que mandará a la función
);

submitForm$.subscribe((token) => {
  console.log(token);
});

import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const url = "https://httpbinxxxx.org/delay/1";
const atrapaError = (err: AjaxError) => {
  //Trae la info de error (AjaxError)
  console.warn("error en:", err.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

// Diferencia entre  getJSON y ajax
// const obs$ = ajax.getJSON(url).pipe(catchError(atrapaError));
// const obs2$ = ajax(url).pipe(catchError(atrapaError));

const obs$ = ajax.getJSON(url).pipe(catchError(atrapaError)); //Como maneja el error y devuelve un observable se ejecuta el complete
const obs2$ = ajax(url);

obs$.subscribe({
  next: (val) => console.log("next:", val),
  error: (err) => console.warn("error:", err),
  complete: () => console.log("cmplete"),
});
//obs2$.subscribe((data) => console.log("ajaxs:", data));

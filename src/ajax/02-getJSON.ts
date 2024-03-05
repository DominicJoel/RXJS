import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

const obs$ = ajax.getJSON(url, {
  //Esto es los headers
  "Content-Type": "application/json",
  "mi-token": "ABC123",
}); //getJSON lo retorna en formato json

obs$.subscribe((data) => console.log("data:", data));

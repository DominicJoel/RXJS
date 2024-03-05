import { startWith } from "rxjs";
import { ajax } from "rxjs/ajax";

// Referencias
const loadinDiv = document.createElement("div");
loadinDiv.classList.add("loading");
loadinDiv.innerHTML = "Cargando....";

const body = document.querySelector("body");

//stream

ajax
  .getJSON("https://reqres.in/api/users/2?delay=3")
  .pipe(
    startWith(true) // Una vez que inicia lo primero que inicia es con el true
  )
  .subscribe((resp) => {
    if (resp == true) {
      body.append(loadinDiv);
    } else {
      document.querySelector(".loading").remove(); // Cualquier elemento que tenga esa clase que se lo quite
    }
    console.log(resp);
  });

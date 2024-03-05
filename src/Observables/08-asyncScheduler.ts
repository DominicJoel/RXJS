// El ayncScheduler no crea un observable, crea una subscribción
// Una subscribcion es el producto de un subscriber

import { asyncScheduler } from "rxjs";

// basicamente estas dos instrucciones que están debajos es lo que vamos a realizar con el asyncScheduler
// Ademas podremos manejar nuestra subscripción, como cualquier otra en rxjs
//setTimeout(() => {}, 3000);
//setInterval(() => {}, 3000);

const saludar = () => console.log("Hello World");
const greet = (name) => console.log(`Hola ${name}`);

// mandamos saludar sin parentesis porque lo que queremos es mandar la referencia y no que lo implemente en el momento
//asyncScheduler.schedule(saludar, 2000); //Aquí está trabajando como setTimeout

// Si la fucnión recibe valores lo mandamos como el tercer parametro que es el state que podemos mandarlo como unico o como objeto
//asyncScheduler.schedule(greet, 2000, "Dominic");//Aquí está trabajando como setTimeout

// Aquí hará el papel de setInterval , en ese caso no recibe un lambda sino mas bien una funcion
const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state", state);

    this.schedule(state + 1, 1000); //Esto es lo que hace que funcione como interval
  },
  3000,
  0
); //Igual el tercer valor es el state puede ser un valor o un objeto, o arreglo, o instancia

// setTimeout(() => {  //Para destruir el setInterval
//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000); //Para destruir el setInterval

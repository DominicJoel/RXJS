import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

ajax.get(url, {}); // get(url, headers)
ajax
  .post(
    url,
    {
      id: 1,
      name: "Dominic",
    },
    {
      "mit-token": "12035",
    }
  )
  .subscribe(console.log); // post(url, body, headers)
ajax
  .put(
    url,
    {
      id: 1,
      name: "Dominic",
    },
    {
      "mit-token": "12035",
    }
  )
  .subscribe(console.log); // put(url, body, headers)

//oTRA FORMA DE USAR AJAX mas dinamico
ajax({
  url: url,
  method: "POST",
  headers: { "mit-token": "12035" },
  body: {
    id: 1,
    name: "Dominic",
  },
}).subscribe(console.log);

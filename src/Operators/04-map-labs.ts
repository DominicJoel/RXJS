import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const text = document.createElement("div");

text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl dignissim, aliquet leo nec, accumsan arcu. Nulla consectetur lobortis nisi sit amet lobortis. Fusce urna neque, consectetur placerat tellus sed, lacinia viverra lectus. Mauris non erat dignissim, feugiat erat quis, efficitur mi. Nunc ac euismod ipsum. Sed vel neque eros. Curabitur sem ex, pharetra suscipit venenatis eu, sagittis et tellus. Sed non ipsum maximus, tincidunt sem ac, sagittis velit.
<br/><br/>
Suspendisse feugiat orci nulla, eget efficitur dui ullamcorper in. Morbi ut mattis eros, id interdum velit. Fusce rhoncus orci vel elit mollis, vel viverra est cursus. Fusce sodales, risus vitae pulvinar condimentum, augue nulla rutrum neque, eu feugiat ante justo vitae justo. Nullam posuere elementum purus et rutrum. Mauris fermentum diam non lectus euismod sagittis. Nunc pharetra nunc nulla, ac vulputate purus consectetur quis. Praesent pharetra enim non finibus auctor. Phasellus dictum dignissim lacus faucibus varius. Mauris venenatis mollis purus, eu hendrerit ipsum finibus nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin quis posuere arcu, eu consequat diam. Suspendisse imperdiet ornare condimentum.
<br/><br/>
Nunc vestibulum urna luctus ultrices gravida. Etiam eros justo, tempus vitae fringilla vel, tristique eget odio. Praesent in nisi ut ante dignissim rhoncus. Phasellus ut lorem quis risus ornare lacinia. Praesent in scelerisque ex. Cras et ex quis nibh semper pellentesque ut sed libero. Cras a nunc eu nisl tempus ullamcorper sit amet vel nisl. Phasellus gravida nisi at sodales congue. Nullam quis sollicitudin turpis. Sed justo nisi, rutrum a venenatis in, ultricies quis mi. Nam convallis quis justo a mattis. Integer lacinia metus nec tellus aliquam, vel ultrices eros maximus. Donec neque est, pulvinar malesuada elementum nec, scelerisque eget erat. Aenean ultrices pulvinar molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam posuere vulputate velit, a consectetur ante ultrices eu.
<br/><br/>
Praesent et nulla et neque porttitor scelerisque ut ut massa. Nulla nunc neque, lobortis sed ipsum vitae, sagittis sodales sem. In erat orci, volutpat ac lacus a, laoreet aliquam tellus. Curabitur placerat, orci at rutrum elementum, justo augue ultrices arcu, vitae mattis neque leo id mauris. Nunc facilisis, tellus id pretium gravida, elit diam dapibus lorem, in consectetur nisi ex id erat. Nunc et scelerisque nulla. Praesent tristique volutpat turpis, eget auctor ligula congue a. Donec a egestas est. Cras sapien velit, rhoncus ut congue vel, consequat at augue. Donec semper venenatis purus. Etiam lobortis rhoncus leo non placerat. Praesent eu dolor in turpis venenatis viverra. Nullam interdum dolor a tellus tristique, dapibus convallis nunc eleifend. Curabitur ac imperdiet metus. Aliquam nec ipsum ex. Sed tincidunt nisl nibh, eget condimentum mauris porta id.
<br/><br/>
Vestibulum at mi felis. Quisque sit amet felis felis. Donec id erat vitae elit aliquet rhoncus eget non ipsum. Quisque tincidunt, nibh quis euismod pulvinar, tellus sem consequat urna, sit amet viverra diam magna rhoncus dui. Quisque aliquam nulla ac nulla condimentum, eget tincidunt neque pellentesque. Etiam mi arcu, suscipit vel velit sed, ultrices rutrum dui. Aliquam erat libero, porttitor in facilisis imperdiet, faucibus nec ex. Maecenas eu purus at risus mattis commodo. Duis vel congue nisi, sit amet sollicitudin neque.
`;

const body = document.querySelector("body");
body.append(text);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");

body.append(progressBar);

// Función que haga el calculo

const calcularPorcentajeScroll = (event) => {
  const {
    //Destructuración
    scrollTop,
    scrollHeight,
    clientHeight,
  } = event.target.documentElement;
  console.log(scrollTop, scrollHeight, clientHeight);

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

//Streams
const scroll$ = fromEvent<Event>(document, "scroll");

const progress$ = scroll$.pipe(
  map((event) => calcularPorcentajeScroll(event)),
  tap(console.log)
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});

//scroll$.subscribe(console.log);

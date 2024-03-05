//Switch map vs merge map

import { fromEvent, interval, mergeMap, switchMap } from "rxjs";
const click$ = fromEvent(document, "click");
const interva$ = interval(1000);

click$
  .pipe(
    // mergeMap(() => interva$) //Los subcribers anteriores nunca mueren
    switchMap(() => interva$) //Los subcribers anteriores mueren
  )
  .subscribe(console.log);

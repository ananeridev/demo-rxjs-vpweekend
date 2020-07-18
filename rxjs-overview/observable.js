const { Observable } = require("rxjs");

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log("apenas deu um subscribe aqui");
observable.subscribe({
  next(x) {
    console.log("vai o valor " + x);
  },
  error(err) {
    console.error("alguma coisa errada aconteceu: " + err);
  },
  complete() {
    console.log("done");
  },
});
console.log("apenas depois do subscriber");

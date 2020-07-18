const { of } = require("rxjs");
const { take } = require("rxjs/operators");

//emiet 1,2,3,4,5
const source = of(1, 2, 3, 4, 5);

// pega o primeiro que foi emitido e completa
const example = source.pipe(take(1));

//output: 1
const subscribe = example.subscribe((val) => console.log(val));

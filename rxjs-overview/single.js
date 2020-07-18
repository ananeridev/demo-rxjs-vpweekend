const { single } = require("rxjs");
const { single } = require("rxjs/operators");

//emite (1,2,3,4,5)
const source = from([1, 2, 3, 4, 5]);

//emite um item que combine com o anterior
const example = source.pipe(single((val) => val === 4));

//output: 4
const subscribe = example.subscribe((val) => console.log(val));

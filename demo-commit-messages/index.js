const { from, interval } = require("rxjs");
const { switchMap, map, pluck } = require("rxjs/operators");
const axios = require("axios");
const cheerio = require("cheerio");

const axiosStub = () => axios.default.get("http://whatthecommit.com/");
// 1o liga intervalo de 1 em 1 segundo
interval(1000)
  .pipe(
    switchMap(() => from(axiosStub())),
    pluck("data")
  )
  .pipe(
    map((html) => {
      const $ = cheerio.load(html);
      const [content] = $("#content > p").text().split("\n");
      return content.trim();
    })
  )
  .subscribe((res) => console.log(res));

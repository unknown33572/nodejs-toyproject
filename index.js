import { oddSecond, evenSecond } from "./exportECMAVar.js";
import checkStringOddOrEven from "./exportECMAFunc.js";


//#region CommonJS

// const { odd, even } = require("./exportCommonVar.js");
// const checkNumber = require("./exportCommonFunc.js");

// function checkStringOddOrEvenCommon(str) {
//   if (str.length % 2) {
//     return odd;
//   }
//   return even;
// }

// console.log(checkNumber(10));

// console.log(checkStringOddOrEvenCommon("hello world!"));

//#endregion

//#region  ECMA6

// function checkStringOddOrEvenSecond(str) {
//   if (str.length % 2) {
//     return oddSecond;
//   }
//   return evenSecond;
// }

// console.log(checkStringOddOrEvenSecond(10));
// console.log(checkStringOddOrEven("hello world!"));

//#endregion

// console.log(import.meta.url);
// console.log(import.meta.env);

import { setTimeout, setInterval } from "timers/promises";

await setTimeout(3000);

console.log("3초 뒤에 실행됩니다.");

for await (const start of setInterval(1000, Date.now())) {
  console.log("1초마다 실행됩니다.", new Date(start));

}
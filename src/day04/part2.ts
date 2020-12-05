import {arrayOfNumbers, exactlyTwoDigits, max, min, neverDecrease} from "./helpers";


function checkRules2(array: number[]) {
  const ND = neverDecrease(array);
  const DD = exactlyTwoDigits(array);
  return (ND && DD);
}

function count(min: number, max: number) {
  let numberOfPass = 0;
  for (let num = min; num < max + 1; num++) {
    const array = arrayOfNumbers(num);
    const check = checkRules2(array);
    if (check) {
      numberOfPass++;
    }
  }
  return numberOfPass;
}

console.log(count(min, max));

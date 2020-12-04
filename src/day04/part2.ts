import {arrayOfNumbers, exactlyTwoDigits, neverDecrease} from "./helpers";
import {max, min} from "./input";

function checkRules2(array:number[]) {
    const ND = neverDecrease(array);
    const DD = exactlyTwoDigits(array);
    return !!(ND && DD);
}

//test
//console.log(checkRules2(arrayOfNumbers(777889)));

function count(min: number, max: number) {
    let numberOfPass = 0;
    for(let num = min; num < max + 1; num++){
        const array = arrayOfNumbers(num);
        const check = checkRules2(array);
        if (check) {
            numberOfPass++;
        }
    }
    return numberOfPass;
}

console.log(count(min, max));

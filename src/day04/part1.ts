import {arrayOfNumbers, twoDigits, neverDecrease} from "./helpers";
import {max, min} from "./input";

function checkRules(array:number[]) {
    const ND = neverDecrease(array);
    const DD = twoDigits(array);
    return !!(ND && DD);
}

// test
//console.log(checkRules(arrayOfNumbers(155566)));

function count(min: number, max: number) {
    let numberOfPass = 0;
    for(let num = min; num < max + 1; num++){
        const array = arrayOfNumbers(num);
        const check = checkRules(array);
        if (check) {
            numberOfPass++;
        }
    }
    return numberOfPass;
}

console.log(count(min, max));

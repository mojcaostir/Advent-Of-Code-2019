import {arrayOfNumbers, max, min, neverDecrease, twoDigits} from "./helpers";

function checkRules(array: number[]) {
    const ND = neverDecrease(array);
    const DD = twoDigits(array);
    return (ND && DD);
}

function count(min: number, max: number) {
    let numberOfPass = 0;
    for (let num = min; num < max + 1; num++) {
        const array = arrayOfNumbers(num);
        const check = checkRules(array);
        if (check) {
            numberOfPass++;
        }
    }
    return numberOfPass;
}

console.log(count(min, max));

export const min = 165432;
export const max = 707912;

export function arrayOfNumbers(number: number) {
  let array = [];
  while (number > 0) {
    let digit = number % 10;
    array.unshift(digit);
    number = Math.floor(number / 10);
  }
  return array
}

export function neverDecrease(array: number[]): boolean {
  let result: boolean = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      result = false;
      break;
    }
  }

  return result
}

export function twoDigits(array: number[]): boolean {
  let result: boolean = false;
  for (let i = 1; i < array.length; i++) {
    if (array[i] == array[i - 1]) {
      result = true;
      break;
    }
  }

  return result
}

export function exactlyTwoDigits(array: number[]): boolean {
  let result: boolean = false;
  for (let i = 1; i < array.length; i++) {
    if (array[i] == array[i - 1] && array[i] != array[i + 1] && array[i] != array[i - 2]) {
      result = true;
      break;
    } else {
      result = false;
    }
  }
  return result
}

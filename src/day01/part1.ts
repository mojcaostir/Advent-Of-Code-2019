import fs from 'fs';

const data: number[] = fs.readFileSync(__dirname +'/input.txt', 'utf-8').split('\n').map(Number);

function calculateFuel(x: number): number {
    return Math.floor(x / 3) - 2;
}

let sum = 0;
for (let i = 0; i < data.length; i++) {
    const fuel = calculateFuel(data[i]);
    fuel > 0 ?  sum += fuel : 0;
}

console.log(sum);

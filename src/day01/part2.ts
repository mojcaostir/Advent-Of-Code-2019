import fs from 'fs';

const data: number[] = fs.readFileSync(__dirname +'/input.txt', 'utf-8').split('\n').map(Number);

function calculate(x: number): number {
    return Math.floor(x / 3) - 2;
}

function calculateFuel(mass: number) {
    let fuelSum = 0;
    let fuel = calculate(mass);
    while (fuel > 0) {
        fuelSum += fuel;
        fuel = calculate(fuel);
    }
    return fuelSum;
}

let sum = 0;
for (let i = 0; i < data.length; i++) {
    const f = calculateFuel(data[i]);
    sum += f;
}

console.log(sum);

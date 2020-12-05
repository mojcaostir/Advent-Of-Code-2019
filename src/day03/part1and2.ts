import fs from "fs";

type Step = { direction: string, length: number }

type Point = [number, number];

const twoWires: string[][] =
  fs
    .readFileSync(__dirname +'/input.txt', 'utf-8')
    .trim()
    .split('\n')
    .map(wire => wire.split(','));

const path1: Step[] = twoWires[0].map(steps => ({direction: steps[0], length: +steps.slice(1)}))
const path2: Step[] = twoWires[1].map(steps => ({direction: steps[0], length: +steps.slice(1)}))

const directions = { U: [0, 1], R: [1, 0], D: [0, -1], L: [-1, 0] };

function getPoints(path: Step[]): Point[] {
  let x = 0;
  let y = 0;
  const points: Point[] = []
  for(const step of path) {
    // @ts-ignore
    const [unitStepX, unitStepY] = directions[step.direction];

    for (let unitStep = 0; unitStep < step.length; unitStep++) {
      x += unitStepX
      y += unitStepY
      points.push([x,y])
    }
  }
  return points
}

function getIntersectionsAndStepCount(points1: Point[], points2: Point[]) {
  const intersections = []
  const stepCount = [];
  for(const point of points1) {
    for (let i = 0; i < points2.length; i++) {
      const x = points2[i][0] == point[0]
      const y = points2[i][1] == point[1]
      if (x && y) {
        const stepCount1 = points1.indexOf(point)+1
        const stepCount2 = points2.indexOf(points2[i])+1
        const sumStepCount = stepCount1 + stepCount2
        intersections.push(point);
        stepCount.push(sumStepCount)
      }
    }
  }
  const smallestStepCount = Math.min(...stepCount)
  return {intersections, smallestStepCount}
}

function smallestManhattanDistance(points: Point[]) {
  const distances: number[] = []
  for(const point of points) {
    const distance = Math.abs(point[0]) + Math.abs(point[1])
    distances.push(distance)
  }
  return Math.min(...distances)
}

const points1 = getPoints(path1)
const points2 = getPoints(path2)

const points = getIntersectionsAndStepCount(points1, points2)

const smallestDistance = smallestManhattanDistance(points.intersections)

const steps = points.smallestStepCount

console.log(smallestDistance)
console.log(steps)

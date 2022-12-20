import { decResult } from './processResult';

export const calculateDistanceRaw = (one: number[], two: number[]) => {
  let distance = 0;
  for (let i = 0; i < one.length; i += 1) {
    distance += (one[i] - two[i]) ** 2;
  }
  distance = Math.sqrt(distance);
  return distance;
};

const calculateDistance = (one: string, two: string) => {
  const oneResult = decResult(one);
  const twoResult = decResult(two);
  return calculateDistanceRaw(oneResult, twoResult);
};

export default calculateDistance;

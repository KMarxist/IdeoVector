import { decResult } from './processResult';

const calculateDistance = (one: string, two: string) => {
  const oneResult = decResult(one);
  const twoResult = decResult(two);
  let distance = 0;
  for (let i = 0; i < oneResult.length; i += 1) {
    distance += (oneResult[i] - twoResult[i]) ** 2;
  }
  distance = Math.sqrt(distance);
  return distance;
};

export default calculateDistance;

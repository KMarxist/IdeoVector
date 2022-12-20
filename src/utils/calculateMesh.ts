import { calculateDistanceRaw } from './calculateDistance';
import { decResult } from './processResult';

const calculateMesh = (datas: string[]) => {
  const decDatas = datas.map((data) => decResult(data));
  const mesh = [];
  for (let i = 0; i < decDatas.length; i += 1) {
    for (let j = i + 1; j < decDatas.length; j += 1) {
      const res = calculateDistanceRaw(decDatas[i], decDatas[j]);
      mesh.push(res);
    }
  }
  return { mesh, avgRange: mesh.reduce((a, b) => a + b, 0) / mesh.length };
};

export default calculateMesh;

import gzip from 'gzip-js';
import { fromByteArray, toByteArray } from 'base64-js';

export const encResult = (resultAry: number[]) => {
  const gzipped = gzip.zip(resultAry, { level: 9 });
  const base64 = fromByteArray(new Uint8Array(gzipped));
  return base64;
};

export const decResult: (base64: string) => (2 | 1 | 0 | -1 | -2)[] = (base64) => {
  const gzipped = toByteArray(base64);
  const unzipped = gzip.unzip(gzipped);
  return Array.from(new Int8Array(unzipped)) as (2 | 1 | 0 | -1 | -2)[];
};

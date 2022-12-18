import gzip from 'gzip-js';
import { fromUint8Array, toUint8Array } from 'js-base64';

export const encResult = (resultAry: number[]) => {
  const gzipped = gzip.zip(resultAry, { level: 9 });
  const base64 = fromUint8Array(new Uint8Array(gzipped), true);
  return base64;
};

export const decResult: (base64: string) => (2 | 1 | 0 | -1 | -2)[] = (base64) => {
  const gzipped = toUint8Array(base64);
  const unzipped = gzip.unzip(gzipped);
  return Array.from(new Int8Array(unzipped)) as (2 | 1 | 0 | -1 | -2)[];
};

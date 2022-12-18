import '@material/mwc-button';
import { useLocation } from '@solidjs/router';
import { Component, createSignal, Show } from 'solid-js';
import questions from '../data/questions';
import calculateDistance from '../utils/calculateDistance';

const DistancePage: Component = () => {
  const loc = useLocation<{ res: string }>();
  const resQuery = loc.query.res;
  const [myRes, setMyRes] = createSignal(resQuery);
  const [otherRes, setOtherRes] = createSignal('');
  const [distance, setDistance] = createSignal<number | null>(null);
  return (
    <div class="flex flex-col p-4 card">
      <h1 class="font-bold text-center text-3xl">距离计算</h1>
      <form class="flex flex-col mt-4">
        <input
          class=" rounded-md flex-grow font-mono border-1 py-2 px-4"
          placeholder="你的距离码"
          w:focus="outline-2 outline outline-blue-400"
          value={myRes()}
          onInput={(e) => setMyRes(e.currentTarget.value)}
        />
        <input
          class="rounded-md flex-grow font-mono border-1 mt-2 py-2 px-4"
          placeholder="别人的距离码"
          w:focus="outline-2 outline outline-blue-400"
          value={otherRes()}
          onInput={(e) => setOtherRes(e.currentTarget.value)}
        />
        <mwc-button
          label="计算"
          class="mt-2"
          outlined
          disabled={!myRes() || !otherRes()}
          onClick={(e) => {
            e.preventDefault();
            setDistance(calculateDistance(myRes(), otherRes()));
          }}
        />
      </form>
      <Show when={distance() !== null}>
        <p class="mt-2">你们的距离：{distance()!.toFixed(2)}</p>
      </Show>
      <div class="prose max-w-none mt-8">
        <h2>距离说明</h2>
        <p>
          本套测试中，距离的最大值为{Math.sqrt(16 * questions.length).toFixed(2)}
          。距离的差异不是线性的，在距离比较小时，回答间的一点差异会导致距离的巨大变化。距离在 15
          以内都可以算是比较近的。
        </p>
        <p>
          距离的计算方法是，把对每道题的回答作为一个坐标轴，将两者坐标值的差的平方相加后开根号。
        </p>
        <p>
          具体可见本项目 <a href="https://github.com/KMarxist/IdeoVector">README</a>
        </p>
      </div>
    </div>
  );
};

export default DistancePage;

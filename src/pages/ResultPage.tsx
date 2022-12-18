import '@material/mwc-button';
import { A, useLocation } from '@solidjs/router';
import { Component, For } from 'solid-js';
import { toast } from 'solid-toast';
import Result from '../components/Result';
import ideologies from '../data/ideologies';
import questions from '../data/questions';
import { decResult } from '../utils/processResult';

const ResultPage: Component = () => {
  const loc = useLocation<{ res: string }>();
  const resQuery = loc.query;
  const result = decResult(resQuery.res).map((res) => {
    switch (res) {
      case 0:
        return 0;
      case 1:
        return 0.33;
      case 2:
        return 1;
      case -1:
        return -0.33;
      case -2:
        return -1;
      default:
        return 0;
    }
  });
  const scores = { econ: 0, govt: 0, natn: 0, scty: 0 };
  const maxScores = { ...scores };
  result.forEach((choice, index) => {
    (Object.entries(questions[index].effect) as [keyof typeof scores, number][]).forEach(
      ([key, value]) => {
        scores[key] += value * choice;
        maxScores[key] += Math.abs(value);
      },
    );
  });
  (Object.entries(scores) as [keyof typeof scores, number][]).forEach(([key, value]) => {
    scores[key] = (value + maxScores[key]) / (2 * maxScores[key]);
    scores[key] = Math.round(scores[key] * 100);
  });
  const ideologiesDistances = ideologies
    .map((ideology) => {
      let dist = 0;
      dist += (ideology.stats.econ - scores.econ) ** 2 * 1.5;
      dist += (ideology.stats.govt - scores.govt) ** 2 * 1.3;
      dist += (ideology.stats.natn - scores.natn) ** 2 * 1.1;
      dist += (ideology.stats.scty - scores.scty) ** 2;
      return { ...ideology, dist };
    })
    .sort((a, b) => a.dist - b.dist);
  return (
    <div class="card p-4 flex flex-col items-center">
      <h1 class="text-3xl font-light">测试结果</h1>
      <For each={Object.entries(scores) as [keyof typeof scores, number][]}>
        {([key, value]) => <Result label={key} value={value} />}
      </For>
      <h2 class="text-2xl mt-4">最接近的意识形态：{ideologiesDistances[0].name}</h2>
      <p class="mt-2">{ideologiesDistances[0].desc}</p>
      <h2 class="text-2xl mt-4">次接近的意识形态：{ideologiesDistances[1].name}</h2>
      <p class="mt-2">{ideologiesDistances[1].desc}</p>
      <hr />
      <h2 class="text-2xl mt-4">你的坐标信息</h2>
      <p class="mt-2 select-all font-mono">{resQuery.res}</p>
      <p class="mt-2">根据这一信息，你可以计算与别人的距离</p>
      <div class="flex mt-2">
        <mwc-button
          label="复制我的坐标码"
          outlined
          onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText(resQuery.res);
            toast.success('已复制到剪贴板');
          }}
        />
        <A href={`/IdeoVector/distance?res=${resQuery.res}`} class="ml-2">
          <mwc-button label="去计算" outlined />
        </A>
      </div>
    </div>
  );
};

export default ResultPage;

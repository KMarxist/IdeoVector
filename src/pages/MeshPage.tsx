import '@material/mwc-icon-button';
import { IoAddCircleOutline, IoCalculator } from 'solid-icons/io';
import { Component, createSignal, For, Show } from 'solid-js';
import { createStore } from 'solid-js/store';
import Input from '../components/Input';
import calculateMesh from '../utils/calculateMesh';

const MeshPage: Component = () => {
  const [persons, setPersons] = createStore<{ content: string; id: number }[]>([
    { content: '', id: 0 },
  ]);
  const [average, setAverage] = createSignal<number | null>(null);
  return (
    <div class="max-w-none p-4 card">
      <h1 class="font-bold text-center text-3xl">计算距离平均值</h1>
      <div class="flex flex-col">
        <For each={persons}>
          {(person, index) => (
            <Input
              placeholder={`第 ${index() + 1} 个`}
              value={person.content}
              onChange={(e) => {
                setPersons((pers) => pers.id === person.id, 'content', e.currentTarget.value);
              }}
              classList={{ 'mt-2': true }}
            />
          )}
        </For>
      </div>
      <mwc-icon-button
        class="text-green-600 mt-2"
        onClick={(e) => {
          e.preventDefault();
          setPersons((pers) => [...pers, { content: '', id: pers.length }]);
        }}
      >
        <IoAddCircleOutline />
      </mwc-icon-button>
      <mwc-icon-button
        class="text-green-600 mt-2 ml-2"
        onClick={(e) => {
          e.preventDefault();
          const res = calculateMesh(persons.map((p) => p.content));
          console.log(res);
          setAverage(res.avgRange);
        }}
      >
        <IoCalculator />
      </mwc-icon-button>
      <Show when={average() !== null}>
        <p>平均距离：{average()}</p>
      </Show>
      <div class="prose max-w-none mt-8">
        <h2>说明</h2>
        <p>会计算每个人与其他人的距离，并求平均。设有 N 个人，则计算次数为 N! 次。</p>
        <ul>
          <li>≤12 - 一个政治光谱比较单一的社区内，成员之间的距离</li>
          <li>
            17.7 - 网站作者（自由意志社会主义）到绝对中间派（全选中立，相当于坐标轴原点）的距离
          </li>
          <li>≥23 - 可以认为双方对彼此是 Unacceptable（可接受的）</li>
        </ul>
        <p>
          距离的计算方法是，把对每道题的回答作为一个坐标轴，将两者坐标值的差的平方相加后开根号。具体可见本项目{' '}
          <a href="https://github.com/KMarxist/IdeoVector">README</a>
        </p>
      </div>
    </div>
  );
};

export default MeshPage;

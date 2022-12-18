import '@material/mwc-button';
import { useNavigate } from '@solidjs/router';
import { Component, createSignal } from 'solid-js';
import questions from '../data/questions';
import { encResult } from '../utils/processResult';

const QuestPage: Component = () => {
  const [questNum, setQuestNum] = createSignal(0);
  const result = Array.from({ length: questions.length }, () => 0);
  const quest = () => questions[questNum()];
  const navigate = useNavigate();
  const submit = (optNum: 2 | 1 | 0 | -1 | -2) => {
    result[questNum()] = optNum;
    if (questNum() < questions.length - 1) {
      setQuestNum(questNum() + 1);
    } else {
      navigate(`/IdeoVector/result?res=${encodeURIComponent(encResult(result))}`);
    }
  };
  return (
    <div class="card p-4 flex flex-col items-center">
      <p class="text-lg lg:text-2xl font-thin">
        第 {questNum() + 1} 题 剩余 {questions.length - questNum() - 1} 题
      </p>
      <p class="mt-2 text-lg lg:text-2xl">{quest().question}</p>
      <form class="w-full lg:w-[75%] xl:w-[50%] mt-8">
        <mwc-button onClick={() => submit(2)} raised label="强烈同意" fullwidth />
        <mwc-button
          onClick={() => submit(1)}
          style={{ '--mdc-theme-primary': '#34D399' }}
          class="mt-2 text-lime"
          raised
          label="同意"
          fullwidth
        />
        <mwc-button
          onClick={() => submit(0)}
          style={{ '--mdc-theme-primary': '#9E9E9E' }}
          class="mt-2"
          raised
          label="中立 / 不确定"
          fullwidth
        />
        <mwc-button
          onClick={() => submit(-1)}
          style={{ '--mdc-theme-primary': '#F87171' }}
          class="mt-2"
          raised
          label="反对"
          fullwidth
        />
        <mwc-button
          onClick={() => submit(-2)}
          style={{ '--mdc-theme-primary': '#DC2626' }}
          class="mt-2"
          raised
          label="强烈反对"
          fullwidth
        />
        <mwc-button
          onClick={(e) => {
            e.preventDefault();
            setQuestNum((num) => num - 1);
          }}
          style={{ '--mdc-theme-primary': '#3B82F6' }}
          class="mt-2"
          disabled={questNum() === 0}
          raised
          label="上一题"
          fullwidth
        />
      </form>
    </div>
  );
};

export default QuestPage;

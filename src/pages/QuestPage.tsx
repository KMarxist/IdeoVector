import '@material/mwc-button';
import { useNavigate } from '@solidjs/router';
import { Component, createSignal, JSX } from 'solid-js';
import questions from '../data/questions';
import darkMode from '../utils/darkMode';
import { encResult } from '../utils/processResult';

const QuestButton: Component<JSX.IntrinsicElements['mwc-button'] & { color?: string }> = (
  props,
) => (
  <mwc-button
    label={props.label}
    style={{
      '--mdc-theme-primary': props.color,
    }}
    raised={!darkMode.dark()}
    outlined={darkMode.dark()}
    fullwidth
    {...props}
  />
);

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
        <QuestButton onClick={() => submit(2)} label="强烈同意" />
        <QuestButton onClick={() => submit(1)} label="同意" color="#34D399" class="mt-2" />
        <QuestButton onClick={() => submit(0)} label="中立 / 不确定" color="#9E9E9E" class="mt-2" />
        <QuestButton onClick={() => submit(-1)} label="反对" color="#F87171" class="mt-2" />
        <QuestButton onClick={() => submit(-2)} label="强烈反对" color="#DC2626" class="mt-2" />
        <QuestButton
          onClick={() => setQuestNum((num) => num - 1)}
          label="上一题"
          color="#3B82F6"
          class="mt-2"
          disabled={questNum() === 0}
        />
      </form>
    </div>
  );
};

export default QuestPage;

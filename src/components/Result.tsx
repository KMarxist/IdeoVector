import { Component, createMemo } from 'solid-js';
import getLabel from '../data/labels';

const Result: Component<{ value: number; label: 'econ' | 'govt' | 'natn' | 'scty' }> = (props) => {
  const label = createMemo(() => getLabel(props.value, props.label));
  return (
    <div class="mt-4 w-full">
      <div class="grid grid-cols-5 grid-rows-2">
        <div />
        <p>{props.value}%</p>
        <p class="text-center">{label().title}</p>
        <p class="text-right">{100 - props.value}%</p>
        <div />
        <p class="flex-shrink-0 mr-2 text-right">{label().left}</p>
        <div class="relative w-full bg-[#009688] h-8 col-span-3">
          <div
            class="absolute top-0 left-0 bottom-0 bg-[#e91e63]"
            style={{ width: `${props.value}%` }}
          />
        </div>
        <p class="flex-shrink-0 ml-2">{label().right}</p>
      </div>
    </div>
  );
};
export default Result;

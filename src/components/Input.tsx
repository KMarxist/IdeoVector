import { Component, JSX } from 'solid-js';

const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    class="rounded-md flex-grow font-mono border-1 py-2 px-4"
    w:focus="outline-2 outline outline-blue-400"
    {...props}
  />
);

export default Input;

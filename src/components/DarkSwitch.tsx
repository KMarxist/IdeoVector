import { IoMoon, IoSunny } from 'solid-icons/io';
import { Component, Show } from 'solid-js';
import darkMode from '../utils/darkMode';
import '@material/mwc-icon-button';

const DarkSwitch: Component = () => (
  <mwc-icon-button
    onClick={(e) => {
      e.preventDefault();
      darkMode.toggleDarkMode();
    }}
    class="dark:text-stone-200"
    style={{ '--mdc-icon-button-size': '32px' }}
  >
    <Show when={darkMode.dark()} fallback={<IoMoon size={16} />}>
      <IoSunny size={16} />
    </Show>
  </mwc-icon-button>
);

export default DarkSwitch;

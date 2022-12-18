/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'windicss/helpers';
import plugin from 'windicss/plugin';
import typography from 'windicss/plugin/typography';
import forms from 'windicss/plugin/forms';

export default defineConfig({
  attributify: { prefix: 'w:' },
  plugins: [
    typography({ dark: true }),
    plugin(({ addComponents }) => {
      const card = {
        '.card': {
          'border-radius': '.375rem;',
          'background-color': 'rgb(255 255 255);',
          '--tw-shadow': '0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);',
          '--tw-shadow-colored':
            '0 4px 10px var(--tw-shadow-color), 0 0 1px var(--tw-shadow-color);',
          'box-shadow':
            'var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);',
        },
      };
      addComponents(card);
    }),
    forms,
  ],
});

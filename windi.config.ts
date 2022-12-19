/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'windicss/helpers';
import forms from 'windicss/plugin/forms';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  attributify: { prefix: 'w:' },
  theme: {
    extend: {
      boxShadow: {
        app: '0 4px 10px rgba(0, 0, 0, 0.05), 0 0 1px rgba(0, 0, 0, 0.1)',
        appDark: '0 4px 10px rgba(255, 255, 255, 0.05), 0 0 1px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [typography({ dark: true }), forms],
});

import dns from 'node:dns';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import WindiCSS from 'vite-plugin-windicss';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [WindiCSS(), solidPlugin()],
  build: {
    target: 'chrome59',
  },
  base: '/IdeoVector/',
});

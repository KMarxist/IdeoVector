import dns from 'node:dns';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import WindiCSS from 'vite-plugin-windicss';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [WindiCSS(), solidPlugin()],
  build: {
    target: 'chrome59',
    rollupOptions: {
      input: { index: resolve(__dirname, 'index.html'), '404': resolve(__dirname, '404.html') },
    },
  },
  base: '/IdeoVector/',
});

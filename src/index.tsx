import { render } from 'solid-js/web';
import 'virtual:windi-devtools';
import 'virtual:windi.css';
import App from './App';
import { Router } from '@solidjs/router';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.querySelector('div#root')!,
);

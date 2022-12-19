import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';
import 'virtual:windi-devtools';
import 'virtual:windi.css';
import App from './App';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.querySelector('div#root')!,
);

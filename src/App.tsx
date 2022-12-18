import { A, Route, Routes } from '@solidjs/router';
import { Component } from 'solid-js';
import icon from './assets/favicon.png';
import DistancePage from './pages/DistancePage';
import HomePage from './pages/HomePage';
import QuestPage from './pages/QuestPage';
import ResultPage from './pages/ResultPage';

const App: Component = () => (
  <>
    <header class="card p-4">
      <A href="/IdeoVector/" class="flex no-underline text-inherit">
        <img src={icon} height="24" width="24" class="h-6 w-6 object-contain" />
        <p class="ml-2">政治坐标系测试，但是向量</p>
      </A>
    </header>
    <main class="flex flex-col mt-2 mx-2 lg:mx-auto max-w-7xl">
      <Routes>
        <Route path="/IdeoVector">
          <Route path="/" element={<HomePage />} />
          <Route path="/quest" element={<QuestPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/distance" element={<DistancePage />} />
        </Route>
      </Routes>
    </main>
  </>
);

export default App;

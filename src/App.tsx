import { A, Route, Routes } from '@solidjs/router';
import { Component, ErrorBoundary } from 'solid-js';
import { Toaster } from 'solid-toast';
import icon from './assets/favicon.png';
import DistancePage from './pages/DistancePage';
import HomePage from './pages/HomePage';
import QuestPage from './pages/QuestPage';
import ResultPage from './pages/ResultPage';
import './style.css';

const App: Component = () => (
  <ErrorBoundary
    fallback={(err: Error) => {
      console.error(err);
      return <div>出错了：{err.message}</div>;
    }}
  >
    <Toaster position="top-center" gutter={8} />
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
  </ErrorBoundary>
);

export default App;

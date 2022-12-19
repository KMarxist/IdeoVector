import { A, Route, Routes } from '@solidjs/router';
import { Component, ErrorBoundary, lazy } from 'solid-js';
import { Toaster } from 'solid-toast';
import icon from './assets/favicon.png';
import DarkSwitch from './components/DarkSwitch';
import DistancePage from './pages/DistancePage';
import HomePage from './pages/HomePage';
import QuestPage from './pages/QuestPage';
import ResultPage from './pages/ResultPage';
import './style.css';

const MeshPage = lazy(() => import('./pages/MeshPage'));

const App: Component = () => (
  <ErrorBoundary
    fallback={(err: Error) => {
      console.error(err);
      return <div>出错了：{err.message}</div>;
    }}
  >
    <Toaster position="top-center" gutter={8} />
    <header class="flex px-4 py-3 card justify-between">
      <A
        href="/IdeoVector/"
        class="flex text-inherit no-underline items-center dark:text-stone-200"
      >
        <img src={icon} height="24" width="24" class="object-contain h-6 w-6" />
        <p class="ml-2">政治坐标系测试，但是向量</p>
      </A>
      <DarkSwitch />
    </header>
    <main class="flex flex-col mx-2 mt-2 max-w-7xl lg:mx-auto">
      <Routes>
        <Route path="/IdeoVector">
          <Route path="/" element={<HomePage />} />
          <Route path="/quest" element={<QuestPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/distance" element={<DistancePage />} />
          <Route path="/mesh" element={<MeshPage />} />
        </Route>
      </Routes>
    </main>
  </ErrorBoundary>
);

export default App;

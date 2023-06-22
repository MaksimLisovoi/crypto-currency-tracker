import { Layout } from 'components/Layout/Layout';

import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from 'components/GlobalStyle';

const HomePage = lazy(() => import('../../pages/Home'));

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

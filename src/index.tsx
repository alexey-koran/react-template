import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { App } from '@/App';

import '@/styles/global.pcss';

const container = document.getElementById('app');

if (container === null) {
  throw new Error('Root not found');
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

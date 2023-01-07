import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { App } from '@/App';

import '@/styles/index.pcss';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

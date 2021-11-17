import '@/assets/stylesheets/index.scss';

import { StrictMode } from 'react';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { CookiesProvider } from 'react-cookie';

import { App } from '@/App';

render(
  <StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('app'),
);
